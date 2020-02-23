const { exec } = require('../db/mysql')
import {decrypt,genPassword} from "./../utils/util"
import jwt from "./../utils/jwt"

const adminLogin = async function(req,res,next){

    const username = req.body.username;
    const originalText = decrypt(req.body.password);
    const ciphertext = genPassword(originalText)
    const sql = `select * from users where username='${username}' and password='${ciphertext}'`

    const sqlRes =await exec(sql)
    if(!sqlRes.length){
         res.send({
            statusCode:500,
            message:"用户名或密码错误"
        })
        
    }else{
        let jwtToken = jwt.sign({username:sqlRes[0].username});
        console.log(sqlRes)
        res.send({
            statusCode:200,
            message:"登录成功",
            token:jwtToken,
            data:{
                username:username, 
                photo:sqlRes[0].photo               
            }
            
        })
    }
}


module.exports = {
    adminLogin
}