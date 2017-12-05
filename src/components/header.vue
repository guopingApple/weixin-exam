<template>

  <div id="header">
    <el-row>
      <el-col :span="3" class="header-left"><i class="el-icon-menu" style="margin-right: 5px"></i>快捷菜单</el-col>
      <el-col :span="21" class="header-right">
        <el-row>
          <el-col :span="24">
            <span class="header-logo">微信后端培训系统</span>
            <span class="users">
                <el-dropdown @command="handleCommand">
                  <span class="el-dropdown-link">
                    <em class="welcome"> 欢迎您，{{ user.email }}</em><i class="el-icon-arrow-down"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="0">修改密码</el-dropdown-item>
                    <el-dropdown-item command="1"><i class="iconfont icon-tuichu"></i>退出</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </span>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>

</template>


<script>
  import ElCol from 'element-ui/packages/col/src/col'
  import ElIcon from '../../node_modules/element-ui/packages/icon/src/icon.vue'
  import ElRow from 'element-ui/packages/row/src/row'

  export default {
    components: {
      ElRow,
      ElIcon,
      ElCol
    },
    name: 'header',
    data: function () {
      return {
        msg: 'LOGO',
        user: {email: 'fy@zhiruyi.com'}
      }
    },
    methods: {
      handleCommand (command) {
        if (command === '0') {
          this.$router.push({path: '/userPw'})
        }
        if (command === '1') {
          this.$router.push({path: '/login'})
        }
      }
    }
  }
</script>

<style scoped="scoped">
  #header {
    height: 65px;
    line-height: 65px;
    background-color: #006ff5;
    background: -webkit-linear-gradient(right, #2e9fff, #006ff5);
    background: linear-gradient(right, #2e9fff, #006ff5);
    color: #fff;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 9;
  }

  .header-left {
    height: 65px;
    text-align: center;
    font-size: 18px;
  }

  .header-logo {
    font-size: 20px;
    padding-left: 15px;
  }

  .users {
    float: right;
    padding-right: 15px;
    font-size: 12px;
  }

  .welcome {
    margin-right: 10px
  }

  .el-dropdown {
    color: #fff;
    font-size: 12px;
    cursor: pointer;
  }
  .el-dropdown-link em{
      font-style: inherit;
  }
</style>
