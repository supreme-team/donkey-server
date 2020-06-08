// 1. 引入模块
const mysql = require('mysql');
const baseConfig = require('../config/baseConfig');

// 2. 创建连接池
let pool  = mysql.createPool({
    host: baseConfig.database.HOST,
    user: baseConfig.database.USER,
    password: baseConfig.database.PASSWORD,
    database: baseConfig.database.DATABASE,
    // multipleStatements: true
});


/**
 * 全局操作数据库方法
 * @param sql
 * @param values
 */
function Query(sql, values){
    return new Promise((resolve, reject)=>{
        pool.getConnection(function(err, connection) {
            if (err){
               reject({
                   code: 500,
                   msg: '连接数据库失败',
                   data: err
               })
               return
            }

            // 数据库已经连接
            connection.query(sql, values, function (error, results, fields) {
                // 关闭连接池
                if (error){
                    reject(error)
                    return
                }
                connection.release();
                // 返回数据库的执行结果
                resolve(results)
            });
        });
    });
};


module.exports = {
    Query
}
