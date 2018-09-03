<template>
	<div class="addSite">
		<div class="detailSite">
			<span class="spanSite">详细地址</span>
			<input type="text" />
		</div>
		<div class="consignee">
			<span>收货人</span>
			<input type="text" />
			
		</div>
		<div class="telNum">
			<span>手机号码</span>
			<input type="text" />
		</div>
		<p class="preserve">保存</p>
	
	
	
	
	
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
	.addSite {
		width: 100%;
		height: 100%;
		background: #EEF2F5;
	}
	.addSite div {
		background: #fff;
		border-top: 1px solid #ccc;
	}
	.addSite .detailSite {
		width: 100%;
		height: 10rem;
		padding-top: 1rem;
	}
	.addSite div{
		font-size: 2rem;
		padding: 0 1rem;
		color: #666666;
		height: 6rem;
		line-height: 6rem;
		overflow: hidden;
	}
	.addSite span {
		display: inline-block;
		width: 9rem;
	}
	.addSite .spanSite {
		display: block;
		height: 4rem;
		line-height: 4rem;
	}
	.addSite input {
		color: #000;
		height: 3rem;
		font-size: 2rem;
		border: none;
		outline: none;
		width: 78%;
	}
	.addSite .detailSite input{
		width: 96%;
	}
	.addSite .preserve {
		width: 100%;
		height: 6rem;
		background: #FFFFFF;
		color: #007AFF;
		font-size:2rem; 
		text-align: center;
		line-height: 6rem;
		margin-top: 2rem;
	}
</style>