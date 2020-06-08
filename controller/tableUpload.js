const {Query} = require('../db/mysql');
const config = require('../config/baseConfig');
const XLSX = require('xlsx');
const path = require('path');
const formidable = require('formidable');

const tableUpload = async function (req, res, next) {

    let sql = `INSERT INTO contract(username, channel_id, agent_name, agent_manager,contract_id,contract_name,state,contract_date) VALUE ?;`;
    // 1. 实例化
    let form = new formidable.IncomingForm();
    // 2. 处理文件存放的目录
    form.uploadDir = config.excelUploadDir;
    // 3. 保留文件的后缀名
    form.keepExtensions = true;
    // 4. 处理结果
    form.parse(req, async function (err, fields, files) {
        // const sowing_img = path.basename(files.file.path);
        console.log(fields.username);
        let workbook = XLSX.readFile(files.file.path);
        const sheetNames = workbook.SheetNames
        const worksheet = workbook.Sheets[sheetNames[0]];
        let aa = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
        let List = []
        for(let i=0;i<aa.length;i++){
            var i1 = i
            let Item = aa[i];
            if (Item['渠道编码'] && Item['代理商名称'] && Item['渠道经理'] && Item['合同编号'] && Item['合同名称'] && Item['合同状态'] && Item['合同终止日期']){
                let ItemList = [fields.username,Item['渠道编码'],Item['代理商名称'],Item['渠道经理'],Item['合同编号'],Item['合同名称'],Item['合同状态'],Item['合同终止日期']];
                console.log(ItemList);
                // let username= String(fields.username),channel_id = String(Item['渠道编码']),agent_name = String(Item['代理商名称']),agent_manager = String(Item['渠道经理']),contract_id = String(Item['合同编号']),contract_name = String(Item['合同名称']),state = String(Item['合同状态']),contract_date = String(Item['合同终止日期']);
                List.push(ItemList);
                if(i+1 === aa.length){
                    console.log(List)
                    const sqlRes = await Query(sql, [List]);
                    // 想要往sql语句中带入数组的话就得写成[List]而不是直接List
                    if (sqlRes.length === 0) {
                        console.log(111);
                        res.send({
                            statusCode: 500,
                            message: "上传失败"
                        })
                    } else {
                        console.log(222);
                        res.send({
                            statusCode: 200,
                            message: '上传成功',
                        })
                    }
                }
            }else{
                res.send({
                    statusCode: 500,
                    message: "表格出现错误"
                })
            }
        }
        // let a1 = worksheet['A1','B1'].v准确拿到单元格中的值


        // 4.1 处理错误
        if (err) {
            return next(err);
        }
        // const values = [
        //     [4,4,4],
        //     [5,5,5]
        // ];
        // let sql = `INSERT INTO contract(username,agent_manager,contract_id) VALUES ?;`
        // const sqlRes = await Query(sql, [values]);
    })
}


module.exports = {
    tableUpload
}
