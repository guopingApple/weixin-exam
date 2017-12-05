<template>
  <el-form :model="form" label-width="80px" style="width: 80%; margin: 25px " labelPosition="left">
    <el-form-item label="title" prop="title">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="memo" prop="memo">
      <el-input v-model="form.memo"></el-input>
    </el-form-item>
    <el-form-item label="pkgCode" prop="pkgCode">
      <el-input v-model="form.pkgCode"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="save">保存</el-button>
      <el-button :plain="true" @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    data () {
      return {
        oid: parseInt(this.$route.query.id),
        form: {}
      }
    },
    mounted: function () {
      this.findById(this.oid)
    },
    methods: {
      findById (id) {
        let that = this
        this.axios.post(this.biz.serverUrl + '/ivvi/ivviAdFind', 'id=' + id, this.biz.urlencodedConfig).then(function (res) {
          that.form = res.data.element
          console.log(that.form)
        }).catch(function (res) {
          console.log(res)
        })
      },
      save () {
        let that = this
        this.axios.post(this.biz.serverUrl + '/ivvi/ivviAdSave', this.form).then(function (res) {
//          console.log(res.data.status)
          if (res.data.status) {
            that.$notify.success({message: res.data.msg})
            that.$router.push({path: '/list'})
          } else {
            that.$notify.error({message: res.data.msg})
          }
        }).catch(function (res) {
          console.log(res)
        })
      },
      cancel () {
        this.$router.go(-1)
      }
    }
  }
</script>
