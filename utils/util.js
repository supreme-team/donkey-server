import CryptoJS from 'crypto-js'
const crypto = require('crypto') //这是node自带的
import config from "./../config/baseConfig"

/**
 * 前端加密函数，加密同一个字符串生成的都不相同
 * @param {*} str 
 */
export function encrypt(str) {
    return CryptoJS.AES.encrypt(JSON.stringify(str), config.SECRET_KEY).toString();
}

/**
 * 前端解密函数
 * @param {*} str 
 */
export function decrypt(str) {
    const bytes = CryptoJS.AES.decrypt(str, config.SECRET_KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}

/**
 * md5 加密
 * @param {*} content 
 */
function md5(content) {
    let md5 = crypto.createHash('md5')
    return md5.update(content).digest('hex')
}

/**
 * 后端及加密函数，加密同一个字符串每次结果相同，可存数据库
 * @param {*} password 
 */
export function genPassword(password) {
    const str = `password=${password}&key=${config.BACKEND_SECRETKEY}`
    return md5(str)
}