<template>
	<div id="ivviad-list" class="yt-list">
		<div>
        <el-form :inline="true"  :model="fsp"  ref="fsp" label-width="80px" label-position="left">
          <el-form-item label="标题" prop="title" label-width="50px">
            <el-input v-model="fsp.map.title" placeholder="请输入查询内容">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="list" >查询</el-button>
          </el-form-item>
        </el-form>
      <div class="table-div">
      <div class="table-add">
        <router-link  v-on:click.native="add" to="###" tag="el-button" class="yp_tip_button" style="margin-bottom:0px;">新增</router-link>
      </div>

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
            <el-button type="text" size="mini" @click="edit(datas.row.id)">编辑</el-button>
            <el-button type="text" size="mini" @click="del(datas.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      </div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="fsp.pageNo"
        :page-size="fsp.pageSize"
        layout="total,prev, pager, next, jumper"
        :total="fsp.recordCount ">
      </el-pagination>
      <el-dialog ref="dig" :visible.sync="dialogVideoVisible" >

        <video id="videoPlayer" autoplay="true" ref="videoPlayer"  controls="controls" :src="playVideoUrl">
          您的浏览器不支持 video 标签。
        </video>
      </el-dialog>

      <div ref='testDiv'></div>
    </div>
	</div>
</template>
<script>
  var qs = require('qs');
  export default {
    data: function () {
      return {
        currentRoleId:0,
        dialogFormVisible:false,
        dialogVideoVisible:false,
        fsp:{
          pageSize: 12,//搜索关键字
          pageNo:1,
          recordCount:1,
          map:{}//搜索条件
        },
        datas:[],
        playVideoUrl:'',
      }
    },
    mounted: function(){
      this.initData();
    },
    methods: {
      initData: function(){
        this.list();
      },
      add: function(){
        this.$router.push({path:'/ivviAdAdd'});
      },
      edit: function(id){
        this.$router.push({path:'/ivviAdEdit?id='+id});
      },
      del: function(id){
        var that = this;
        this.axios.post(this.biz.serverUrl+'/ivvi/ivviAdDel',qs.stringify({id:id}),this.biz.urlencodedConfig).then(function(res){
          if(res.data.status){
            that.$notify.success({message:res.data.msg});
            that.list();
          } else {
            that.$notify.error({message:res.data.msg});
          };

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
      list: function () {
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
      }
    }
  }
</script>
<style>
  table{border-spacing:0}
  #yp-login{
		width:100%;
		height:100%;
		background:#eee;
	}
</style>
