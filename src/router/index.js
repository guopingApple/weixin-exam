import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/'
import Hello from '@/components/Hello'
import axios from 'axios'


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path:'/', component:require('../pages/login.vue'), meta:{title:'登录'}},   
    {path:'/main', component:require('../pages/main.vue'), meta:{title:'首页'}},
    {path:'/personInfo', component:require('../pages/personInfo/list.vue'), meta:{title:'个人信息'}},
    {path:'/surveyList', component:require('../pages/survey/list.vue'), meta:{title:'调研问卷列表'}},
    {path:'/surveyListPic', component:require('../pages/survey/listPic.vue'), meta:{title:'调研问卷列表'}},
    {path:'/surveyOnline', component:require('../pages/survey/surveyOnline.vue'), meta:{title:'在线调研'}},

    {path:'/examOnline', component:require('../pages/exam/examOnline.vue'), meta:{title:'在线考试'}},
    {path:'/examList', component:require('../pages/exam/list.vue'), meta:{title:'课程列表'}},
    {path:'/examListNone', component:require('../pages/exam/listNone.vue'), meta:{title:'暂无课程列表'}},
    {path:'/examResult', component:require('../pages/exam/result.vue'), meta:{title:'考试结果'}},
    {path:'/paperInfo', component:require('../pages/exam/paperInfo.vue'), meta:{title:'考试课程信息'}},

    {path:'/signinList', component:require('../pages/signin/list.vue'), meta:{title:'在线签到'}},
    {path:'/signinLogin', component:require('../pages/signin/signin.vue'), meta:{title:'签到'}},
    {path:'/enrolList', component:require('../pages/enrol/list.vue'), meta:{title:'在线报名'}},
    {path:'/enrolEnorl', component:require('../pages/enrol/enrol.vue'), meta:{title:'在线报名'}},
    {path:'/enrolDetail', component:require('../pages/enrol/detail.vue'), meta:{title:'在线报名详情'}}

  ]
})

// http request 拦截器
// axios.interceptors.request.use(
//  config => {
//    if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
//      config.headers.Authorization = `token ${store.state.token}`;
//    }
//    return config;
//  },
//  err => {
//    return Promise.reject(err);
//  });
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          // store.commit(types.LOGOUT);
          router.replace({
            path: 'login',
            query: {redirect: router.currentRoute.fullPath}
          })
          // console.log("401 lelele");
         // window.location.href = 'https://testcas.zhiruyi.cn:8443/cas/login?service=http://localhost:8080/shiro-cas'
      }
    }
    return Promise.reject(error.response.data)   // 返回接口返回的错误信息
  })
/*router.beforeEach((to, from, next)=>{

  //var userJson = sessionStorage.user;
  //debugger;
//重新转换为对象
//  try {
//   // var currentUser = JSON.parse(userJson);
//  }catch (e){
//    console.log(e);
//  }

  if(router.app.$store.state.user.name){
    document.title = to.meta.title
    next()
  }else if(sessionStorage.user){
    document.title = to.meta.title
    next()
  }
  else {
    console.log("redirect login")
    if (to.path !== '/login') {
      next('/login')
    }else{
      next()
    }
  }
})*/
// 路由全局钩子
router.beforeEach((to, from, next)=>{
  router.app.$store.commit('setPageInf',{title:to.meta.title});
  //document.title = to.meta.title
  next()
})


export default router;
