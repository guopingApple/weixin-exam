<template>
    <div class="container">
        <el-row>
            <el-col :span="24"  :style="{'-webkit-overflow-scrolling': scrollMode ,'height': wrapperHeight + 'px'}"  ref="wrapper">                
                <v-loadmore :bottom-method="loadBottom" :bottom-all-loaded="bottomAllLoaded" :auto-fill="true" ref="loadmore" :bottomPullText='bottomText' :bottomLoadingText = 'bottomLoadingText' :bottomDistance='bottomDistance' @bottom-status-change="handlebottomChange" style="height:100%;overflow:auto;background-color:#EBEBEB" class="loadmores"> 
                    <el-card :body-style="{ padding: '0px' }" v-for="(o, index) in tableData" :key="index">
                        <h6 class="title">{{o.name}}</h6>                    
                        <div class="card-box clearfix">
                            <!-- <img src="../../assets/1.png" class="image"> -->
                            <img v-bind:src='o.coverPicUrl' class="image">                        
                            <div class="content-1">
                                <p>培训期间每天正常签到时间为:</p>
                                <p v-if='o.signTimeType==2'>上午:{{o.amStartTime}}~{{o.amEndTime}}<span class="iconfont normal">&#xe6f7;</span></p>
                                <p v-if='o.signTimeType==2'>下午:{{o.pmStartTime}}~{{o.pmEndTime}}<span class="iconfont later">&#xe6f7;</span></p>
                                <p v-if='o.signTimeType==1'>{{o.amStartTime}}~{{o.amEndTime}}<span class="iconfont later">&#xe6f7;</span></p>
                            </div>
                        </div>
                        <div>
                            <div class="bottom clearfix">
                                <el-button type="text" class="button" style="float:left" @click="detail(o.id)">查看签到详情</el-button>
                                <el-button type="text" class="button" @click="ewm(o.id)">查看二维码</el-button>
                            </div>
                        </div>
                    </el-card>
                </v-loadmore>
            </el-col>
        </el-row>  
        <div id="detail">
            <div class="signinDetail">
                <h6>查看签到详情</h6>
                <div class="content-2">
                    <p class="title-1">您培训期间需要签到6次，您已签到4次:</p>
                    <div class="signin">
                        <p class="date">2017-11-11</p>
                        <div class="signind-1">
                            <p>上午:08:00——08:30<span class="later">(迟到: 09:34:52)</span></p>
                            <p>下午:13:00——13:30<span class="normal">(正常: 13:25:53)</span></p>
                        </div>
                    </div>
                </div>
                <div class="ewmdetail">
                    <img v-bind:src="qrcode" alt="">
                </div>
                <div class="btn"><el-button type="text" class="cancel" @click="cancel()">取消</el-button></div>
            </div>
        </div>
    </div>
</template>    
<style lang="less" scoped>
    @font-face {
        font-family: "iconfont";
    }
    .iconfont {
        font-family: "iconfont";
    }
    @r:50rem;
    .container{
        width:100%;
        min-height:100%;
        padding: 20/@r 30/@r 0;
        box-sizing: border-box;
        background-color: #EBEBEB;
    }
    .el-card{
        padding:20/@r;
        margin-bottom: 20/@r;
    }
    .bottom {
        margin-top:20/@r;
        line-height: 28/@r;
    }

    .button {
        padding: 0;
        float: right;
        color:#3E3E3E;
        font-size:28/@r;
    }
    .card-box{
        margin: 20/@r 0;
    }
    .image {
        width: 35%;
        height:158/@r;
        vertical-align: middle;
        float: left;
    }
    .content-1{
        float:left;
        width:65%;
        box-sizing: border-box;
        padding:15/@r;
    }
    .content-1 p{
        font-size:28/@r;
        color:#666;
    }
    .content-1 .iconfont{
        margin-left: 3px;
        font-size:32/@r;
    }
    .content-1 .signind{
        color:#48C526;
    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    
    .clearfix:after {
        clear: both
    }
    .title{
        font-size:32/@r;
        color:#1b1b1b;
        font-weight: normal;
        text-overflow: ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    #detail{
        position: fixed;
        width:100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        left: 0;
        top:0;
        display: none;
        .signinDetail{
            width:100%;
            height: auto;
            background-color: #fff;
            position: absolute;
            bottom:0;
            left: 0;
            // transform: translateY(100%);
            // transition:all .5s;
            h6{
                font-weight: normal;
                font-size:32/@r;
                text-align: center;
                line-height: 80/@r;
                border-bottom:1px solid #E4E4E4;
            }            
        }   
    }
    .content-2{
        width:100%;
        padding:15/@r 34/@r 34/@r 34/@r;
        box-sizing:border-box;
        display: none;
        .title-1{
            font-size: 32/@r;
            color:#3E3E3E;
        }
        .signin{
            font-size:28/@r;
            color:#666;
            margin-top:15/@r;
            .date{
                font-size:28/@r;                
            }
            .signind-1{
                padding-left: 50/@r;
                span{
                    margin-left:15/@r;
                }
            }
        }
    }
    .ewmdetail{
        padding:34/@r;
        text-align:center;
        display:none;
    }
    .normal{
        color:#48C525;
    }
    .later{
        color:#CA2828;
    }
    .btn{
        width:100%;
        text-align: center;
        line-height:80/@r;
        border-top:1px solid #E4E4E4;
        .cancel{
            color:#3E3E3E;
            font-size:32/@r;
        }
    }
    @keyframes mymove
    {
        from {transform:translateY(100%);}
        to {transform:translateY(0);}
    }
    @keyframes mymove1
    {
        from {transform:translateY(0);}
        to {transform:translateY(100%);}
    }
</style>
<script>
 import $ from 'jquery';
 import qs from 'qs';
 import axios from 'axios';
 import { Loadmore } from 'mint-ui'
 import { Toast } from 'mint-ui';
 export default {
    components:{
      'v-loadmore':Loadmore,
    },
    data() {
      return {
        tableData:[],
        qrcode:'',
        t:null,
        bottomAllLoaded: false, // 是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
        scrollMode:"auto", // 移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
        totalpage:0,
        page:1,
        pageSize:10,
        loading:false,
        bottomText: '上拉加载更多...',
        bottomDropText:'释放更新',
        bottomLoadingText:'加载中...',
        wrapperHeight: 0,
        bottomStatus:'',
        bottomDistance:50
      }
    },
    mounted(){
        this.list()
        this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.$el.offsetTop;
    },
    methods: {
        detail:function(id){
            $("#detail").show();
            $(".signinDetail h6").text("查看签到详情");
            $(".content-2").show();          
            $(".signinDetail").css("animation","mymove .5s"); 
            let that=this;
            let arr={}
            arr.employeeId='123456';
            arr.employeeName='12346';
            arr.twoDimTime='312654';
            arr.signinId=id;
            let param=qs.stringify(arr)
            this.axios.post(this.biz.serverUrl+'rest/signin/employeeSignin',param,{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(function (res) {
                console.log(res)
                if(res.data.code == 200){
                    that.tableData=res.data.datas
                    // console.log(that.tableData)
                    // //   that.pageSize=res.data.fsp.pageSize      //每页的条数
                    // that.pageCount=res.data.fsp.pageCount      //页总数
                    // that.currentPage=res.data.fsp.page        //当前页
                    // that.tableData.forEach(function(v,i){                   
                    //     let time=new Date(that.tableData[i].createTime)
                    //     that.tableData[i].createTime=that.getTimer(time)
                    // })
                }
            }).catch(function (res) {
                console.log(res)
            })           
        },
        ewm:function(id){
            $("#detail").show();           
            $(".signinDetail h6").text("查看二维码");
            $(".ewmdetail").show();
            $(".signinDetail").css("animation","mymove .5s");    
            this.dowewm(id)
            let that=this
            this.t=setInterval(function(){
                that.dowewm(id)
            },300000)
        },
        dowewm(id){
            let arr={}
            arr.signinId=id;
            let that=this;
            let param=qs.stringify(arr)       
            this.axios.post(this.biz.serverUrl+'rest/signin/signTwoDimImage',param,{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(function (res) {
                console.log(res)
                if(res.data.code == 200){
                    that.qrcode=res.data.element.qrCode
                }
            }).catch(function (res) {
                console.log(res)
            })   
        },
        cancel:function(){
           setTimeout(function(){
                $("#detail").hide();
                $(".content-2").hide();
                $(".ewmdetail").hide();
           },500)
            $(".signinDetail").css("animation","mymove1 .5s");            
        },
        list(){
            let that = this
            let pages=qs.stringify({'page':this.page,'rows':this.pageSize})
            this.axios.post(this.biz.serverUrl+'rest/signin/list',pages,{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(function (res) {
            console.log(res)
            if(res.data.code == 200){
                that.tableData=res.data.datas
                that.page=res.data.fsp.page
                that.totalpage = res.data.fsp.pageCount
                if(that.page == that.totalpage){
                    that.bottomText = '全部加载完成'
                    that.bottomAllLoaded = true;
                    Toast({
                        message: '全部加载完成',
                        duration: 3000
                    })
                    let ele = document.querySelector('.mint-loadmore-bottom')
                    ele.style.display='none'
                    // console.log(ele)
                }
            }
            }).catch(function (res) {
                console.log(res)
            })
        },
        loadBottom:function() {
            if($('.loadmores').scrollTop()>=$('.mint-loadmore-content').height()-800){
                console.log("shanglale")
                // 上拉加载
                this.more();// 上拉触发的分页查询
                this.$refs.loadmore.onBottomLoaded();// 固定方法，查询完要调用一次，用于重新定位
            }else if($('.loadmores').scrollTop()==0){
                $(".mint-loadmore-content").css("transform","translate3d(0px,0px,0px)")
            }
            
        },
        more(){
            if(this.totalpage == 1){
                this.page = 1;
                this.bottomAllLoaded = true;
                this.scrollMode = "touch";
            }else{
                this.page = parseInt(this.page) + 1;
                this.bottomAllLoaded = false;
            }
            let that = this
            let pages=qs.stringify({'page':this.page,'rows':this.pageSize})
            this.axios.post(this.biz.serverUrl+'rest/signin/list',pages,{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(function (res) {
            console.log(res)
            if(res.data.code == 200){
                // that.tableData=res.data.datas
                res.data.datas.forEach(function(v,i){
                    that.tableData.push(v) 
                })
                that.page=res.data.fsp.page
                that.totalpage = res.data.fsp.pageCount
                if(that.page == that.totalpage){
                    that.bottomText = '全部加载完成'
                    that.bottomAllLoaded = true;
                    Toast({
                        message: '全部加载完成',
                        duration: 3000
                    })
                    let ele = document.querySelector('.mint-loadmore-bottom')
                    ele.style.display='none'
                    // console.log(ele)
                }
            }
            }).catch(function (res) {
                console.log(res)
            })
        },
        isHaveMore:function(){
            // 是否还有下一页，如果没有就禁止上拉刷新
            // this.allLoaded = false; // true 是禁止上拉加载
            if(this.page == this.totalpage){
                this.bottomAllLoaded = true;
                this.bottomText = '全部加载完成'
            }
        },
        handlebottomChange(status) {
            this.bottomStatus = status;
            // console.log( status )
        }
    },
    beforeDestroy(){
        clearInterval(this.t)
    }
  }
</script>