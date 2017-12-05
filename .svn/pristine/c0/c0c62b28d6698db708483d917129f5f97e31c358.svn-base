<template>
	<div id="yp-userAdd">
      <el-form   ref="form" :model="form"   label-width="80px">
        <el-form-item label="登录名称" prop="username">
          <el-input v-model="form.username"> </el-input>
        </el-form-item>
        <el-form-item label="昵称名称" prop="nickname">
          <el-input v-model="form.nickname"> </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"> </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="save">保存</el-button>
        </el-form-item>
      </el-form>
	</div>
</template>
<script>
  export default {
    data: function () {
      return {
        form:{
        }
      }
    },
    created: function(){

    },
    mounted: function(){
        this.initData();
    },
    methods: {
      initData:function(){
      },
      save: function(){
        var that = this;
        this.axios.post(this.biz.serverUrl+'/rest/userSave',this.form).then(function(res){
          console.log(res);
          if(res.data.status){
            that.$notify.success({message:res.data.msg});
            that.$router.push({path:'/userList'});
          } else {
            that.$notify.error({message:res.data.msg});
          };

        }).catch(function(res){
          console.log(res)
        })
      }

    }
  }
</script>
<style>

</style>
