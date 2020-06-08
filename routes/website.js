const express = require('express');
const router = express.Router();
const website= require("../controller/website")


// 1、请求网站授权信息
router.post('/GetWebsite',website.GetWebsite);

//2、搜索网站授权信息
router.post('/SearchWebsite',website.SearchWebsite)

//3、删除单项网站授权
router.post('/DeleteWebsite',website.DeleteWebsite)

//4、批量删除网站授权
router.post('/DeleteAllWebsite',website.DeleteAllWebsite)

//5、编辑网站授权信息
router.post('/EditWebsite',website.EditWebsite)


module.exports = router;
