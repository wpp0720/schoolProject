<template>
	<div class="modifyPass">
		<div class="oldPass">
			<input type="password" placeholder="请输入旧密码" v-model.trim="formData[0].oripassword" maxlength="20"/>
		</div>
		
		<div class="newPass">
			<input type="password" placeholder="请输入6位数以上的新密码" v-model.trim="formData[1].password" maxlength="20" @blur="regPasswordReg"/>
			
		</div>
		<div class="newPassMore">
			<input type="password" placeholder="请重新输入新密码" v-model.trim="formData[2].rePassword" maxlength="20" @change="rePasswordReg"/>
			
		</div>
		
		<p @click="rePasswordReg()">确定</p>
		
	</div>
</template>

<script>
	import {api} from  '../../../static/js/request-api/request-api.js';
	import { Toast } from 'mint-ui';
	export default {
		data () {
			return {
				repasswordWarn:false,
				formData:[
					{oripassword:''},
					{password:''},
		      {rePassword:''}
				],	
			}
		},
		methods:{
			 resetPassword:function () {
					let _self = this;
					let loginData = new URLSearchParams();
        	loginData.append('oldPassword',this.formData[0].oripassword)
					loginData.append('newPassword',this.formData[2].rePassword)
        	api.resetPassword(loginData)
					.then(res=>{
							if(res.code == 1){
								// 修改成功
							}else if(res.code == 0){
								// alert('用户名或密码错误');
								let instance = Toast('原始密码不正确');
								setTimeout(() => {
									instance.close();
								}, 1500);
						}
					},()=>{					});
      },
			//密码校验
			regPasswordReg:function (){
				if(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(this.formData[0].password)){

				}else{
					// let instance = Toast('新密码不能少于6个字符');
					// setTimeout(() => {
					// 	instance.close();
					// }, 1500);
				}
			},
			//验证两次密码一致
			rePasswordReg:function (){
				if(this.formData[1].password==this.formData[2].rePassword){
					this.resetPassword();

				}else {
					let instance = Toast('您输入的两次密码不相同，请重新输入');
					setTimeout(() => {
						instance.close();
					}, 1500);
				}
			},
		}
	}
</script>

<style scoped>
	.modifyPass {
		width: 100%;
		height: 100%;
		background: #fff;
		overflow: hidden;
	}
	.modifyPass div {
		width: 92%;
		height: 6rem;
		line-height: 6rem;
		background: #f5f5f5;
		margin: 4% 4% 0;
		margin-bottom: 1.5rem;
		border-radius: 0.5rem;
	}
	.modifyPass input {
		height: 4rem;
		line-height: 4rem;
		border: none;
		outline: none;
		width: 100%;
		background: #f5f5f5;
	}
	.modifyPass p {
		height: 6rem;
		line-height: 6rem;
		background: #CCCCCC;
		color: #FFFFFF;	
		margin: 6% 4% 0;
		text-align: center;
		font-size: 2rem;
		width: 92%;
		border-radius: 0.5rem;
	}
	.pass-warn {
		color: #f83c3c;
	    font-size: 10px;
	    height: 12px;
	    line-height: 12px;
	}
</style>