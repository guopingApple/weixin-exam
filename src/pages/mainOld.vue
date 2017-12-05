<template>
  <div id="main">
    <app-header></app-header>
    <el-row class="tac">
      <el-col :span="3">
        <el-menu default-active="2" class="el-menu-vertical-demo" @select="setNavSelected" >
          <div v-for="menuItem in menuList">
            <el-submenu v-if="menuItem.link==''" :index="menuItem.name">
              <template slot="title"><i v-bind:class="menuItem.icon"></i>{{menuItem.name}}</template>
              <el-menu-item v-for="menuItemChild in menuItem.children" :key="menuItemChild.id" :index="menuItemChild.name">
                <router-link :to="menuItemChild.link"><i v-bind:class="menuItemChild.icon"></i>{{menuItemChild.name}}</router-link>
              </el-menu-item>
            </el-submenu>
            <el-menu-item v-else :index="menuItem.name"><router-link :to="menuItem.link">{{menuItem.name}}</router-link></el-menu-item>
          </div>
        </el-menu>
      </el-col>
      <el-col :span="21">
        <!-- 面包屑统一用UI库 -->
        <el-breadcrumb class="yp-crumbs-box" separator="/">
          <el-breadcrumb-item :to="{ path: 'media' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{pageTitle}}</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view></router-view>
      </el-col>
    </el-row>
    <!--<app-footer></app-footer>-->
  </div>
</template>
<script>
  import appHeader from '../components/header.vue'
  import appFooter from '../components/footer.vue'
  export default {
    name: 'main',
    components: {
      appHeader,
      appFooter
    },
    data:function(){
      return{
        pageTitle:this.$store.state.pageInf.title,
        //pageTitle:sessionStorage.title,
        msg: 'LOGO',
        user:{userName:"fy@zhiruyi.com"},
        menuList:[
          {name:'授权管理',link:'/rolePermission'},
          {name:'修改密码',link:'/userPw'},
          {name:'角色管理',link:'/roleList'}

        ]
      }
    },
    mounted: function(){
      this.initData();
      this.getLoginName();
      //this.getPubData();
      console.log('main init>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    },
    computed: {
      getPageTitle() {
        return this.$store.state.pageInf.title;
      }
    },
    watch:{
      getPageTitle(val) {
        this.pageTitle = val;
      }
    },
    methods: {
      initData:function(){
        var that = this;
        this.axios.post(this.biz.serverUrl+'/rest/getMenuList').then(function(res){
          that.menuList = res.data.datas;
          that.menuList.push({name:'测试',link:'/list'});
          console.log("1111111111");
          console.log(that.menuList);
        }).catch(function(res){
          console.log(res)
        })

      },
      setNavSelected: function (index) {//设置导航选中项
        console.log(index);
//        var nav = this.navList, menu = nav[index];
//        for (var i in nav) {
//          this.$set(nav[i], 'active', false);
//        }
//        this.$set(menu, 'active', true);
      },
      getPubData(){
        var that = this;
        this.axios.get(this.biz.serverUrl+'/rest/pubData').then(function(res){
         // $store.commit('setPubData',{title:to.meta.title});
          that.$store.commit('setPubData',res.data.element);
          console.log('setPubData');
          console.log(res.data.element);
        })
      },
      getLoginName(){
        var that = this;
        this.axios.get(this.biz.serverUrl+'/rest/getLoginName').then(function(res){
          that.user.userName = res.data.element;
        })
      },
      exitLogin: function(){//退出登录

        this.axios.get(this.biz.serverUrl+'/rest/logout')
        this.$store.commit('setUser',{})
        this.$router.push({path:'/login'});
        sessionStorage.removeItem('user');
      }

    }
  }
</script>

<style>
  /*根节点初始化css*/
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    background: #fff;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after, q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    font-size: 12px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  body {
    background: #fff;
    font-family: "Microsoft YaHei","Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","WenQuanYi Micro Hei",sans-serif;
    font-size: 14px;
    color: #444;
  }

  .el-loading-mask{
    position: fixed !important;
  }
  .el-submenu .el-menu-item {
    min-width: 20px;
  }




  div#yp-header,#yp-footer{
    width:100%;
    height:46px;
    background:#5fa7ed;
    line-height:46px;
    font-size:12px;
    overflow:hidden;
  }
  div#yp-header {
    color: #fff;
    background: -webkit-linear-gradient(left, #2e9fff, #006ff5);
    background: linear-gradient(90deg, #2e9fff, #006ff5);
  }


  div#yp-logo{
    width:260px;
    height:46px;
    background:url(../assets/yp-ssp-logo.png) no-repeat;
    display:inline-block;
  }

  div#yp-user-box {
    display: block;
    height: 46px;
    line-height: 46px;
    float: right;
    margin-right: 20px;
  }
  #yp-exit-btn{
    width:22px;
    height:19px;
    border:none;
    cursor:pointer;
    display:inline-block;
    background:url(../assets/yp-ssp-icon.png) no-repeat;
    margin-left:10px;
    vertical-align:middle;
  }

  ul#yp-nav{
    height:46px;
    display:inline-block;
  }

  ul#yp-nav li{
    float: left;
    height: 46px;
    padding: 0 0 0 20px;
    margin:0 20px;
    line-height: 46px;
    position:relative;
    overflow:hidden;
    cursor:pointer;
  }

  i.yp-nav-icon{
    width:20px;
    height:16px;
    display:inline-block;
    background:url(../assets/yp-ssp-icon.png) no-repeat;
    position:absolute;
    top:15px;
    left:0;
  }

  img.yp-nav-active{
    width:100%;
    height:3px;
    position:absolute;
    left:0;
    bottom:0;
    display:none;
  }

  #yp-nav li:hover img.yp-nav-active{
    display:block;
  }
  div.yp-crumbs-box {
    height: 46px;
    line-height: 46px;
    padding-left: 20px;
    border-bottom: 1px solid #E2E2E2;
  }


  .yt-list {margin:0 1rem 0 1rem}
  .yt-list .table-div .table-add{margin-bottom:1rem}
  .yt-list .el-pagination{text-align:center}
  .yt-list .el-form{margin:1rem 0 1rem 0}
  .yt-list .el-pagination{margin:1rem 0 1rem 0}
  .yt-list .yp_tip_button {
    background:#eafaf0 !important;
    color:#2ecd71 !important;
    border:1px solid #2ecd71 !important;
    /*box-shadow:0 0 5px #2DCC70;*/
    margin-bottom:0px ;
    transition:all 0.5s !important;
    font-size:12px !important;
  }
  .yt-list .yp_tip_button:hover {
    background:#2DCC70 !important;
    color:#fff !important;
    /*border:none !important;*/
    box-shadow:0 0 5px #2DCC70 !important;
    margin-bottom:0px ;
  }


  .yt-add {width:30%; margin:1rem 1rem 0 1rem}
  .yt-edit {width:30%; margin:1rem 1rem 0 1rem}

</style>


