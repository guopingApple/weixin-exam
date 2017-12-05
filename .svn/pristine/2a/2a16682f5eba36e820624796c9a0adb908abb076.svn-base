<template>
  <div id="yp-header">
    <div id="yp-logo"></div>

    <div id="yp-user-box">
      <span style="text-decoration:underline;">{{user.email}}</span>
      <button id="yp-exit-btn" @click="exitLogin"></button>
    </div>
  </div>

</template>


<script>
  export default {
    name: 'header',
    data: function () {
      return {
        msg: 'LOGO',
        user: {email: 'fy@zhiruyi.com'}
      }
    },
    methods: {
      exitLogin: function () {

      }
    }
  }
</script>
<style>
  div#yp-header, #yp-footer {
    width: 100%;
    height: 46px;
    background: #5fa7ed;
    line-height: 46px;
    font-size: 12px;
    overflow: hidden;
  }

  div#yp-header {
    color: #fff;
    background: -webkit-linear-gradient(left, #2e9fff, #006ff5);
    background: linear-gradient(90deg, #2e9fff, #006ff5);
  }

  div#yp-logo {
    width: 260px;
    height: 46px;
    background: url(../assets/yp-ssp-logo.png) no-repeat;
    display: inline-block;
  }

  div#yp-user-box {
    display: inline-block;
    height: 46px;
    line-height: 46px;
    float: right;
    margin-right: 20px;
  }

  #yp-exit-btn {
    width: 22px;
    height: 19px;
    border: none;
    cursor: pointer;
    display: inline-block;
    background: url(../assets/yp-ssp-icon.png) no-repeat;
    margin-left: 10px;
    vertical-align: middle;
  }

  ul#yp-nav {
    height: 46px;
    display: inline-block;
  }

  ul#yp-nav li {
    float: left;
    height: 46px;
    padding: 0 0 0 20px;
    margin: 0 20px;
    line-height: 46px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  i.yp-nav-icon {
    width: 20px;
    height: 16px;
    display: inline-block;
    background: url(../assets/yp-ssp-icon.png) no-repeat;
    position: absolute;
    top: 15px;
    left: 0;
  }

  img.yp-nav-active {
    width: 100%;
    height: 3px;
    position: absolute;
    left: 0;
    bottom: 0;
    display: none;
  }

  #yp-nav li:hover img.yp-nav-active {
    display: block;
  }
</style>
