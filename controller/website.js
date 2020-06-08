const jwt = require('jsonwebtoken');
const {Query} = require('../db/mysql');

// 请求网站授权数据
const GetWebsite = async function (req, res, next) {
    const username = req.body.username;
    console.log(username);
    const sql = `SELECT * FROM website WHERE username='${username}'; `
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
const SearchWebsite = async function (req, res, next) {
    console.log(req.body)
    const agent_name = req.body.agent_name
    const sql = `SELECT * FROM website WHERE agent_name=${agent_name}; `;
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


// 删除单项网站授权数据
const DeleteWebsite = async function (req, res, next) {
    const agent_name = req.body.agent_name;
    const sql = `delete from website WHERE agent_name = ${agent_name};`;
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
const DeleteAllWebsite = async function (req, res, next) {
    const DelData = req.body.website_obj;
    let delList = [];
    let sql = `DELETE FROM website WHERE agent_name in (?);`
    for (let i = 0; i < DelData.length; i++) {
        delList = delList.concat(DelData[i].agent_name);
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
                    message: `你已成功删除了${DelData.length}项`,
                })
            }
        }
    }
};


//网站授权信息编辑
const EditWebsite = async function (req, res, next) {
    console.log(req.body.form);
    const Form = req.body.form;
    const value = [Form.channel_id, Form.agent_name, Form.agent_manager, Form.shop1, Form.address1,Form.due_time1,Form.shop2, Form.address2,Form.due_time2,Form.shop3, Form.address3,Form.due_time3,Form.shop4, Form.address4,Form.due_time4,Form.shop5, Form.address5,Form.due_time5,Form.agent_name];
    console.log(value);
    const sql = `UPDATE website SET channel_id=?,agent_name=?,agent_manager=?,shop1=?,address1=?,due_time1=?,shop2=?,address2=?,due_time2=?,shop3=?,address3=?,due_time3=?,shop4=?,address4=?,due_time4=?,shop5=?,address5=?,due_time5=? WHERE agent_name=?;`;
    const sqlRes = await Query(sql, value);
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


module.exports = {
    GetWebsite,
    SearchWebsite,
    DeleteWebsite,
    DeleteAllWebsite,
    EditWebsite
}
