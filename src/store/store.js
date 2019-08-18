import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
	//状态，想要存储的数据
	state: {
		 user:'',
		 userStatus:false,
		 signature:'',
		 occupation:''
	},
	mutations: {
		setName(state,name){
			var vUser=JSON.parse(localStorage.getItem("accout"))
			vUser.name=name
			localStorage.setItem("accout",JSON.stringify(vUser))
			this.commit("getAccount")
		},
		getsignature(state){
			var vUser=JSON.parse(localStorage.getItem("accout"))
			state.signature=vUser.signature
		},
		setsignature(state,signature){
			var vUser=JSON.parse(localStorage.getItem("accout"))
			vUser.signature=signature
			localStorage.setItem("accout",JSON.stringify(vUser))
			this.commit("getAccount")
			console.log(state.signature)
		},
		getoccupation(state){
			var vUser=JSON.parse(localStorage.getItem("accout"))
			state.occupation=vUser.occupation
		},
		setoccupation(state,occupation){
			var vUser=JSON.parse(localStorage.getItem("accout"))
			vUser.occupation=occupation
			localStorage.setItem("accout",JSON.stringify(vUser))
			this.commit("getAccount")
			console.log(state.occupation)
		},
		addAccount(state,account){
			// 设置用户
			console.log(account)
			localStorage.setItem("accout",JSON.stringify(account))
		},
		loginAccount(state,account){
			var vUser=JSON.parse(localStorage.getItem("accout"))
			if(vUser.user==account.user&&vUser.pass==account.pass){
				if(vUser.name!=""){
					state.user=vUser.name
				}else{
					state.user=vUser.user
				}
				state.userStatus=true
			}
		},
		getAccount(state){
			if(localStorage.getItem("accout")!=null&&state.user!=""){
				var vUser=JSON.parse(localStorage.getItem("accout"))
				if(vUser.name!=""&&vUser.user!=""){
					state.user=vUser.name
				}else{
					state.user=vUser.user
				}
			}else{
				state.user=""
			}
			
		},
		outAccount(state){
			state.user=""
			state.userStatus=false
			this.commit("getAccount")
		}
		
	}
	
})