<template>
	<div class="setting">
		<div class="list">
			<mt-cell title="" to="" is-link value="更换头像">
				<img slot="icon" :src="img" width="24" height="24">
			</mt-cell>
			<mt-cell title="学员姓名" to="" value="张月隆"></mt-cell>
			<mt-cell title="手机号码" to="" value="1212121212"></mt-cell>
			<mt-cell title="在读年纪" to="" value="大班"></mt-cell>
			
			<!--<mt-cell title="收货地址" to="" is-link value=""></mt-cell>-->
			<mt-cell title="修改密码" to="" is-link value=""></mt-cell>
			
			<div class="quit" @click="loginOut()">退出登录</div>
		</div>
		
	</div>
</template>

<script>
import {api} from  '../../../static/js/request-api/request-api.js';
export default {
	data () {
		return {
		    img:require('../../assets/img/photo.jpeg'),
		}
	},
	 methods:{
		submitForm:function () {
			let _self = this;
			api.loginOut(loginData)
					.then(res=>{
						if(res.code == 1){
							_self.$router.push({path: "/index"});
						}
					},()=>{
				alert('退出登录失败');
			});

		}
	 }
}
	
</script>

<style scoped>
.setting {
	background-color: #eef2f5;
	width: 100%;
	min-height: 100%;
}

.mint-cell {
	border-bottom: 1px solid #ececec;
	
}
.mint-cell:nth-child(1) {
	padding: 1rem;
}
.mint-cell:nth-child(2) {
	margin-top: 1rem;
}
.mint-cell:nth-child(5) {
	margin-top: 1rem;
}
.mint-cell img {
	border-radius: 50%;
    width: 8rem;
    height: 8rem;
}
.quit {
	margin-top: 1rem;
	background-color: #FFFFFF;
	text-align: center;
	padding: 2rem 0;
	color: blue;
	font-size: 2rem;
}
</style>