const express = require('express');
const router = express.Router();
const tableUpload = require("../controller/tableUpload")

// 1、批量上传合同
router.post('/tableUpload',tableUpload.tableUpload);



module.exports = router;
