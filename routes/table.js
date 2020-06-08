const express = require('express');
const router = express.Router();
const table = require("../controller/table")

// 1、请求合同信息
router.post('/GetTableData',table.GetTableData);

//2.搜索指定合同
router.post('/SearchContract',table.SearchContract);

//3、删除单项合同
router.post('/DeleteContract',table.DeleteContract);

//4、批量删除合同
router.post('/DeleteAllSelection',table.DeleteAllSelection);

//5、编辑合同信息
router.post('/EditContract',table.EditContract)
router.post('/tableUpload',table.tableUpload)



module.exports = router;
