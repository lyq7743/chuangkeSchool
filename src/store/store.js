import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
	//状态，想要存储的数据
	state: {
		 user:'',
		 pass:''
	},
	mutations: {
		setToken(state,use) { 
			state.user=use; 
			console.log(use)
		},
		setToken(state,pas) { 
			state.user=pas; 
			console.log(pas)
		}
	},
	
})