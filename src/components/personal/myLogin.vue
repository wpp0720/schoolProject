<template>
	<div class="myLogin">
		<p class="loginTit">登录</p>
		<div class="logBox">
			<div class="logArea">
				<div class="nameArea">
					<span>HH</span>
					<input type="text" />
					
				</div>
				
				<div class="passwordArea">
					<span>HH</span>
					<input type="password" name="" id="" value="" />
					
					
				</div>
				
				<div class="logBut">登录</div>
				<div class="noRegister">
					您还没有注册? <a href="javascript:;">注册</a>
				</div>
			</div>
	
		</div>
		
	</div>
</template>

<script>
	export default {
		data () {
			return {
	
	
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
		height: 10rem;
		background: #FFFFFF;
		color: #007AFF;
		font-size:3.5rem; 
		text-align: center;
		line-height: 10rem;
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
		width: 94%;
		height: 100%;
		border: none;
		outline: none;
		background: #f5f5f5;
	}
	.nameArea {
		width: 96%;
		height: 6rem;
		line-height: 6rem;
		background: #f5f5f5;
		padding: 0 2%;
		margin-bottom: 1.5rem;
		border-radius: 0.5rem;
	}
	.passwordArea{
		width: 96%;
		height: 6rem;
		line-height: 6rem;
		background: #f5f5f5;
		padding: 0 2%;
		margin-bottom: 1.5rem;
	}
	.logBut {
		width: 100%;
		height: 6rem;
		line-height: 6rem;
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
	
</style>