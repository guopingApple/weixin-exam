<template>
	<div id="yp-operate">

    <iframe src="http://localhost:8080/rest/sysUserList"></iframe>

    <el-row class="search">
      <el-col :span="3">
        <el-input  placeholder="请输入关键字" v-model="fsp.map.user_code" icon="search" @click="getDatas" ></el-input>
        <el-button :plain="true" @click="ilogin">登录</el-button>
        <el-button :plain="true" @click="getSesseionId">得到sessionid</el-button>
    </el-col>
    </el-row>
    <el-row class="table">
      <el-col :span="24">
    <el-table
      :data="tableData.items"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
      </el-col>
    </el-row>
    <div class="pagination-div">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="tableData.pagePageCurrent"
        :page-size="tableData.pagePageSize"
        layout="total,prev, pager, next, jumper"
        :total="tableData.pageItemTotal ">
      </el-pagination>
    </div>
	</div>
</template>
<script>

  export default {
    name: 'operate',
    data: function () {
      return {
      fsp:{
        // searchLog: { //搜索池
        pageSize: 100,//搜索关键字
        pageNo:15,
        map:{}//搜索条件
      },
      formlogs:{
        // searchLog: { //搜索池
        texsearcht:'',//搜索关键字
        user_code:'',//下拉列表
        starttime:'',
        endtime:'',
        page:1,
        // },
      },
      tableData:
      {
        pagePageSize:12,
        pageItemTotal:1000,
        pagePageCurrent:2,
        items:
        [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
      }
    },
    methods: {
      getSesseionId: function(){
        console.log('2222222');

        this.axios.post(this.biz.serverUrl+'/rest/getSessionId').then(function(res){
          // this.axios.get(this.biz.serverUrl+'/new/search2',this.formlogs).then(function(res){
          // this.axios.post('http://218.241.154.235/role/userlist',this.form).then(function(res){
          // this.axios.post(this.biz.serverUrl+'/new/search3',this.formlogs).then(function(res){
          console.log('res:'+res);
          sessionStorage.setItem('sessionId',"JSESSIONID="+res.data);
        }).catch(function(res){
          console.log(res)
        })
      },
      ilogin: function(){
        this.axios.post(this.biz.serverUrl+'/rest/restLogin',{username:'admin',password:'123456'}).then(function(res){
          // this.axios.get(this.biz.serverUrl+'/new/search2',this.formlogs).then(function(res){
          // this.axios.post('http://218.241.154.235/role/userlist',this.form).then(function(res){
          // this.axios.post(this.biz.serverUrl+'/new/search3',this.formlogs).then(function(res){

        }).catch(function(res){
          console.log(res)
        })
      },
      getDatas: function () {//设置导航选中项
        console.log(111223);

        var sessionId = sessionStorage.sessionId;

        var config={
          method:'GET',
          url: "http://localhost:8080/rest/sysUserList;",
          data:{username:'advance',password:123456},
          headers: {'X-Requested-With': 'XMLHttpRequest','Content-Type':'application/json',
          'cookie':sessionId},
          requestHeader:{'Content-Type':'application/json'}
        }
        var qs = require('qs');
var param = qs.stringify(this.fsp,{arrayFormat:'brackets'});
        //this.axios(config).then(function(res){});
        //debugger;
        //this.axios.post(this.biz.serverUrl+'/rest/sysUserList',this.fsp).then(function(res){
       // this.axios.post(this.biz.serverUrl+'/rest/search',this.fsp).then(function(res){
        this.axios.post(this.biz.serverUrl+'/rest/search2',qs.stringify(this.fsp,{arrayFormat:'brackets'})).then(function(res){
       // this.axios.get(this.biz.serverUrl+'/new/search2',this.formlogs).then(function(res){
       // this.axios.pst('http://218.241.154.235/role/userlist',this.form).then(function(res){
       // this.axios.post(this.biz.serverUrl+'/new/search3',this.formlogs).then(function(res){
          console.log(res);
        }).catch(function(res){
          console.log(res)
        })

      },
      reset:function(index){
        alert('111');
      }
    }
  }
</script>

<style>
  .pagination-div{width:100%;text-align: center;margin-top: 20px;}

</style>


