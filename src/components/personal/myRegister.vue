<template>
	<div class="myRegister">
		<p class="loginTit">注册</p>
		<div class="regBox">
			<div class="regArea">
				<div class="telArea">
					<input type="tel" name=""  value="" placeholder="手机号"/>
					
				</div>
				
				<div class="codeArea">
					<input type="text" name=""  value="" />
					<img src="" alt="" />
					<span>换一张</span>
				</div>
				
				<div class="regBut">下一步</div>
			
			</div>
	
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.myRegister {
		width: 100%;
		height: 100%;
		background: #f5f5f5;
	}
	.myRegister .loginTit {
		width: 100%;
		height: 10rem;
		background: #FFFFFF;
		color: #007AFF;
		font-size:3.5rem; 
		text-align: center;
		line-height: 10rem;
		border: 1px solid #ccc;
	}
	.regBox {
		margin-top: 2rem;
		padding: 0 3%;
	}
	.myRegister .regArea {
		width: 94%;
		height: 25rem;
		border: 1px solid #ccc;
		margin: 0 auto;
		background: #fff;
		padding: 5% 3% 0;
	}
	.regArea input {
		border: none;
		outline: none;
		width: 100%;
		height: 100%;
		background: #f5f5f5;
	}
	.telArea {
		width: 96%;
		height: 6rem;
		line-height: 6rem;
		background: #f5f5f5;
		padding: 0 2%;
		margin-bottom: 1.5rem;
		border-radius: 0.5rem;
	}
	.codeArea input {
		width: 60%;
	}
	.codeArea{
		width: 96%;
		height: 6rem;
		line-height: 6rem;
		background: #f5f5f5;
		padding: 0 2%;
		margin-bottom: 1.5rem;
	}
	.regBut {
		width: 100%;
		height: 6rem;
		line-height: 6rem;
		background: #007AFF;
		margin-bottom: 1.5rem;
		font-size: 2.2rem;
		text-align: center;
		color: #fff;
	}
</style>