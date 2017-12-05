<template>
	<div id="yp-roleEdit">
      <el-form   ref="form" :model="form"   label-width="80px">
        <el-form-item label="名称" prop="name">
          <el-input v-model="form.name"> </el-input>
        </el-form-item>
        <el-form-item label="中文说明" prop="memo">
          <el-input v-model="form.memo"> </el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-switch on-text="启用" :on-value="1" off-text="关闭" :off-value="2" v-model="form.state"></el-switch>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="save">保存</el-button>
        </el-form-item>
      </el-form>
	</div>
</template>
<script>
  var urlencodedConfig = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
  export default {
    data: function () {
      return {
        oid: parseInt(this.$route.query.id),
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
        if(!this.oid){
          this.$router.push({path:'/roleList'});
          this.$notify.error({message:'参数错误！'});
        };
        this.findById(this.oid);
      },
      findById: function(id){
        var that = this;
        this.axios.post(this.biz.serverUrl+'/rest/roleFind','id='+id,urlencodedConfig).then(function(res){
          that.form = res.data.element;
          console.log(that.form)
        }).catch(function(res){
          console.log(res)
        })
      },
      save: function(){
        var that = this;
        this.axios.post(this.biz.serverUrl+'/rest/roleSave',this.form).then(function(res){
          console.log(res);
          if(res.data.status){
            that.$notify.success({message:res.data.msg});
            that.$router.push({path:'/roleList'});
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
