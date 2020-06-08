const express = require('express');
const router = express.Router();
const adminLogin =require("../controller/user")

//1、登录
router.post('/adminlogin',adminLogin.adminLogin);

//2、修改密码
router.post('/SetPassword',adminLogin.SetPassword);

//得到该用户的合同与网站授权数量
router.post('/NumInfo',adminLogin.NumInfo)
module.exports = router;
