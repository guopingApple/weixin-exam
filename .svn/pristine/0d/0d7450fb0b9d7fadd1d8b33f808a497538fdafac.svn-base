<template>
	<div id="yp-userEdit">
      <el-form   ref="form" :model="form"   label-width="80px">
        <el-form-item label="登录名称" prop="username">
          <el-input v-model="form.username"> </el-input>
        </el-form-item>
        <el-form-item label="昵称名称" prop="nickname">
          <el-input v-model="form.nickname"> </el-input>
        </el-form-item>

        <el-form-item label="状态">
          <el-switch on-text="启用" :on-value="1" off-text="关闭" :off-value="2" v-model="form.state"></el-switch>
        </el-form-item>

        <el-form-item label="角色">
          <el-select v-model="form.role" placeholder="请选择角色">
            <el-option
              v-for="item in roles"
              :key="item.id"
              :label="item.memo"
              :value="item.id">
            </el-option>
          </el-select>
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
        oid: parseInt(this.$route.query.id),
        form:{
          role:''
        },
        arole:'',
        roles:[]
      }
    },
    created: function(){

    },
    mounted: function(){
        this.initData();
    },
    methods: {
      initData:function(){
        if(!this.oid){
          this.$router.push({path:'/userList'});
          this.$notify.error({message:'参数错误！'});
        };
        this.findById(this.oid);
        this.initRoles();
      },
      findById: function(id){
        var that = this;
        this.axios.post(this.biz.serverUrl+'/rest/userFind',"id="+id,this.biz.urlencodedConfig).then(function(res){
          that.form = res.data.element;
          console.log('res');
          console.log(res);
        }).catch(function(res){
          console.log(res)
        })
      },
      initRoles(id){
        var that = this;
        this.axios.post(this.biz.serverUrl+'/rest/roleAll',"id="+id,this.biz.urlencodedConfig).then(function(res){
          that.roles = res.data.datas;
          console.log("roles"+that.roles);
        }).catch(function(res){
          console.log(res)
        })
      },
      save: function(){
        var that = this;
        console.log(this.form);
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
