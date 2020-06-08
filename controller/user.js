const { Query } = require('../db/mysql')
const jwt = require("./../utils/jwt")

//用户登录
const adminLogin = async function(req,res,next){

    const username = req.body.username;
    const password = req.body.password;
    const sql = `select * from user where username='${username}' and password='${password}'`;

    const sqlRes =await Query(sql)
    if(!sqlRes.length){
         res.send({
            statusCode:500,
            message:"用户名或密码错误"
        })

    }else{
        let jwtToken = jwt.sign({username:sqlRes[0].username});
        res.send({
            statusCode:200,
            message:"登录成功",
            token:jwtToken,
            data:{
                username:sqlRes[0].username,
                real_name:sqlRes[0].real_name,
                department:sqlRes[0].department
            }

        })
    }
};


//修改密码
const SetPassword = async function(req,res,next){

    const username = req.body.username;
    const ruleForm = req.body.ruleForm;
    const sql = `select * from user where username='${username}' and password='${ruleForm.oldPass}';`
    const sqlRes =await Query(sql)
    console.log(sqlRes)
    if(!sqlRes.length){
        res.send({
            statusCode:500,
            message:"您所输入的原密码错误"
        })

    }else{
        // let sql2 = `UPDATE user SET password = '${ruleForm.pass}' WHERE username ='${username}';`;
        let sql2 = `UPDATE user SET password = '${ruleForm.pass}' WHERE username ='${username}';`;
        const sqlRes2 =await Query(sql2);
        if(!sqlRes2){
            res.send({
                statusCode:500,
                message:"修改失败"
            })
        }else{
            res.send({
                statusCode:200,
                message:"密码修改成功",
            })
        }

    }
}


//得到该用户的合同与网站授权数量
const NumInfo = async function(req,res,next){

    const username = req.body.username;
    console.log(username)
    const sql = `select * from contract where username='${username}';`
    const sql2 = `select * from website where username='${username}';`
    const sql3 = `select * from contract where username='${username}' and state='生效';`
    const sql4 = `select * from contract where username='${username}' and state='失效';`
    const sqlRes =await Query(sql);
    const sqlRes2 =await Query(sql2);
    const sqlRes3 =await Query(sql3);
    const sqlRes4 =await Query(sql4);
    if(sqlRes.length || sqlRes2.length || sqlRes3.length || sqlRes4.length){
        console.log(sqlRes.length,sqlRes2.length,sqlRes3.length,sqlRes4.length)
        res.send({
            statusCode:200,
            data:{
                AllContract:sqlRes.length,
                IsEffectContract:sqlRes3.length,
                NoEffectContract:sqlRes4.length,
                AllWebsite:sqlRes2.length
            }
        })
    }else {
        console.log(1110)
        res.send({
            statusCode:500,
        })
    }
    // console.log(sqlRes)

}

module.exports = {
    adminLogin,
    SetPassword,
    NumInfo
}
