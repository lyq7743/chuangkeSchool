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
		setUsername(state,use) { 
			state.user=use; 
//			console.log(use)
		},
		setPass(state,pas) { 
			state.pass=pas; 
//			console.log(pas)
		}
	},
	
})