<template>
	<div id="yp-userPw">
      <el-form   ref="form" :model="form"   label-width="80px">
        <el-form-item label="老密码" prop="oldPw">
          <el-input type="password" v-model="form.oldPw"> </el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPw1">
          <el-input type="password" v-model="form.newPw1"> </el-input>
        </el-form-item>

        <el-form-item label="再次输入" prop="newPw">
          <el-input type="password" v-model="form.newPw"> </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="save">保存</el-button>
        </el-form-item>
      </el-form>
	</div>
</template>
<script>
  export default {
   // oid: parseInt(this.$route.query.id),
    data: function () {
      return {
        form:{
        }
      }
    },
    mounted: function(){
    },
    methods: {
      save: function(){
        var that = this;
        this.axios.post(this.biz.serverUrl+'/rest/passwdSave',this.form).then(function(res){
          if(res.data.status == 1){
            that.$notify.success({message:res.data.msg});
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
