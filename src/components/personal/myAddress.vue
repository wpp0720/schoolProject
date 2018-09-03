<template>
	<div class="myAddress">
		<div class="existAddress">
			
			
			
			
		</div>
		<div class="noAddress">
			<img :src="img"/>
		</div>

		<p>新增</p>
	</div>
</template>

<script>

export default {
	data () {
		return {
		    img:require('../../assets/img/noAddress.jpg'),

		}
	}
}

</script>

<style scoped>
.myAddress {
	width: 100%;
	height: 100%;
}
.myAddress .noAddress {
  width: 100%;
  height: 53%;
  background: #ECECEC;
  text-align:center;
  padding-top: 40%;
}
.myAddress .noAddress img {
	width: 20rem;
	height: 20rem;
}
.myAddress p {
	width: 100%;
	height: 6rem;
	background: #007AFF;
	color: #FFFFFF;
	font-size:2rem; 
	text-align: center;
	line-height: 6rem;
}

</style>
