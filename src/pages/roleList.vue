<template>
	<div id="m-role" class="yt-list">
		<div>
      <el-form :inline="true"  :model="fsp"  ref="fsp" label-width="80px">
        <el-form-item label="角色名称" prop="name">
          <el-input v-model="fsp.map.name" placeholder="请输入账号">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="list">查询</el-button>
        </el-form-item>
      </el-form>
      <div class="table-div">
        <div class="table-add">
          <router-link  v-on:click.native="add" to="###" tag="el-button" class="yp_tip_button" style="margin-bottom:0px;">新增</router-link>
        </div>
      <el-table
        :data="datas"
        style="width: 100%">
        <el-table-column
          prop="name"
          label="角色名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="memo"
          label="角色描述">
        </el-table-column>
        <el-table-column header-align="center" label="操作">
          <template scope="datas">
            <el-button type="text" size="mini" @click="authorize(datas.row.id)">授权</el-button>
            <el-button type="text" size="mini" @click="edit(datas.row.id)">编辑</el-button>
            <el-button type="text" size="mini" @click="del(datas.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
        </div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="fsp.pageNo"
        :page-size="fsp.pageSize"
        layout="total,prev, pager, next, jumper"
        :total="fsp.recordCount ">
      </el-pagination>
    </div>
    <el-dialog title="角色授权" :visible.sync="dialogFormVisible">
      <el-tree
        ref="tree"
        :data="permissionTree"
        :props="defaultProps"
        node-key="id"
        show-checkbox
        highlight-current
        :expand-on-click-node="false"
        default-expand-all
      ></el-tree>
      <el-button type="primary" @click="submitAuthorize">全部提交</el-button>
    </el-dialog>
	</div>
</template>
<script>
  var qs = require('qs');
  export default {
    data: function () {
      return {
        currentRoleId:0,
        dialogFormVisible:false,
        fsp:{
          pageSize: 12,//搜索关键字
          pageNo:1,
          recordCount:1,
          map:{}//搜索条件
        },
        datas:[],
        permissionTree:[],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
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
        this.$router.push({path:'/roleAdd'});
      },
      findTree(roleid){
        var that = this;
        this.currentRoleId = roleid;
        console.log(this.biz.urlencodedConfig);
        this.axios.post(this.biz.serverUrl+'/rest/roleAuthorizFind','roleid='+roleid,this.biz.urlencodedConfig).then(function(res){
          //debugger;
          that.permissionTree = res.data.element.permissionList;
          var permissionIds = res.data.element.authorizePermissionIds;

          console.log('permissionIds'+permissionIds);
          that.setAuthorizedKeys(permissionIds.split(','));
        }).catch(function(res){
          console.log(res)
        })
      },
      setAuthorizedKeys(idAarry){
        this.$refs.tree.setCheckedKeys(idAarry);
      },
      authorize(roleid){
        console.log('authorize');
        this.dialogFormVisible = true;
        this.findTree(roleid);
      },
      submitAuthorize(){
        var that = this;
        this.dialogFormVisible = true;
        console.log(this.$refs.tree.getCheckedKeys());
        var permissionIds = this.$refs.tree.getCheckedKeys().join(',');
        console.log(this.biz.serverUrl);
        this.axios.post(this.biz.serverUrl + '/rest/roleAuthorizSave','permissionIds='+permissionIds+'&roleid='+this.currentRoleId,this.biz.urlencodedConfig).then(function(res){
            that.$notify.success({message:res.data.msg});
             that.$refs.tree.setCheckedKeys([]);
            that.dialogFormVisible = false;

            console.log('submitAuthorize_submit')
        }).catch(function(res){
            console.log('submitAuthorize_fail')
          console.log(res)
        })


      },
      edit: function(id){
        this.$router.push({path:'/roleEdit?id='+id});
      },
      del: function(id){
        var that = this;
        this.axios.post(this.biz.serverUrl+'/rest/roleDel',qs.stringify({id:id})).then(function(res){
          if(res.data.status){
            that.$notify.success({message:res.data.msg});
            that.getDatas();
          } else {
            that.$notify.error({message:res.data.msg});
          };

        }).catch(function(res){
          console.log(res)
        })
      },
      list: function () {
        var that = this;
        this.axios.post(this.biz.serverUrl+'/rest/roleList',this.fsp).then(function(res){
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
