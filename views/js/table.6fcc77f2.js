(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["table"],{"22b0":function(e,t,a){"use strict";var n=a("fbff"),r=a.n(n);r.a},"7af3":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{staticClass:"Breadcrumb"},[a("i",{staticClass:"el-icon-lx-cascades"}),e._v("合同管理 ")])],1)],1),a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("el-button",{staticClass:"handle-del mr10",attrs:{type:"primary",icon:"el-icon-delete"},on:{click:e.delAllSelection}},[e._v("批量删除")]),a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"合同编号"},model:{value:e.query.contract_id,callback:function(t){e.$set(e.query,"contract_id",t)},expression:"query.contract_id"}}),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleSearch}},[e._v("搜索")])],1),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:"","cell-style":{padding:"4px 0"},"header-cell-class-name":"table-header"},on:{"selection-change":e.handleSelectionChange,"filter-change":e.HandleFilterChange}},[a("el-table-column",{attrs:{type:"selection",align:"center"}}),a("el-table-column",{attrs:{prop:"id",label:"ID",width:"55",align:"center"}}),a("el-table-column",{attrs:{prop:"channel_id",label:"渠道编码",align:"center"}}),a("el-table-column",{attrs:{prop:"agent_name",label:"代理商名称",align:"center"}}),a("el-table-column",{attrs:{prop:"agent_manager",label:"渠道经理",align:"center"}}),a("el-table-column",{attrs:{prop:"contract_id",label:"合同编号"}}),a("el-table-column",{attrs:{prop:"contract_name",label:"合同名称"}}),a("el-table-column",{attrs:{label:"合同状态",align:"center","filter-multiple":!1,"column-key":"status",prop:"state",filters:[{text:"生效",value:"生效"},{text:"失效",value:"失效"}]},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:"生效"===t.row.state?"success":"失效"===t.row.state?"danger":""}},[e._v(e._s(t.row.state))])]}}])}),a("el-table-column",{attrs:{prop:"contract_date",label:"合同终止日期"}}),a("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),a("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,50,100],"page-size":e.pageSize,layout:"total, sizes,prev, pager, next,jumper",total:e.total1,background:""},on:{"size-change":e.handleSizeChange1,"current-change":e.handleCurrentChange1}})],1)],1),a("el-dialog",{attrs:{title:"编辑",visible:e.editVisible,width:"30%"},on:{"update:visible":function(t){e.editVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"70px"}},[a("el-form-item",{attrs:{label:"渠道编码"}},[a("el-input",{model:{value:e.form.channel_id,callback:function(t){e.$set(e.form,"channel_id",t)},expression:"form.channel_id"}})],1),a("el-form-item",{attrs:{label:"代理商名称"}},[a("el-input",{model:{value:e.form.agent_name,callback:function(t){e.$set(e.form,"agent_name",t)},expression:"form.agent_name"}})],1),a("el-form-item",{attrs:{label:"渠道经理"}},[a("el-input",{model:{value:e.form.agent_manager,callback:function(t){e.$set(e.form,"agent_manager",t)},expression:"form.agent_manager"}})],1),a("el-form-item",{attrs:{label:"合同编号"}},[a("el-input",{model:{value:e.form.contract_id,callback:function(t){e.$set(e.form,"contract_id",t)},expression:"form.contract_id"}})],1),a("el-form-item",{attrs:{label:"合同名称"}},[a("el-input",{model:{value:e.form.contract_name,callback:function(t){e.$set(e.form,"contract_name",t)},expression:"form.contract_name"}})],1),a("el-form-item",{attrs:{label:"合同状态"}},[a("el-input",{model:{value:e.form.state,callback:function(t){e.$set(e.form,"state",t)},expression:"form.state"}})],1),a("el-form-item",{attrs:{label:"合同终止日期"}},[a("el-input",{model:{value:e.form.contract_date,callback:function(t){e.$set(e.form,"contract_date",t)},expression:"form.contract_date"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)],1)],1)},r=[],s=(a("4de4"),a("96cf"),a("1da1")),l=a("af82"),i={name:"basetable",data:function(){return{total1:0,currentPage:1,pageSize:10,query:{state:"",contract_id:""},tableData:[],tableData1:[],tableData2:[],multipleSelection:[],delList:[],editVisible:!1,pageTotal:0,form:{},idx:-1,id:-1}},created:function(){this.GetData()},methods:{GetData:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("AgentUser")).username,e.next=3,Object(l["h"])(t);case 3:a=e.sent,200===a.statusCode?(this.tableData1=a.data,this.tableData2=this.tableData1,this.total1=a.data.length,this.pushtableData(),this.currentPage=1):400===a.statusCode&&this.$router.push({path:"/"});case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleSizeChange1:function(e){this.pageSize=e,this.handleCurrentChange1(this.currentPage)},handleCurrentChange1:function(e){this.currentPage=e,this.currentChangePage(this.tableData1,e)},currentChangePage:function(e,t){var a=(t-1)*this.pageSize,n=t*this.pageSize;for(this.tableData=[];a<n;a++)e[a]&&this.tableData.push(e[a])},pushtableData:function(){var e=0,t=10;for(this.tableData=[];e<t;e++)this.tableData1[e]&&this.tableData.push(this.tableData1[e])},handleSearch:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log(this.query.contract_id),!this.query.contract_id){e.next=8;break}return e.next=4,Object(l["j"])(this.query.contract_id);case 4:t=e.sent,200===t.statusCode?(this.$message.success(t.message),this.tableData1=t.data,this.tableData2=this.tableData1,this.total1=t.data.length,this.pushtableData(),this.currentPage=1,console.log(t)):this.$message.error(t.message),e.next=9;break;case 8:this.GetData();case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleSelectionChange:function(e){this.multipleSelection=e,console.log(e)},delAllSelection:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$confirm("确定要批量删除这些合同嘛?","提示",{type:"warning"}).then(Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.multipleSelection.length,e.next=3,Object(l["a"])(t.multipleSelection);case 3:a=e.sent,console.log(a),200===a.statusCode?(t.$message.success(a.message),t.GetData()):t.$message.error(a.message),t.multipleSelection=[];case 7:case"end":return e.stop()}}),e)})))).catch((function(){}));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleDelete:function(e,t){var a=this;console.log(t.contract_id),this.$confirm("确定要删除吗？","提示",{type:"warning"}).then(Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["c"])(t.contract_id);case 2:n=e.sent,200===n.statusCode?(a.$message.success(n.message),a.GetData()):a.$message.error(n.message);case 4:case"end":return e.stop()}}),e)})))).catch((function(){}))},handleEdit:function(e,t){this.idx=e,this.form=t,this.editVisible=!0},saveEdit:function(){var e=this;this.$confirm("确定要修改吗？","提示",{type:"warning"}).then(Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["e"])(e.form);case 2:a=t.sent,200===a.statusCode?(e.$message.success(a.message),e.GetData(),e.editVisible=!1):e.$message.error(a.message);case 4:case"end":return t.stop()}}),t)})))).catch((function(){}))},HandleFilterChange:function(e){if(e.status[0]){this.tableData2=this.tableData2.filter((function(t){return t.state===e.status[0]}));var t=this.tableData2;this.tableData2=this.tableData1,this.tableData1=t,this.total1=this.tableData1.length,this.pushtableData(),this.currentPage=1}else this.currentPage=1,this.GetData()}}},c=i,o=(a("22b0"),a("2877")),u=Object(o["a"])(c,n,r,!1,null,"ca4898a8",null);t["default"]=u.exports},fbff:function(e,t,a){}}]);
//# sourceMappingURL=table.6fcc77f2.js.map