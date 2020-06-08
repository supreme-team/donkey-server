// 1. 引入模块
// import config from "./config/baseConfig";

const createError = require('http-errors');
const express = require('express');
const router = express.Router();
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const logger = require('morgan');
const nunjucks = require('nunjucks'); // 引入模板引擎
const jwt = require('jsonwebtoken');

// 2. 引入路由

const websiteRouter = require('./routes/website');
const userRouter = require('./routes/user');
const tableRouter = require('./routes/table');
const tableUploadRouter = require('./routes/tableUpload');
const websiteUploadRouter = require('./routes/websiteUpload');

//  引入session
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

// 引入基础配置文件
const baseConfig = require('./config/baseConfig');

// 配置session存储的属性
const options = {
  host: baseConfig.database.HOST,
  port: baseConfig.database.PORT,
  user: baseConfig.database.USER,
  password: baseConfig.database.PASSWORD,
  database: baseConfig.database.DATABASE
};
const sessionStore = new MySQLStore(options);

// 3. 实例化服务器
const app = express();

//3.1配置允许跨域
app.all("*", function(req, res, next) {
  if (!req.get("Origin")) return next();
  // use "*" here to accept any origin
  res.set("Access-Control-Allow-Origin","*");
  res.set("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTION");
  res.set("Access-Control-Allow-Headers", "X-Requested-With, Content-Type,authorization");
  // res.set('Access-Control-Allow-Max-Age', 3600);
  // if ("OPTIONS" === req.method) return res.sendStatus(200);
  // next();
    if (req.method.toLowerCase() === 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
});

//配置token拦截、验证
app.all('/api/*',function (req, res, next) {
  if(req.url==='/api/user/adminLogin'){
    next();
  }else{
    let jwtToken = req.headers.authorization;
    jwt.verify(jwtToken, baseConfig.TOKEN_KEY, async (err, payload)=>{
      // console.log(err)
      if(err){
        if (err.name === 'TokenExpiredError') {
          res.status(401).send({message:'token已经过期'});
        } else {
          res.status(401).send({message:'token已经失效'});
        }
      }else{
        let Token = payload
        if(Token){
          next();
        }else{
          res.status(401).send({message:'token已经过期'});
        }
      }
    });
  }
})


// 4. 设置模板引擎
app.set('views', path.join(__dirname, 'views'));
nunjucks.configure('views', {
  autoescape: true,
  express: app,
  noCache: true
});

// 5. 使用各种中间件
app.use(logger('dev'));
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json({}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//设置静态资源的路径
app.use(express.static(path.join(__dirname, 'public/dist')));


// 中间件使用session
app.use(session({
  //参数配置
  key: 'yqPlan',
  secret: 'itLike',//加密字符串
  resave: false, //强制保存session，即使它没有变化
  saveUninitialized: true,//强制将未初始化的session存储。当新建一个session且未设定属性或值时，它就处于未初始化状态。在设定cookie前，这对于登录验证，减轻服务器存储压力，权限控制是有帮助的，默认为true
  cookie: {maxAge: 24 * 3600 * 1000},
  rolling: true, //在每次请求时进行设置cookie，将重置cookie过期时间
  store: sessionStore
}));

// 6. 使用路由中间件
app.use('/api/user',userRouter);
app.use('/api/table',tableRouter);
app.use('/api/website',websiteRouter);
app.use('/api/tableUpload',tableUploadRouter);
app.use('/api/websiteUpload',websiteUploadRouter);





// 7. 全局处理404
app.use(function(req, res, next) {
  next(createError(404));
});

// 8. 全局的错误处理
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // 渲染错误页面
  res.status(err.status || 500);
  res.render('error.html');
});

module.exports = app;
