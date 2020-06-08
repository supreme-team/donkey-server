const { Query } = require('../db/mysql');
const config = require('../config/baseConfig');
const XLSX = require('xlsx');
const path = require('path');
const formidable = require('formidable');

const websiteUpload = async function(req,res,next){
    // let sql = `INSERT INTO website(username, channel_id, agent_name, agent_manager, shop1, address1, due_time1, shop2, address2, due_time2， shop3，address3，due_time3，shop4，address4，due_time4，shop5，address5，due_time5) VALUE ?;`;
    let sql = `INSERT INTO website(username, channel_id, agent_name, agent_manager, shop1, address1, due_time1, shop2, address2, due_time2, shop3, address3, due_time3, shop4, address4, due_time4, shop5, address5, due_time5) VALUE ?;`;

    // 1. 实例化
    let form = new formidable.IncomingForm();
    // 2. 处理文件存放的目录
    form.uploadDir = config.excelUploadDir;
    // 3. 保留文件的后缀名
    form.keepExtensions = true;
    // 4. 处理结果
    form.parse(req, async function (err, fields, files) {
        // 4.1 处理错误
        if (err) {
            return next(err);
        }

        // const sowing_img = path.basename(files.file.path);
        console.log(fields.username);
        let workbook = XLSX.readFile(files.file.path);
        const sheetNames = workbook.SheetNames
        const worksheet = workbook.Sheets[sheetNames[0]];
        let aa = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
        let List = [];
        for(let i=0;i<aa.length;i++){
            var i1 = i
            let Item = aa[i];
            if (Item['渠道编码'] && Item['代理商名称'] && Item['渠道经理']){
                if(!Item['店铺1'] && !Item['网址1'] && !Item['授权终止日期1'] && !Item['店铺2'] && !Item['网址2'] && !Item['授权终止日期2'] && !Item['店铺3'] && !Item['网址3'] && !Item['授权终止日期3'] && !Item['店铺4'] && !Item['网址4'] && !Item['授权终止日期4'] && !Item['店铺5'] && !Item['网址5'] && !Item['授权终止日期5']){
                    res.send({
                        statusCode: 500,
                        message: "请勿上传含有空白项的表格"
                    })
                }else{
                    let ItemList = [fields.username,Item['渠道编码'],Item['代理商名称'],Item['渠道经理'],Item['店铺1'],Item['网址1'],Item['授权终止日期1'],Item['店铺2'],Item['网址2'],Item['授权终止日期2'],Item['店铺3'],Item['网址3'],Item['授权终止日期3'],Item['店铺4'],Item['网址4'],Item['授权终止日期4'],Item['店铺5'],Item['网址5'],Item['授权终止日期5']];
                    // console.log(ItemList);
                    List.push(ItemList);
                    if(i+1 === aa.length){
                        console.log(List);
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
                }
            }else{
                res.send({
                    statusCode: 500,
                    message: "请上传请正确的表格"
                })
            }
        }
        // let a1 = worksheet['A1','B1'].v准确拿到单元格中的值
    })
};


module.exports = {
    websiteUpload
};
