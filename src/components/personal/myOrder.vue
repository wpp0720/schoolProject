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
      <!-- 全部 -->
      <mt-tab-container-item id="1">
		<div class="item" v-for="data in datas"  v-if="datas.length>0">
      <router-link :to="{path:'/orderDetails',query: {id: data.id}}">
        	<div class="top">
        		<div class="left">{{data.campusName}}</div>
        		<div  class="right">交易过期</div>
        	</div>
        	<div class="middle" v-for="item in data.orderDetail">
        		<div class="left">
        			<img :src="defaultImg"/>
        		</div>
        		<div class="center">
        			<p>{{item.productName}}</p>
        			<p>￥{{item.realMoney}}</p>
        		</div>
        		<div class="right">
        			<span>x{{item.productCount}}</span>
        		</div>
        	</div>
			</router-link>
        	<div class="bottom">
        		<span>共{{data.totalProductCount}}件商品</span>
        		<span>合计：<strong>￥{{data.realMoney}}</strong></span>
        		<span @click="removeOrder()">关闭订单</span>
        	</div>
      </div>
      <div class="default" v-if="datas.length==0" >
					<img :src="img"/>
					<p>您的订单空空如也~</p>
				</div>

      </mt-tab-container-item>


      <!-- 代付款 -->
      <mt-tab-container-item id="2">
        <div class="item" v-for="data in unpaid"  v-if="unpaid.length>0">
      <router-link :to="{path:'/orderDetails',query: {id: data.id}}">
        	<div class="top">
        		<div class="left">{{data.campusName}}</div>
        		<div  class="right">交易过期</div>
        	</div>
        	<div class="middle" v-for="item in data.orderDetail">
        		<div class="left">
        			<img :src="defaultImg"/>
        		</div>
        		<div class="center">
        			<p>{{item.productName}}</p>
        			<p>￥{{item.realMoney}}</p>
        		</div>
        		<div class="right">
        			<span>x{{item.productCount}}</span>
        		</div>
        	</div>
			</router-link>
        	<div class="bottom">
        		<span>共{{data.totalProductCount}}件商品</span>
        		<span>合计：<strong>￥{{data.realMoney}}</strong></span>
        		<span @click="removeOrder()">关闭订单</span>
        	</div>
      </div>
        <div class="default" v-if="unpaid.length==0" >
					<img :src="img"/>
					<p>您的订单空空如也~</p>
				</div>
      </mt-tab-container-item>

      <!-- 已付款 -->
      <mt-tab-container-item id="3">
        <div class="item" v-for="data in alreadyPaid"  v-if="alreadyPaid.length>0">
      <router-link :to="{path:'/orderDetails',query: {id: data.id}}">
        	<div class="top">
        		<div class="left">{{data.campusName}}</div>
        		<div  class="right">交易过期</div>
        	</div>
        	<div class="middle" v-for="item in data.orderDetail">
        		<div class="left">
        			<img :src="defaultImg"/>
        		</div>
        		<div class="center">
        			<p>{{item.productName}}</p>
        			<p>￥{{item.realMoney}}</p>
        		</div>
        		<div class="right">
        			<span>x{{item.productCount}}</span>
        		</div>
        	</div>
			</router-link>
        	<div class="bottom">
        		<span>共{{data.totalProductCount}}件商品</span>
        		<span>合计：<strong>￥{{data.realMoney}}</strong></span>
        		<span @click="removeOrder()">关闭订单</span>
        	</div>
      </div>
        <div class="default" v-if="alreadyPaid.length==0" >
					<img :src="img"/>
					<p>您的订单空空如也~</p>
				</div>
      </mt-tab-container-item>

       <!-- 待评价 -->
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
import { api } from "../../../static/js/request-api/request-api.js";
export default {
  data() {
    return {
      selected: "1",
      img: require("../../assets/img/payment.png"),
      defaultImg: require("../../assets/img/goodsPhoto.png"),
      datas: [],
      alreadyPaid: [],
      unpaid:[]
    };
  },
  mounted: function() {
    this.getOrderListAndDetailList();
    this.getProductImpage();
  },
  methods: {
    //refreshProductImpage
    getProductImpage: function() {
      let that = this;
      let params = {};
      params.page = 1;
      params.product_id = 53;
      params.rows = 5;

      api.refreshProductImpage(params).then(res => {
        if (res.status == 200) {
          var data = res.data;
          //console.log(data);
        }
      });
    },
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
            //console.log(data.length);
            data.forEach(element => {
              if (element.orderDetail.length > 1) {
                that.datas.push(element);
              }
              //payStateId 支付状态 1：未支付，2：部分支付，3：已支付
              if (element.payStateId == 3 && element.orderDetail.length > 1) {
                that.alreadyPaid.push(element);
              }
              if (element.payStateId == 1 && element.orderDetail.length > 1) {
                that.unpaid.push(element);
              }
            });
            /*for(var i=0;i<data.length;i++){
              if(data[i].orderDetail.length>1){
                  that.datas.push(data[i]);
              }
            }*/
            //console.log(that.unpaid);
          }
        })
        .catch(error => {});
    },
    removeOrder: function() {
      let params = {};
      params.orderid = 40;
      api
        .cancelSaleOrder(params)
        .then(res => {
          if (res.status == 200) {
            //console.log(res.data);
            //this.datas = res.data.data;
            //console.log(this.datas);
          }
        })
        .catch(error => {});
    }
  }
};
</script>
<style scoped>
.page-navbar {
  width: 100%;
  height: 100%;
  background-color: #dfe4e8;
}
.page-navbar .mint-tab-item-label {
  font-size: 1rem;
}
.mint-tab-container {
  background-color: #dfe4e8;
}
.item {
  margin-top: 0.5rem;
  background-color: #ffffff;
  font-size: 1rem;
}
.item .top,
.item .middle,
.item .bottom {
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
.item .middle > div {
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
.page-navbar .default p {
  font-size: 1.5rem;
  color: #7993ad;
  margin-top: 2rem;
}
.page-part .mint-tab-item-label {
  font-size: 1.2rem !important;
}
</style>