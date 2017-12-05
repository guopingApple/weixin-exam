<template>
  <div>
    平台统计页

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
        _pubData:{}
      }
    },
    created: function(){

    },
    mounted: function(){
      this.initData();
    },
    methods: {
      initData:function(){
        this._pubData =this.$store.state.pubData;
        console.log('_pubData');
        console.log(this.$store.state.pubData);
      }


  }
  }
</script>


