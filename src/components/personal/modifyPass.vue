<template>
	<div class="modifyPass">
		<div class="oldPass">
			<input type="password" placeholder="请输入旧密码" maxlength="20"/>
		</div>
		
		<div class="newPass">
			<input type="password" placeholder="请输入6位数以上的新密码" v-model.trim="formData[0].password" maxlength="20" @blur="regPasswordReg"/>
			
		</div>
		<div class="newPassMore">
			<input type="password" placeholder="请重新输入新密码" v-model.trim="formData[1].rePassword" maxlength="20" @change="rePasswordReg"/>
			
		</div>
		
		<div class="pass-warn" v-show="passwordBarText">
	      	密码为6-20位字母加数字
	    </div>
	    
		<div class="repassword-warn" v-show="repasswordWarn">
      		两次输入的密码不一样
    	</div>
		
		<p>确定</p>
		
	</div>
</template>

<script>
	export default {
		data () {
			return {
				repasswordWarn:false,
				formData:[
					{
		              password:''
		            },
		            {
		              rePassword:''
		            }
				],
				passwordBarText:false,
	
			}
		},
		methods:{
			//密码校验
	        regPasswordReg(){
	          if(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(this.formData[0].password)){
	            this.passwordBarText = false;

	          }else{
	            this.passwordBarText = true;

	          }
	        },
	        //验证两次密码一致
	        rePasswordReg(){
	          if(this.formData[0].password==this.formData[1].rePassword){
	            this.repasswordWarn = false;
	            this.passwordBarText = false;
	          }else {
	            this.repasswordWarn = true;
	            this.passwordBarText = true;
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