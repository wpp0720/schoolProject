<template>
	<div class="PersonalIndex">
		<div class="banner">
			<img :src="img"/>
			<p class="name">张跃栊</p>
			<p class="number">学员学号:<span>S12716</span></p>
		</div>
		<div class="tab">
			
			<div class="tab1">
				<img :src="img1"/>
				<p>订单</p>
			</div>
			
			<div class="tab2">
				<img :src="img2"/>
				<p>代付款</p>
			</div>
			<div class="tab3">
				<img :src="img3"/>
				<p>已付款</p>
			</div>
			<div class="tab4">
				<img :src="img4"/>
				<p>待评价</p>
			</div>
		</div>
		<div class="list">
			<mt-cell title="优惠券" to="" is-link value="">
				<img slot="icon" :src="icon1" width="24" height="24">
			</mt-cell>
			<mt-cell title="喜欢" to="" is-link value="">
				<img slot="icon" :src="icon2" width="24" height="24">
			</mt-cell>
			<mt-cell title="设置" to="" is-link value="">
				<img slot="icon" :src="icon3" width="24" height="24">
			</mt-cell>
		</div>
		
	</div>
</template>

<script>

export default {
	data () {
		return {
		    img:require('../../assets/img/photo.jpeg'),
		    img1:require('../../assets/img/1.1.png'),
		    img2:require('../../assets/img/1.2.png'),
		    img3:require('../../assets/img/1.3.png'),
		    img4:require('../../assets/img/1.4.png'),
		    icon1:require('../../assets/img/icon1.png'),
		    icon2:require('../../assets/img/icon1.png'),
		    icon3:require('../../assets/img/icon3.png'),
		}
	}
}
	
</script>

<style scoped>
.PersonalIndex {
	background-color: #eef2f5;
	width: 100%;
	min-height: 100%;
}
.PersonalIndex .banner {
	background-image: url(../../assets/img/banner.png);
	width: 100%;
	height: 18rem;
	background-repeat: no-repeat;
	background-size: 100% 100%;
}
.PersonalIndex .banner img {
	width: 20%;
	margin-left: 40%;
	margin-top: 2rem;
	border-radius: 50%;
}
.PersonalIndex .banner p {
	color: #FFFFFF;
	text-align: center;
}
.PersonalIndex .banner p.name {
	font-size: 2rem;
}
.PersonalIndex .banner p.number {
	font-size: 1rem;
}

.PersonalIndex .tab {
	width: 100%;
	height: 12rem;
	background-color: #FFFFFF;
	margin-bottom: 0.5rem;
}
.PersonalIndex .tab>div {
	width: 25%;
	height: 100%;
	float: left;
	text-align: center;
	color: #666666;
}
.PersonalIndex .tab>div img {
	margin-top: 2rem;
	margin-bottom: 1rem;
}
.PersonalIndex .tab>div p {
	font-size: 1.5rem;
}
.mint-cell:nth-child(1) {
	border-bottom: 1px solid #ececec;
}
.mint-cell:nth-child(3) {
	margin-top: 1rem;
}
</style>