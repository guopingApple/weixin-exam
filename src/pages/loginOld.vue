<template>
  <div id="yp-login">
    <div>

      <el-form :model="userForm" :rules="userRules" ref="userForm" label-width="80px">
        <el-form-item label="账号" prop="username">
          <el-input v-model="userForm.username" placeholder="请输入登录邮箱">
            <template slot="append">@zhiruyi.com</template>
          </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="userForm.password" placeholder="请输入密码">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="userLogin">登录</el-button>
          <el-button :plain="true" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>


    </div>
  </div>
</template>
<script>
  var qs = require('qs')
  var axios = require('axios')
  export default {
    name: 'login',
    data: function () {
      return {
        userForm: {
          username: '',
          password: ''
        },
        userRules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        }

      }
    },
    methods: {
      userLogin: function () {
        // 设置导航选中项

        this.$refs['userForm'].validate((valid) => {
          if (valid) {
            var that = this
            var param = qs.stringify(this.userForm)

            var $this_axios = axios.create({
              baseURL: this.biz.serverUrl + '/rest/permissionSave1',
              timeout: 5000,
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            })

            // $this_axios.post(this.biz.serverUrl+'/rest/restLogin',param).then(function(res){
            this.axios.post(this.biz.serverUrl + '/rest/restLogin', param, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
            ).then(function (res) {
              // this.axios.post(this.biz.serverUrl+'/rest/restLogin',this.userForm).then(function(res){
              // this.axios.post(this.biz.serverUrl+'/rest/restLogin',param).then(function(res){
              // this.axios.get(this.biz.serverUrl+'/new/search2',this.formlogs).then(function(res){
              // this.axios.post('http://218.241.15
              // 4.235/role/userlist',this.form).then(function(res){
              // this.axios.post(this.biz.serverUrl+'/new/search3',this.formlogs).then(function(res){
              // debugger;
              console.log(11111122223333332321312123123123123121312321312312321312)
              if (res.data.status === -1) {
                that.$message.error(res.data.msg)
                return
              } else {
                sessionStorage.setItem('user', res.data.element)
                that.$router.push({path: '/main'})
              }
            }).catch(function (res) {
              alert(res)
              console.log(res)
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })

        // 远程验证
        // this.$router.push({path:'/index/edit-drama?id='+row.id});
//        console.log('1111');
//        var mockUser = {name:'fyy@zhiruyi.com',email:'fyyemail@zhiruyi.com'};
//        this.$store.commit('setUser',mockUser);
//        var mockUserJson = JSON.stringify(mockUser);
//        sessionStorage.setItem('user',mockUserJson);
//        this.$router.push({path:'/main'});
      },
      reset: function (index) {
        this.$refs['userForm'].resetFields()
      }
    }
  }
</script>
<style>
  #yp-login {
    width: 100%;
    height: 100%;
    background: #eee;
  }
</style>
