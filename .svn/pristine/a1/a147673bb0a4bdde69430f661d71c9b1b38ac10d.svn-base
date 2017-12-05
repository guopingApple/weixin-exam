<template>
	<div id="m-user">
		<div>

      <el-form :inline="true"  :model="fsp"  ref="fsp" label-width="80px">
        <el-form-item label="账号" prop="username">
          <el-input v-model="fsp.map.username" placeholder="请输入账号">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="list">查询</el-button>
        </el-form-item>
      </el-form>

      <el-row><el-col :span="2">  <el-button type="primary" @click="add">新增</el-button></el-col></el-row>
      <el-table
        :data="datas"
        style="width: 100%">
        <el-table-column
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          prop="username"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="nickname"
          label="地址">
        </el-table-column>
        <el-table-column header-align="center" label="操作">
          <template scope="datas">
            <el-button type="text" size="mini" @click="resetPw(datas.row.id)">重置密码</el-button>
            <el-button type="text" size="mini" @click="edit(datas.row.id)">编辑</el-button>
            <el-button type="text" size="mini" @click="del(datas.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="fsp.pageNo"
        :page-size="fsp.pageSize"
        layout="total,prev, pager, next, jumper"
        :total="fsp.recordCount ">
      </el-pagination>
    </div>
	</div>
</template>
<script>
  var qs = require('qs');
  export default {
    name: 'login',
    data: function () {
      return {
        fsp:{
          pageSize: 10,//搜索关键字
          pageNo:3,
          recordCount:2000,
          map:{}//搜索条件
        },
        datas:[{
          state: '2016-05-02',
          username: '王小虎',
          nickname: '上海市普陀区金沙江路 1518 弄'
        }, {
          state: '2016-05-04',
          username: '王小虎',
          nickname: '上海市普陀区金沙江路 1517 弄'
        }, {
          state: '2016-05-01',
          username: '王小虎',
          nickname: '上海市普陀区金沙江路 1519 弄'
        }]


      }
    },
    mounted: function(){
      this.initData();
    },
    methods: {
      initData: function(){
        this.list();
      },
      add: function(){
        this.$router.push({path:'/userAdd'});
      },
      edit: function(id){
        this.$router.push({path:'/userEdit?id='+id});
      },
      resetPw: function(id){
        var that = this;
        this.axios.post(this.biz.serverUrl+'/rest/resetUserPw','id='+id,this.biz.urlencodedConfig).then(function(res){
          if(res.data.status){
            that.$notify.success({message:res.data.msg});
            that.getDatas();
          } else {
            that.$notify.error({message:res.data.msg});
          }
        });
      },
      del: function(id){
        var that = this;
        this.axios.post(this.biz.serverUrl+'/rest/userDel','id='+id,this.biz.urlencodedConfig).then(function(res){
          console.log(res);
          if(res.data.status){
            that.$notify.success({message:res.data.msg});
            that.list();
          } else {
            that.$notify.error({message:res.data.msg});
          };

        }).catch(function(res){
          console.log(res)
        })
      },
      list: function () {
        var that = this;
        //this.axios.post(this.biz.serverUrl+'/rest/userList',qs.stringify(this.fsp)).then(function(res){
        this.axios.post(this.biz.serverUrl+'/rest/userList',this.fsp).then(function(res){
          console.log(res);
          that.datas = res.data.datas;
          that.fsp = res.data.fsp;

        }).catch(function(res){
          console.log(res)
        })
      },
      handleSizeChange:function(index){
        this.list();
      },
      handleCurrentChange:function(index){
        this.list();
      }
    }
  }
</script>
<style>
	#yp-login{
		width:100%;
		height:100%;
		background:#eee;
	}
</style>
