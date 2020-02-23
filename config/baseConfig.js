const path = require('path');

const config = {
    // 数据库配置
    database: {
        HOST: '59.110.156.63', // 主机
        PORT: '3306',  // 端口
        USER: 'root',  // MySQL认证的用户名
        PASSWORD: 'yangJIAqing_123', // MySQL认证的用户密码
        DATABASE: 'donkey' // 连接的数据库
    },
    // 图片存放目录
    imgUploadDir: path.join(__dirname, '../public/upload/image'),
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