<template>
  <div id="leftMenu">
    <el-menu :default-openeds='["在线考试"]' default-active="2" @select="selectItems" class="el-menu-vertical-demo">
      <div v-for="menuItem in menuList">
        <el-submenu v-if="menuItem.link==''" :index="menuItem.name">
          <template slot="title"><i v-bind:class="menuItem.icon"></i>{{menuItem.name}}</template>
          <el-menu-item v-for="menuItemChild in menuItem.children" :key="menuItemChild.id" :index="menuItemChild.name">
            <router-link :to="menuItemChild.link"><i v-bind:class="menuItemChild.icon"></i>{{menuItemChild.name}}</router-link>
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="menuItem.name">
          <router-link :to="menuItem.link"><i class="iconfont icon-arrow_rf_bg"></i>{{menuItem.name}}</router-link>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>
<style>
    @import url('//at.alicdn.com/t/font_463715_5onhn86nkpe6d2t9.css');
    .el-menu li a{display: block}
    .iconfont{font-size: 20px}
    .el-menu-item.is-active{background-color:#d1dbe5;}
    .el-menu{background-color:#e6e6e6; }
</style>
<script>
export default {
  name: "leftMenu",
  data: function() {
    return {
      menuList: [
        {
          icon: 'iconfont icon-arrow_rf_bg',
          name: '在线考试',
          link: '',
          children: [{
            link: '/examList',
            name: '试卷列表'
          }]
        },
        {
          icon: 'iconfont icon-arrow_rf_bg',
          name: '在线签到',
          link: '',
          children: [{
            link: '/signinList',
            name: '签到列表'
          },{
            link: '/signinResult',
            name: '签到结果'
          }]
        },
        {
          name: '在线报名',
          link: '/enrolList'
        },
        {
          name: '在线调研',
          link: '/surveyList'
        },
        {
          name: '公司管理',
          link: '/companyManage'
        },
        {
          name: '系统管理',
          link: '/systemManage'
        }
        // {
        //   link: '',
        //   name: '在线培训',
        //   children: [{
        //     icon: '',
        //     id: 2,
        //     link: '/list',
        //     name: '培训列表',
        //     children: null
        //   }]
        // }
      ]
    };
  },
  mounted: function() {
    // this.initData();
  },
  methods: {
    initData: function() {
      var that = this;
      this.axios.post(this.biz.serverUrl + "/rest/getMenuList").then(function(res) {
          that.menuList = res.data.datas;
          console.log(res.data.datas)
          that.menuList.push(
            { name: "测试", link: "/list" },
            { name: "在线培训报名", link: "/enrolList" },
            { name: "在线考试", link: "/examList" },
            { name: "在线签到", link: "",children:[
              { name: "签到列表", link: "/signinList"},{ name:"签到结果", link: "signinResult"}
            ]}
          );
          // console.log("1111111111");
          console.log(that.menuList);
        })
        .catch(function(res) {
          console.log(res);
        });
    },
    selectItems(index){
      // this.$store.state.adminleftnavnum = index;
      //按钮选中之后设置当前的index为store里的值。
    }
  }
};
</script>
