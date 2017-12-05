<template>
	<div id="yp-ivviAdd" class="yt-add">
      <el-form   ref="form" :model="form"   label-width="80px">
        <el-form-item label="轮播图展示图片" prop="bannerPic">
          <el-upload
            class="avatar-uploader"
            :action="uploadApi"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="视频预览图片" prop="previewPic">
          <el-upload
            class="pre-uploader"
            :action="uploadApi"
            :show-file-list="false"
            :on-success="handlePreSuccess"
            :before-upload="beforePreUpload">
            <img v-if="preUrl" :src="preUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="视频地址" prop="videoUrl">
          <el-upload
            class="video-uploader"
            :action="uploadApi"
            :show-file-list="false"
            :on-success="handleVideoSuccess"
            :before-upload="beforeVideoUpload">
            <i  class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <video controls="controls" v-if="videoUrl" :src="videoUrl" class="video-player">
            您的浏览器不支持 video 标签。
          </video>
        </el-form-item>
        <el-form-item label="包名" prop="pkgCode">
        <el-input v-model="form.pkgCode"> </el-input>
        </el-form-item>
        <el-form-item label="标题" prop="title">
          <el-input v-model="form.title"> </el-input>
        </el-form-item>
        <el-form-item label="描述" prop="memo">
          <el-input v-model="form.memo"> </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="save">保存</el-button>
          <el-button :plain="true" @click="cancel">取消</el-button>
        </el-form-item>
      </el-form>
	</div>
</template>
<script>
  export default {
    data: function () {
      return {
        uploadApi: this.biz.serverUrl+'/ivvi/uploadBannerPic',//图片上传接口地址
        form:{
        },
        imageUrl: '',
        preUrl: '',
        videoUrl:''
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
      cancel(){this.$router.go(-1);},
      save: function(){
        var that = this;
        this.axios.post(this.biz.serverUrl+'/ivvi/ivviAdSave',this.form).then(function(res){
          console.log(res);
          if(res.data.status){
            that.$notify.success({message:res.data.msg});
            that.$router.push({path:'/ivviAdList'});
          } else {
            that.$notify.error({message:res.data.msg});
          };

        }).catch(function(res){
          console.log(res)
        })
      },
      handleAvatarSuccess(res, file) {
        debugger;
        this.imageUrl = URL.createObjectURL(file.raw);
        this.form.bannerPic = res.element;
      },
      handlePreSuccess(res, file) {
        debugger;
        this.preUrl = URL.createObjectURL(file.raw);
        this.form.previewPic = res.element;
      },
      handleVideoSuccess(res, file) {
        debugger;
        this.videoUrl = URL.createObjectURL(file.raw);
        this.form.videoUrl = res.element;
      },

      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      beforePreUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      beforeVideoUpload(file) {
        const isVideo = file.type === 'video/mp4';
        const isLt10M = file.size / 1024 / 1024 < 10;

        if (!isVideo) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt10M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isVideo && isLt10M;
      }
    }
  }
</script>
<style>



  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .pre-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .video-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 492px;
    height: 178px;
    display: block;
  }
  .video-player {
    width: 320px;
    height: 180px;
    display: block;
  }
</style>
