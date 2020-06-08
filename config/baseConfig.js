const path = require('path');

const config = {
    // 数据库配置
    database: {
        HOST: '49.232.91.5', // 主机
        PORT: '3306',  // 端口
        USER: 'root',  // MySQL认证的用户名
        PASSWORD: 'MYsql_1234', // MySQL认证的用户密码
        DATABASE: 'agent'
        // 连接的数据库
        // HOST: '132.90.165.230', // 主机
        // PORT: '8073',  // 端口
        // USER: 'agent',  // MySQL认证的用户名
        // PASSWORD: 'B6.agent312', // MySQL认证的用户密码
        // DATABASE: 't41_dszx_agentdb' // 连接的数据库
    },
    // 图片存放目录
    // imgUploadDir: path.join(__dirname, '../public/upload/image'),
    //表格存放目录
    excelUploadDir: path.join(__dirname, '../public/upload'),
    // 资源图片存放目录
    sourceImgUploadDir: path.join(__dirname, '../public/upload/source/image'),
    // 盐值
    KEY: '@!dsddweq..123233290!:*!',
    // TOKEN密码
    TOKEN_KEY: 'dewhjk2121!@#hh*).?',

    SECRET_KEY : "donkeyhome123",

    BACKEND_SECRETKEY :"donkeyadmin123"
};

module.exports = config;
