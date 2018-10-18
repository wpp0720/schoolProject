<template>
  <div class="orderDetail">
  	<div class="banner">
		<p>交易过期</p>
	</div>
    <div class="item">
    	<div class="top">
    		<div class="left">{{dataMessage.campusName}}</div>
    	</div>
    	<div class="middle" v-for="data in dataArrs">
    		<div class="left">
    			<img :src="defaultImg"/>
    		</div>
    		<div class="center">
    			<p>{{data.productName}}</p>
    			<p>￥{{data.realMoney}}</p>
    		</div>
    		<div class="right">
    			<span>x{{data.productCount}}</span>
    		</div>
    	</div>
    	<div class="bottom">
    		<span>实际支付</span>
    		<span><strong>￥{{dataMessage.realMoney}}</strong></span>
    		
    	</div>
    	
    	<mt-cell class="receipt" title="收货信息"></mt-cell>
    	<mt-cell title="使用学员:" >{{dataMessage.studentName}}</mt-cell>
    	
    	<mt-cell class="order" title="订单信息"></mt-cell>
    	<mt-cell class="orderNumber" title="订单编号:" value="">{{dataMessage.code}}</mt-cell>
    	<mt-cell title="下单信息:" value="">{{dataMessage.createTime}}</mt-cell>
    	
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
		pageId : 0,
		dataMessage:{},
		dataArrs: []
    };
  },
  mounted:function(){
	let currentUrl = window.location.href; //获取当前链接
	let arr = currentUrl.split("?");//分割域名和参数界限
	if (arr.length > 1) {
		this.pageId = arr[1].slice(3,arr[1].length);
	}
	this.getOrderDetailList();
	this.getProductImpage();
	this.getOrderListAndDetailList();
  },
  methods:{
	  //获取商品图片接口----暂无数据
	getProductImpage: function() {
      let that = this;
      let params = {};
      params.page = 1;
	  params.rows = 5;
	  params.product_id = that.pageId;

      api.refreshProductImpage(params).then(res => {
        if (res.status == 200) {
          var data = res.data;
          //console.log(data);
        }
      });
	},
	//获取订单明细接口
	getOrderDetailList:function() {
		let that = this;
		let params = {};
		params.order_id = that.pageId;

		api.
			refreshSaleOrderDetailList(params)
			.then(res => {
				if(res.status == 200){
					var data = res.data.data.rows;
					that.dataArrs = data;
				}
			})
	},
	//获取订单列表和详细信息
	getOrderListAndDetailList: function() {
      let that = this;
      let params = {};
      params.page = 1;
      params.row = 5;

      api
        .refreshSaleOrderAndDetailList(params)
        .then(res => {
          if (res.status == 200) {
            var data = res.data.data.rows;
			data.forEach(element => {
				if(element.id == that.pageId){
					that.dataMessage = element;
				}
			});
			console.log(that.dataMessage);
            
          }
        })
        .catch(error => {});
    },
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
