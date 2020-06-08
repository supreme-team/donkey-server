const express = require('express');
const router = express.Router();
const websiteUpload = require("../controller/websiteUpload");

// 1、批量上传合同
router.post('/websiteUpload',websiteUpload.websiteUpload);



module.exports = router;
