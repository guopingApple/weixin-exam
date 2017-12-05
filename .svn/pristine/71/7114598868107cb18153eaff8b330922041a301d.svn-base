<template>
	<div id="yp-ivviAdd" class="yt-add">
      <el-form   ref="form" :model="form"   label-width="150px">
        <el-form-item label="广告计划名称">
          <el-input v-model="form.adName"> </el-input>
        </el-form-item>
        <el-form-item label="归属市场">
          <el-radio-group v-model="form.marketId">
            <el-radio :label="1">ivvi市场</el-radio>
            <el-radio :label="2">酷派市场</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="广告资源类型">
          <el-input v-model="form.adType"> </el-input>
        </el-form-item>
        <el-form-item label="选择广告资源">

          <el-button type="primary" @click="selAdList">请选择</el-button> <span>{{curSelAd.title}}</span>
        </el-form-item>
        <el-form-item label="状态" >
          <el-switch on-text="启用" :on-value="1" off-text="关闭" :off-value="2" v-model="form.state"></el-switch>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="save">保存</el-button>
          <el-button :plain="true" @click="cancel">取消</el-button>
        </el-form-item>
      </el-form>
      <el-dialog title="选择资源列表" :visible.sync="dialogAdListVisible">
        <el-table
          :data="datas"
          style="width: 100%">
          <el-table-column
            prop="title"
            label="标题">
          </el-table-column>
          <el-table-column
            prop="memo"
            label="描述">
          </el-table-column>
          <el-table-column
            prop="bannerPic"
            label="轮播图" width="130" align="center">
            <template scope="scope">
              <el-popover
                ref="popover1"
                placement="top-start"
                trigger="hover">
                <img style="height:240px" :src="scope.row.bannerPic"/>
              </el-popover>
              <img style="height:65px;padding:0.5rem 0  0.5rem 0;vertical-align:top" :src="scope.row.bannerPic" v-popover:popover1></img>
            </template>

          </el-table-column>
          <el-table-column
            prop="previewPic"
            label="预览"  width="80" align="center">
            <template scope="scope">
              <el-popover
                ref="popover2"
                placement="top-start"
                trigger="hover">
                <img style="height:240px" :src="scope.row.previewPic"/>
              </el-popover>
              <img style="height:45px;padding:0.5rem 0 0.5rem 0;vertical-align:top" :src="scope.row.previewPic" v-popover:popover2></img>
            </template>
          </el-table-column>
          <el-table-column
            prop="videoUrl"
            label="视频地址">
            <template scope="datas">
              <el-button type="text" size="mini" @click="playVideo(datas.row.videoUrl)" > 点击播放</el-button>
            </template>
          </el-table-column>
          <el-table-column
            prop="pkgCode"
            label="包地址">
          </el-table-column>
          <el-table-column header-align="center" label="操作">
            <template scope="datas">
              <el-button type="text" size="mini" @click="selItem(datas.row.id,datas.row.title)">选择</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="fsp.pageNo"
          :page-size="fsp.pageSize"
          layout="total,prev, pager, next, jumper"
          :total="fsp.recordCount ">
        </el-pagination>
      </el-dialog>
       <el-dialog ref="dig" :visible.sync="dialogVideoVisible" >
        <video id="videoPlayer" autoplay="true" ref="videoPlayer"  controls="controls" :src="playVideoUrl">
          您的浏览器不支持 video 标签。
        </video>
      </el-dialog>
	</div>
</template>
<script>
  export default {
    data: function () {
      return {
        oid: parseInt(this.$route.query.id),
        dialogAdListVisible:false,
        dialogVideoVisible:false,
        playVideoUrl:'',
        curSelAd:{id:0,title:''},
        fsp:{
          pageSize: 12,//搜索关键字
          pageNo:1,
          recordCount:1,
          map:{}//搜索条件
        },
        datas:[],
        form:{
          marketId:1,
          state:1
        },
        imageUrl: '',
        preUrl: '',
        videoUrl:''
      }
    },
    created: function(){

    },
    mounted: function(){
      debugger;
        this.initData();
    },
    methods: {
      initData:function(){
        if(!this.oid){

          this.$router.push({path:'/ivviPlanList'});
          this.$notify.error({message:'参数错误！'});
        };
        this.findById(this.oid);
      },
      findById: function(id){
        var that = this;
        this.axios.post(this.biz.serverUrl+'/ivvi/ivviPlanFind','id='+id,this.biz.urlencodedConfig).then(function(res){
          that.form = res.data.element;
          that.findAdName(res.data.element.ivAdInfo);
          console.log(that.form)
        }).catch(function(res){
          console.log(res)
        })
      },
      findAdName(id){
        var that = this;
        this.axios.post(this.biz.serverUrl+'/ivvi/ivviAdFind','id='+id,this.biz.urlencodedConfig).then(function(res){
          that.curSelAd.id = res.data.element.id;
          that.curSelAd.title = res.data.element.title;
        }).catch(function(res){
          console.log(res)
        })
      },
      playVideo(url){
        this.dialogVideoVisible = true;
        this.playVideoUrl = url;
        if(this.$refs.videoPlayer != undefined) {
          this.$refs.videoPlayer.load();
        }
      },
      selItem(id,title){
        this.curSelAd.id = id;
        this.curSelAd.title = title;
        this.form.ivAdInfo = id;
        this.dialogAdListVisible = false;
      },
      cancel(){this.$router.go(-1);},
      selAdList(){
        this.dialogAdListVisible = true;
        var that = this;
        this.axios.post(this.biz.serverUrl+'/ivvi/ivviAdList',this.fsp).then(function(res){
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
      },
      save: function(){
        var that = this;
        this.axios.post(this.biz.serverUrl+'/ivvi/ivviPlanSave',this.form).then(function(res){
          console.log(res);
          if(res.data.status){
            that.$notify.success({message:res.data.msg});
            that.$router.push({path:'/ivviPlanList'});
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
