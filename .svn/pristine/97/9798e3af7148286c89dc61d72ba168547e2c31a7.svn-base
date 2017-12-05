<template>
	<div id="yp-userPermission">
    <el-col :span="8" >
    <el-tree
      ref="tree"
      :data="permissionTree"
      :props="defaultProps"
      node-key="id"
      @node-click="handleNodeClick"
      highlight-current
      :expand-on-click-node="false"
      default-expand-all
      :render-content="renderContent"

    ></el-tree>
    </el-col>
    <el-col :span="8" :offset="2">
      <el-form   :model="permissionForm"  ref="form" label-width="80px">

        <el-form-item label="资源属性">
          <el-radio-group v-model="permissionForm.resourceDir">
            <el-radio :label="1">资源</el-radio>
            <el-radio :label="2">目录</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="资源名称" >
          <el-input v-model="permissionForm.label" >
          </el-input>
        </el-form-item>

        <el-form-item label="资源类型" v-show="dirVisible">
          <el-radio-group v-model="permissionForm.resourceType">
            <el-radio :label="1">菜单</el-radio>
            <el-radio :label="2">按钮</el-radio>
          </el-radio-group>
        </el-form-item>



        <el-form-item label="页面链接" v-show="dirVisible">
          <el-input v-model="permissionForm.url" >
          </el-input>
        </el-form-item>


        <el-form-item label="资源标识" v-show="dirVisible">
          <el-input v-model="permissionForm.permission" >
          </el-input>
        </el-form-item>

        <el-form-item label="菜单顺序" v-show="menuVisible">
          <el-input v-model="permissionForm.inx" >
          </el-input>
        </el-form-item>
        <el-form-item label="菜单图标" v-show="menuVisible">
          <el-input v-model="permissionForm.icon" >
          </el-input>
        </el-form-item>

        <el-form-item label="状态" v-show="dirVisible">
          <el-switch on-text="启用" :on-value="1" off-text="关闭" :off-value="2" v-model="permissionForm.state"></el-switch>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">全部提交</el-button>
          <el-button>取消</el-button>
        </el-form-item>

      </el-form>
    </el-col>

    <el-dialog title="新增节点" :visible.sync="dialogFormVisible">
      <el-form   :model="newPermissionForm"  ref="form" label-width="80px">
        <el-form-item label="资源属性">
          <el-radio-group v-model="newPermissionForm.resourceDir">
            <el-radio :label="1">资源</el-radio>
            <el-radio :label="2">目录</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="资源名称" >
          <el-input v-model="newPermissionForm.label" >
          </el-input>
        </el-form-item>

        <el-form-item label="资源类型" v-show="appendDirVisible">
          <el-radio-group v-model="newPermissionForm.resourceType">
            <el-radio :label="1">菜单</el-radio>
            <el-radio :label="2">按钮</el-radio>
          </el-radio-group>
        </el-form-item>



        <el-form-item label="页面链接" v-show="appendDirVisible">
          <el-input v-model="newPermissionForm.url" >
          </el-input>
        </el-form-item>

        <el-form-item label="资源标识" v-show="appendDirVisible">
          <el-input v-model="newPermissionForm.permission" >
          </el-input>
        </el-form-item>
        <el-form-item label="菜单顺序" v-show="appendMenuVisible">
          <el-input v-model="newPermissionForm.inx" >
          </el-input>
        </el-form-item>
        <el-form-item label="菜单图标" v-show="appendMenuVisible">
          <el-input v-model="newPermissionForm.icon" >
          </el-input>
        </el-form-item>

        <el-form-item label="状态" v-show="appendDirVisible">
          <el-switch on-text="启用" :on-value="1" off-text="关闭" :off-value="2" v-model="newPermissionForm.state"></el-switch>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="append">立即创建</el-button>
          <el-button @click="dialogFormVisible = false">取消</el-button>
        </el-form-item>

      </el-form>
    </el-dialog>

  </div>
</template>
<script>
  var qs = require('qs');
  var axios = require('axios');
  var urlencodedConfig = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
  let id = 1000;
  export default {
   // oid: parseInt(this.$route.query.id),
    data: function () {
      return {
        dirVisible:true,
        appendDirVisible:true,
        menuVisible:true,
        appendMenuVisible:true,
        dialogFormVisible:false,
        tmpDialogData:{
        },
        resourceDir:1,
        permissionForm:{
          resourceDir:1

        },
        newPermissionForm:{
          resourceDir:1
        },

        permissionTree:[],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    created: function(){

    },
    mounted: function(){
      this.initData();
    },
    watch:{
      permissionForm:{
        handler(curVal,oldVal){
          if(curVal.resourceDir == 2){
            this.dirVisible = false;
          }else if(curVal.resourceDir == 1){
            this.dirVisible = true;
          }

          if(curVal.resourceType == 2){
            this.menuVisible = false;
          }else if(curVal.resourceType == 1){
            this.menuVisible = true;
          }
        },
        deep:true
      },
      newPermissionForm:{
        handler(curVal,oldVal){
          if(curVal.resourceDir == 2){
            this.appendDirVisible = false;
          }else if(curVal.resourceDir == 1){
            this.appendDirVisible = true;
          }
          if(curVal.resourceType == 2){
            this.appendMenuVisible = false;
          }else if(curVal.resourceType == 1){
            this.appendMenuVisible = true;
          }
        },
        deep:true
      }
    },
    methods: {
      initData:function(){
        this.find(this.oid);
      },
      addfirstLevelMenu(){
        console.log("add first menu");
        this.permissionTree.push({
          id:id++,
          label: '一级 3',
          children: []
          })
      },
      find: function(){
        var that = this;
        //debugger;
        this.axios.post(this.biz.serverUrl+'/rest/permissionList').then(function(res){
          //debugger;
          that.permissionTree = res.data.datas;
          //that.permissionTree = res.data.element;
          console.log("that.form"+that.permissionTree);
        }).catch(function(res){
          console.log(res)
        })
      },
      appendShow(store, data) {
        this.dialogFormVisible = true;
        this.tmpDialogData = {store:store,data:data};
        this.newPermissionForm = {id: id++,  label: '新增子项'+id++, resourceDir:1,resourceType:1, state:1,addFlag:'1',level: (data.level + 1),parentid:data.id,children: [] };
        //store.append({id: id++,  label: '新增子项', children: [] }, data);
      },
      append() {
//        this.dialogFormVisible = false;
//        debugger;
//        this.tmpDialogData.store.append(this.newPermissionForm, this.tmpDialogData.data);
        //debugger;
        this.dialogFormVisible = false;
        if(!this.tmpDialogData.data.children){
          this.tmpDialogData.data.children = [];
        }
        this.tmpDialogData.data.children.push(this.newPermissionForm);
        this.onSubmit();
      },
      remove(store, data) {
        var that = this;
        this.axios.post(this.biz.serverUrl+'/rest/permissionDel','id='+data.id,this.biz.urlencodedConfig).then(function(res){
          that.$notify.success({message:res.data.msg});
          that.find();
        })
        //store.remove(data);
      },
      renderContent(h, { node, data, store }) {
        if(data.level == 3){
          return (
            <span>
              <span><span>{node.label}</span></span>
              <span style="float: right; margin-right: 20px">
                <el-button size="mini" on-click={ () => this.remove(store, data) }>删除</el-button>
              </span>
            </span>);
        }else if(data.level == 0){
          return (
            <span>
                <span><span>{node.label}</span></span>
                <span style="float: right; margin-right: 65px">
                <el-button size="mini" on-click={ () => this.appendShow(store, data) }>增加子项</el-button>
                </span>
          </span>);
        }
        else{
          return (
              <span>
                  <span><span>{node.label}</span></span>
                  <span style="float: right; margin-right: 20px">
                    <el-button size="mini" on-click={ () => this.appendShow(store, data) }>增加子项</el-button>
                    <el-button size="mini" on-click={ () => this.remove(store, data) }>删除</el-button>
                  </span>
              </span>);
        }
      },
      onSubmit:function(){
//        console.log('submit!');
        console.log(this.permissionTree);
//        console.log('reftree:')
//        console.log(this.$refs);
//        console.log('store:')
//        console.log(this.tmpDialogData.store);
        var that = this;
        this.axios.post(this.biz.serverUrl+'/rest/permissionSave',this.permissionTree).then(function(res){
          console.log(res);
          that.find();
          that.$notify.success({message:res.data.msg});

        }).catch(function(res){
          console.log(res)
        })





      },

      handleNodeClick:function(data, checked, indeterminate){
        this.permissionForm = data;
        console.log(data, checked, indeterminate);
      },
      handleCheckChange:function(data){
        console.log(data);
      },
      getCheckedNodes:function() {
        console.log(this.$refs.tree.getCheckedNodes());
      },
      getCheckedKeys:function() {
        console.log(this.$refs.tree.getCheckedKeys());
      },
      setCheckedKeys:function(){
        this.$refs.tree.setCheckedKeys([3]);
      }
    }
  }
</script>
<style>

</style>
