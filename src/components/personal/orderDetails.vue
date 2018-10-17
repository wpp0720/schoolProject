<template>
  <div class="orderDetail">
  	<div class="banner">
		<p>交易过期</p>
	</div>
    <div class="item">
    	<div class="top">
    		<div class="left">潮人部落</div>
    	</div>
    	<div class="middle">
    		<div class="left">
    			<img :src="defaultImg"/>
    		</div>
    		<div class="center">
    			<p>故事书2 DVD</p>
    			<p>￥15.00</p>
    		</div>
    		<div class="right">
    			<span>x1</span>
    		</div>
    	</div>
    	<div class="bottom">
    		<span>实际支付</span>
    		<span><strong>￥15</strong></span>
    		
    	</div>
    	
    	<mt-cell class="receipt" title="收货信息"></mt-cell>
    	<mt-cell title="使用学员:" value="张月隆"></mt-cell>
    	
    	<mt-cell class="order" title="订单信息"></mt-cell>
    	<mt-cell class="orderNumber" title="订单编号:" value="180918191919191991"></mt-cell>
    	<mt-cell title="下单信息:" value="2018-8-23 23:23:23"></mt-cell>
    	
    	<div class="close"><span>关闭订单</span></div>
    	
    </div>
  </div>
</template>
 
<script>
import { api } from "../../../static/js/request-api/request-api.js";
export default { 
  data() {
    return {
		defaultImg:require('../../assets/img/goodsPhoto.png'),
		datas: []
    };
  },
  mounted:function(){
	  this.getOrderDetailList();
  },
  methods:{
	getOrderDetailList:function() {
		let that = this;
		let params = {};
		params.order_id  = 53;
		api.
			refreshSaleOrderDetailList(params)
			.then(res => {
				if(res.status == 200){
					var data = res.data;
					console.log(data);
				}
			})
	}
  }
};
</script>
<style scoped>
.orderDetail {
	width:100%;
	height:100%;
	background-color: #dfe4e8;
}
.orderDetail .banner {
	background-image: url(../../assets/img/detail_top.png);
	width: 100%;
	height: 12rem;
	background-repeat: no-repeat;
	background-size: 100% 100%;
}
.orderDetail .banner p {
	color: #FFFFFF;
	padding-top: 5rem;
    margin-left: 2rem;
    font-size: 2rem;
}

.orderDetail .mint-tab-item-label {
	font-size: 1rem;
}
.item {
	margin-top: 0.5rem;
	
	font-size: 1rem;
}
.item .top,
.item .middle,
.item .bottom  {
	width: 100%;
	overflow: hidden;
	padding: 1rem 1rem;
	box-sizing: border-box;
	background-color: #FFFFFF;
}
.item .top .left {
	float: left;
}
.item .top .right {
	float: right;
}
.item .middle {
	position: relative;
	background-color: #f3f3f3;
}
.item .middle>div {
	float: left;
}
.item .middle .left {
	margin-right: -1rem;
}
.item .middle .left img {
	width: 80%;
}
.item .middle .center {
	
}
.item .middle .center p:nth-child(1) {
	font-size: 1.5rem;
	
}
.item .middle .center p:nth-child(2) {
	position: absolute;
	bottom: 1rem;
	
}
.item .middle .right {
	float: right;
}
.item .middle .right span {
	position: absolute;
	right: 1rem;
	bottom: 1rem;
}
.item .bottom {
	
}
.item .bottom span:nth-child(1) {
	margin-top: 0.5rem;
    display: inline-block;
}
.item .bottom span:nth-child(2) {
	float: right;
	color: red;
}
.item .close {
	margin-top: 1rem;
	margin-right: 1rem;
}
.item .close span {
	border: 1px solid #ccc;
	float: right;
	padding: 0.5rem 1rem;
    border-radius: 1.5rem;
    font-size: 1rem;
    background-color: #fff;
}
.receipt {
	margin-top: 1rem;
}

.order {
	margin-top: 1rem;
}
.orderNumber {
	
}
</style>
