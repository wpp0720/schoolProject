<template>
	<div class="myLogin">
		<p class="loginTit">登录</p>
		<div class="logBox">
			<div class="logArea">
				<div class="nameArea">
					<span>HH</span>
					<input type="text"  v-model="userName" placeholder="用户名"/>
					<div class="pat">@pat</div>
					
				</div>
				
				<div class="passwordArea">
					<span>HH</span>
					<input type="password" v-model="myPassword" placeholder="密码" />
					

				</div>
				
				<div class="logBut" @click="submitForm" v-bind:class="{ active: false}">登录</div>
				<div class="noRegister">
					您还没有注册?
					<router-link to="{name:myRegister}" tag="a">注册</router-link>
				</div>
			</div>
	
		</div>
        <div class="errorMes">用户名或密码错误</div>
		
	</div>
</template>

<script type="text/ecmascript-6">
	import {api} from  '../../../static/js/request-api/request-api.js';
	export default {
		data () {
			return {
                userName:"",
                myPassword:'',
                register:'',
                active:false,
                myRegister:''
			}
		},
        created(){

        },
        mounted:function () {
            this.register=this.$route.query.myRegister
            console.log(this.register)
        },
        methods:{
            submitForm:function () {
				let loginData = new URLSearchParams();
				let returnUrl = window.location.href;
                loginData.append('username',this.userName)
                loginData.append('password',this.myPassword)
                console.log(loginData);
                api.submitLogin(loginData)
					.then(res=>{
                        console.log(res);
                        if(res.code == 1){
//                          this.$router.push({path: "/index", query: {returnUrl: returnUrl}});
							this.$router.push({path: "/myOrder"});

                            this.active = true;
						}else if(res.code == 0){

                        }
				},()=>{
					alert('登录失败');
				});
            }
		}
	}
</script>

<style scoped>
	.myLogin {
		width: 100%;
		height: 100%;
		background: #f5f5f5;
	}
	.myLogin .loginTit {
		width: 100%;
		height: 7rem;
		background: #FFFFFF;
		color: #007AFF;
		font-size: 3rem;
		text-align: center;
		line-height: 7rem;
		border: 1px solid #ccc;
	}
	.logBox {
		margin-top: 2rem;
		padding: 0 3%;
	}
	.myLogin .logArea {
		width: 94%;
		height: 30rem;
		border: 1px solid #ccc;
		margin: 0 auto;
		background: #fff;
		padding: 5% 3% 0;
	}
	.logArea input {
		width: 92%;
		height: 100%;
		border: none;
		outline: none;
		background: #f5f5f5;
	}
	.nameArea span ,.logArea span {
		float: left;
	}
	.nameArea input ,.logArea input{
		float: left;
	}
	.nameArea input {
		width: 80%;
		border-right: 1px solid #000;
	}
	.nameArea .pat{
		float: right;
	}
	.nameArea {
		width: 96%;
		height: 3rem;
		line-height: 3rem;
		background: #f5f5f5;
		padding: 0.6rem 2%;
		margin-bottom: 1.5rem;
		border-radius: 0.5rem;
	}
	.passwordArea{
		width: 96%;
		height: 3rem;
		line-height: 3rem;
		background: #f5f5f5;
		padding: 0.6rem 2%;
		margin-bottom: 1.5rem;
	}
	.logBut {
		width: 100%;
		height: 5rem;
		line-height: 5rem;
		background: #999;
		margin-bottom: 1.5rem;
		border-radius: 3rem;
		font-size: 2.2rem;
		text-align: center;
		color: #fff;
	}
	.noRegister {
		font-size: 2rem;
		color: #007AFF;
		text-align: center;
	}
	.active {
		color: #007AFF;
	}
	
</style>