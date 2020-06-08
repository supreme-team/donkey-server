const jwt = require('jsonwebtoken');
const {Query} = require('../db/mysql');

// 请求合同数据
const GetTableData = async function (req, res, next) {
    const username = req.body.username;
    const sql = `select * from contract WHERE username='${username}';`
    const sqlRes = await Query(sql);
    if (!sqlRes.length) {
        res.send({
            statusCode: 500,
            message: "获取失败"
        })

    } else {
        res.send({
            statusCode: 200,
            message: "获取成功",
            data: sqlRes
        })
    }
};


//搜索指定合同
const SearchContract = async function (req, res, next) {
    const contract_id = req.body.contract_id
    const sql = `SELECT * FROM contract WHERE contract_id=${contract_id}; `;
    const sqlRes = await Query(sql);
    if (!sqlRes.length) {
        res.send({
            statusCode: 500,
            message: "无此合同"
        })

    } else {
        res.send({
            statusCode: 200,
            message: "获取成功",
            data: sqlRes
        })
    }
}


//删除单项合同
const DeleteContract = async function (req, res, next) {
    const contract_id = req.body.contract_id;
    const sql = `delete from contract WHERE contract_id = ${contract_id};`;
    const sqlRes = await Query(sql);
    console.log(sqlRes)
    if (sqlRes.length === 0) {
        res.send({
            statusCode: 500,
            message: "删除失败"
        })
    } else {
        res.send({
            statusCode: 200,
            message: "删除成功",
        })
    }

};

//批量删除
const DeleteAllSelection = async function (req, res, next) {
    const DelData = req.body.contract_obj;
    let delList = [];
    let sql = `DELETE FROM contract WHERE contract_id in (?);`
    for (let i = 0; i < DelData.length; i++) {
        delList = delList.concat(DelData[i].contract_id);
        if (i + 1 === DelData.length) {
            const sqlRes = await Query(sql, [delList]);
            if (sqlRes.length === 0) {
                res.send({
                    statusCode: 500,
                    message: "批量删除失败"
                })
            } else {
                res.send({
                    statusCode: 200,
                    message: `你已成功删除了${DelData.length}项合同`,
                })
            }
        }
    }
};

//编辑合同信息
const EditContract = async function (req, res, next) {
    console.log(req.body);
    const Form = req.body.form;
    const value = [Form.channel_id, Form.agent_name, Form.agent_manager, Form.contract_id, Form.contract_name, Form.state, Form.contract_date, Form.contract_id];
    // console.log(value);
    const sql = `UPDATE contract SET channel_id=?,agent_name=?,agent_manager=?,contract_id=?,contract_name=?,state=?,contract_date=? WHERE contract_id=?;`;
    const sqlRes = await Query(sql, value);
    console.log(sqlRes.length)
    if (sqlRes.length === 0) {
        console.log(222);
        res.send({
            statusCode: 500,
            message: "编辑失败"
        })
    } else {
        console.log(111);
        res.send({
            statusCode: 200,
            message: "编辑成功",
        })
    }
}


const tableUpload = async function (req, res, next) {

};


module.exports = {
    GetTableData,
    SearchContract,
    DeleteContract,
    DeleteAllSelection,
    EditContract,
    tableUpload
}
