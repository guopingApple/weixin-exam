import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//暂无内容，需要再加
const store = new Vuex.Store({
	state: {
		user: {},
    pubData:{},
    pageInf: {title:"主页"},
    // 放置初始状态 app启动的时候的全局的初始值
    bankInf: {"name":"我是vuex的第一个数据","id":100,"bankName":"中国银行"},
    auth:{}
	},
	actions: {

	},
	mutations: {/// 同步更新数据
    setPubData(state,pubData){
      state.pubData = pubData;
    },
    getPubData(state){
      return state.pubData;
    },

    setPageInf(state,pageInf){
      state.pageInf = pageInf;
    },
    getPageInf(state){
      return state.pageInf;
    },
		setUser(state,user){
			state.user = user;
		},
		getUser(state){
			return state.user;
		}
	}
})

export default store;
