<template>
  <div class="page-navbar">
    <!-- navbar -->
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">全部</mt-tab-item>
      <mt-tab-item id="2">待付款</mt-tab-item>
      <mt-tab-item id="3">已付款</mt-tab-item>
			<mt-tab-item id="4">待评价</mt-tab-item>
    </mt-navbar> 
	<!-- tabcontainer -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">

        
				<div class="item">
					<router-link to="/orderDetails">
        	<div class="top">
        		<div class="left">潮人部落</div>
        		<div  class="right">交易过期</div>
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
					</router-link>
        	<div class="bottom">
        		<span>共1件商品</span>
        		<span>合计：<strong>￥15</strong></span>
        		<span>关闭订单</span>
        	</div>
        </div>
				

        <div class="item">
        	<div class="top">
        		<div class="left">潮人部落</div>
        		<div  class="right">交易过期</div>
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
        		<span>共1件商品</span>
        		<span>合计：<strong>￥15</strong></span>
        		<span>关闭订单</span>
        	</div>
        </div>
        <div class="item">
        	<div class="top">
        		<div class="left">潮人部落</div>
        		<div  class="right">交易过期</div>
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
        		<span>共1件商品</span>
        		<span>合计：<strong>￥15</strong></span>
        		<span>关闭订单</span>
        	</div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="default">
					<img :src="img"/>
					<p>您的订单空空如也~</p>
				</div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div class="default">
					<img :src="img"/>
					<p>您的订单空空如也~</p>
				</div>
      </mt-tab-container-item>
			<mt-tab-container-item id="4">
        <div class="default">
					<img :src="img"/>
					<p>您的订单空空如也~</p>
				</div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
 
<script>
    import {api} from  '../../../static/js/request-api/request-api.js';
	export default {
		data() {
			return {
			  selected: '1',
					img:require('../../assets/img/payment.png'),
					defaultImg:require('../../assets/img/goodsPhoto.png')
			};
		},
		mounted:function () {
			this.getCouponList();
//			this.getOrderList();
		},
        methods:{
            getCouponList: function() {
                let params = {};
                params.page=1;
                params.row=5;

                api.refreshCouponList(params)
                    .then(res => {
                        if (res.status == 200) {
                            console.log(res.data);

                        }
                    })
                    .catch(error => {

                    });
            },
            getOrderList: function() {
                let params = {};
                params.page=1;
                params.row=5;

                api.refreshSaleOrderList(params)
                    .then(res => {
                        if (res.status == 200) {
                            console.log(res.data);

                        }
                    })
                    .catch(error => {

                    });
            }
		}
	};
</script>
<style scoped>
.page-navbar {
	width:100%;
	height:100%;
	background-color: #dfe4e8;
}
.page-navbar .mint-tab-item-label {
	font-size: 1rem;
}
.item {
	margin-top: 0.5rem;
	background-color: #FFFFFF;
	font-size: 1rem;
}
.item .top,
.item .middle,
.item .bottom  {
	width: 100%;
	overflow: hidden;
	border-bottom: 1px solid #ccc;
	padding: 1rem 1rem;
	box-sizing: border-box;
}
.item .top .left {
	float: left;
}
.item .top .right {
	float: right;
}
.item .middle {
	position: relative;
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
	padding-right: 1rem;
	margin-top: 0.5rem;
    display: inline-block;
}
.item .bottom span:nth-child(3) {
	border: 1px solid #ccc;
	float: right;
	padding: 0.5rem 1rem;
    border-radius: 1.5rem;
    font-size: 1rem;
}
.page-navbar .default {
	text-align: center;
	margin-top: 12rem;
}
.page-navbar .default p{
	font-size: 1.5rem;
    color: #7993ad;
    margin-top: 2rem;
}
</style>