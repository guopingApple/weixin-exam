<template>
  <div>
      <div class="bg-gray"></div>
      <img src="../../assets/exam.jpg" width="100%" alt="">
      <section class="examList">
          <!-- <section class="examList" :style="{'-webkit-overflow-scrolling': scrollMode}"> -->
          <!-- <h3><img src="../../assets/data.png"alt="">最近半年</h3> -->
        <v-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore"> 
              <!-- <v-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore"> -->
            <!-- <ul style="height:360px;overflow:auto"> -->
            <ul>
                <li class="lineTop lineBottom"  v-for="(item,index) in examList" @click="exam(item.id)">
                    <h2>{{ item.name }}</h2>
                    <p>时间{{ item.createTime }}</p>
                    <span></span>
                </li>
            </ul>
        </v-loadmore>
      </section>
      <!-- <section class="examList">
          <h3><img src="../../assets/data.png"alt="">半年前到一年前</h3>
          <ul>
              <li class="lineTop lineBottom" v-for="(item,index) in oneList" @click="exam(item.id)">
                  <h2>{{ item.name }}</h2>
                  <p>时间{{ item.createTime }}</p>
                  <span></span>
              </li>
          </ul>
      </section> -->
  </div>
</template>
<style lang="less" scoped>
@r:50rem;
.bg-gray{position: fixed;left: 0;top: 0;right: 0;bottom: 0;z-index: -1;background-color:#f5f5f5}
// .examList{height:100vh;overflow:hidden;}
.examList h3{height: 60/@r;line-height: 60/@r;color: #0085d0;font-size: 24/@r;padding:0 40/@r;}
.examList h3 img{width: 19/@r;height: 19/@r;margin-right: 10/@r;position: relative;top: -4/@r;}
.examList ul li{padding: 20/@r 180/@r 0 40/@r;background-color:#fff;margin-bottom: 20/@r;}
.examList ul li:last-child{margin-bottom: 0;}
.examList ul li h2{color: #4c4c4c;font-size: 30/@r;line-height: 42/@r;font-weight: normal;}
.examList ul li p{color: #999;font-size: 24/@r;line-height: 56/@r;}
.examList ul li span {
  width:26/@r;
  height: 26/@r;
  content: ' ';
  background-color: transparent;
  border-top: 1px solid #6b6c6b;
  border-right: 1px solid #6b6c6b;
  position: absolute;
  top:50%;
  right: 35/@r;
  -webkit-transform:rotate(45deg) translateY(-50%);
  transform: rotate(45deg) translateY(-50%);
}
</style>
<script>
let qs = require('qs')
let axios = require('axios')

import { Loadmore } from 'mint-ui'

export default {
    components:{
      'v-loadmore':Loadmore,
    },
    data(){
        return{
            examList:[],
            pageNo:1,
            pageSize:5,
            allLoaded: false, // 是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
            scrollMode:"auto", // 移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
            totalpage:0,
            loading:false,
            bottomText: ''
        }
    },
    mounted: function () {
      this.list()
    // this.loadPageList();  //初次访问查询列表
    },
    methods: {
        list: function () {
            let that = this
            let param = qs.stringify({'pageNo':this.pageNo,'pageSize':this.pageSize})
            console.log( param )
            this.axios.post(this.biz.serverUrl + '/wechatpaper/list',param,this.biz.urlencodedConfig)
            .then(function (res) {
                // console.log(res)
                that.examList = res.data.datas
                that.totalpage = res.data.fsp.pageCount // 总数

                if(that.totalpage == 1){
                    that.allLoaded = true;
                }
                // that.$nextTick(function () {
                //     // 是否还有下一页，加个方法判断，没有下一页要禁止上拉
                //     that.scrollMode = "touch";
                //     that.isHaveMore();
                // })
                this.$nextTick(function () {  
                    // 原意是DOM更新循环结束时调用延迟回调函数，大意就是DOM元素在因为某些原因要进行修改就在这里写，要在修改某些数据后才能写，  
                    // 这里之所以加是因为有个坑，iphone在使用-webkit-overflow-scrolling属性，就是移动端弹性滚动效果时会屏蔽loadmore的上拉加载效果，  
                    // 花了好久才解决这个问题，就是用这个函数，意思就是先设置属性为auto，正常滑动，加载完数据后改成弹性滑动，安卓没有这个问题，移动端弹性滑动体验会更好  
                    this.scrollMode = "touch";  
                }); 

            }).catch(function (res) {
                console.log(res)
            })
        },
        loadTop() {
            // ...// 加载更多数据
            // this.list()
            // console.log(1111)
            // this.loadPageList();  //初次访问查询列表
            this.$refs.loadmore.onTopLoaded()
        },
        loadBottom:function() {console.log('上拉了')
            // 上拉加载
            this.more();// 上拉触发的分页查询
            this.$refs.loadmore.onBottomLoaded();// 固定方法，查询完要调用一次，用于重新定位
        },
        loadPageList:function (){
            // 查询数据
            let that = this
            let param = qs.stringify({'pageNo':this.pageNo,'pageSize':this.pageSize})

            this.axios.post(this.biz.serverUrl + '/wechatpaper/list',param,this.biz.urlencodedConfig)
            .then(function (res) {
            // this.axios.get('/copyright?key='+ encodeURIComponent('公司名称')+"&mask=001"+"&page="+this.pageNo+"&size="+this.pageSize).then(res =>{
                console.log(res);
                that.halfList = res.data.halfList

                // this.proCopyright = res.data.result.PRODUCTCOPYRIGHT;
                // this.totalpage = Math.ceil(res.data.result.COUNTOFPRODUCTCOPYRIGHT/this.pageSize);

                // that.totalpage = res.data.fsp.recordCount // 总数

                if(that.totalpage == 1){
                    that.allLoaded = true;
                }
                that.$nextTick(function () {
                    // 是否还有下一页，加个方法判断，没有下一页要禁止上拉
                    that.scrollMode = "touch";
                    that.isHaveMore();
                });
            });
        },
        more:function (){ 
            // console.log('上拉了')
            // 分页查询
            if(this.totalpage == 1){
                this.pageNo = 1;
                this.allLoaded = true;
            }else{
                this.pageNo = parseInt(this.pageNo) + 1;
                this.allLoaded = false;
            }

            console.log('pageNo' + this.pageNo);

            let that = this
            let param = qs.stringify({'pageNo':this.pageNo,'pageSize':this.pageSize})

            // this.axios.get('/copyright?key='+ encodeURIComponent('公司名称')+"&mask=001"+"&page="+this.pageNo+"&size="+this.pageSize).then(res=>{

            this.axios.post(this.biz.serverUrl + '/wechatpaper/list',param,this.biz.urlencodedConfig)
            .then(function (res) {

                that.examList = that.examList.concat(res.data.datas);
                console.log(that.examList);

                that.isHaveMore();
            });
        },
        isHaveMore:function(){
            // 是否还有下一页，如果没有就禁止上拉刷新
            // this.allLoaded = false; // true 是禁止上拉加载
            if(this.pageNo == this.totalpage){
                this.allLoaded = true;
            }
        },
        exam(id) {
            console.log(id)
            let that = this
            let param = qs.stringify({'paperId':id,'employeeId':'1'})

            // console.log(param)

            this.axios.post(this.biz.serverUrl + '/wechatpaper/check',param,this.biz.urlencodedConfig)
            .then(function (res) {
                console.log(res)
                if (res.data.isExam) {// 已考试
                    that.$router.push({path: '/examResult',query:{param:param}})
                }else{// 未考试
                    
                    if(res.data.hasPaper){
                        that.$router.push({path: '/paperInfo',query:{param:param}})
                        // that.$message.error({message: '试卷不存在！'})
                    }else{
                        that.$message.error({message: '试卷不存在！'})
                    }
                }
            }).catch(function (res) {
                console.log(res)
            })
            // this.$router.push({path: '/paperInfo'})
        }
    }
}
</script>
