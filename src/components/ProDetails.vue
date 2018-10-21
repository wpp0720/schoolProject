<template>
  <div class="pages">

    <mt-navbar v-model="selected">
      <mt-tab-item id="1">商品</mt-tab-item>
      <mt-tab-item id="2">评价</mt-tab-item>
      <mt-tab-item id="3">提问</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1" ref="pro" class="details">
        <div class="scroll-area">
          <div class="heard">
            <div class="heard-banner">
              <div class="slider banner">
                <div class="slider-group" style="width: 750px;"><a class="banner-item slider-item"
                                                              style="background-image: url(&quot;//cdn01.xiaogj.com/file/mall/default/goods.png&quot;); width: 750px;"></a>
                </div>
                <div class="dots"></div>
              </div>
            </div>
          </div>
          <div class="title">
            <div class="class-name">{{productObj.productName}}</div>
            <div class="descrite"></div>
            <div class="price-bar"><span>¥{{productObj.salePrice}}</span>
            </div>
            <div class="old-price">
              价格<span class="priceold">¥{{productObj.purchasePrice}}</span></div>
          </div> <!---->
          <div class="seat">
            <span  class="seat-title">商品规格</span>
            <div class="seat-box"><span  class="seat-content"></span>
              <svg aria-hidden="true" class="icon icon-color">
                <use xlink:href="#icon-next"></use>
              </svg>
            </div>
          </div> <!---->

          <div class="void"></div> <!----> 
          <div class="seat">
            <span  class="seat-title">评价({{productCommentList.length}})</span>
            <!-- <div class="seat-box"><span  class="seat-content"></span>
                  <div class="add-question" v-on:click="gotoComment"><span></span>去评价</div>
            </div> -->
          </div>
          <div class="commnet-list" v-for="(productComment,index) in productCommentList"  :key="index">
              <span>{{productComment.askContent}}</span>
          </div>
           <!---->
            <div class="void"></div> <!----> 
          <div class="seat">
            <span  class="seat-title">提问({{productAskList.length}})</span>
            <div class="seat-box"><span  class="seat-content"></span>
              <div class="add-question" v-on:click="gotoAsk"><span></span>去提问</div>
            </div>
          </div> <!---->
           <div class="commnet-list" v-for="(productAsk,index) in productAskList"  :key="index">
              <div><span style="font-weight:800">问：</span><span>{{productAsk.askContent}}</span></div>
              <div style="margin-top:20px;"><span style="font-weight:800">答：</span><span>{{productAsk.replyContent}}</span></div>
          </div>
          
          </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2" class="details">
        <div class="goods-evaluate">
          <div class="empty-box">
            <div class="empty-img"></div>
            <div class="empty-tips">快来做第一个评论的人吧～</div>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3"  class="details">
        <div class="goods-evaluate">
          <div class="empty-box">
            <div class="empty-img"></div>
            <div class="empty-tips">快来做第一个提问的人吧～</div>
          </div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
    <div class="bottom">
      <div class="shop-car"  @click="shopppingCartList()">
        <div class="circle">{{shoppingcartcount}}</div>
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#icon-gouwuche1"></use>
        </svg>
      </div>
      <div class="collect" v-if="false" v-on:click="addProductLove()">
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#icon-xihuan1"></use>
        </svg>
      </div>
       <div class="collect-like" v-on:click="deleteProductLove()">
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#icon-xihuan1"></use>
        </svg>
      </div>
      <div class="click-wrapper" >
        <div class="sign-up" v-show="ask" @click="addProductToCart()" >
          加入购物车
        </div>

            <div class="join-car">
              <div   v-on:click="nowPay" >立即购买</div>
            </div>

      </div>
    </div>
      <attentionSuccess v-if="showAttentionAlert" v-bind:attentionText="attentionText"  style="z-index:600;"></attentionSuccess>
  </div>
</template>

<script>
  import { api } from "../../static/js/request-api/request-api.js";
  import attentionSuccess from "@/components/assets/alertSuccess";
  import Vue from "vue";
  import {Navbar, TabItem} from 'mint-ui';
  import BScroll from 'better-scroll';
  import Router from "vue-router";
  import shopData from "./shopData.json";
  // import {proDetailApi} from '../service/api';
  import { MessageBox } from 'mint-ui';
  import { Toast } from 'mint-ui';
  Vue.component(Navbar.name, Navbar);
  Vue.component(TabItem.name, TabItem);
  export default {
    name: "ProDetails",
    components:{
      attentionSuccess
    },
    data: function () {
      return {
        selected: "1",
        shopData: shopData,
        productObj:{},
        ask:true,
        showAttentionAlert:false,
        attentionText:"加入购物车成功",
        productCommentList:[],
        productAskList:[],
        shoppingcartcount:0//购物车数量
      };


    },
    watch:{
      selected(){
        if(this.selected=="3"){
          this.ask=false;
        }else{
          this.ask=true;
        }
      }
    },
    mounted() {
       this.getProductDetail();
       //获取购物车列表
       this.refreshShoppingCartList();
       this.getProductComment();
       this.getProductAsk();
    },
    created() {
      // 初始化 better-scroll 必须要等 dom 加载完毕
      // setTimeout(() => {
      //   this._initSrcoll()
      // }, 1000)
    },
    methods: {
      // _initSrcoll() {
      //   this.scroll = new BScroll(this.$refs.pro.$el, {
      //     // 获取 scroll 事件，用来监听。
      //     probeType: 3,
      //     click: true
      //   })
      // },
      //购物车列表
    shopppingCartList:function(){
          this.$router.push({path: "/shopCart"});
    },
    // gotoComment:function(){
    //        let id=this.$route.query.id;
    //        let productName=this.productObj.productName;
    //        this.$router.push({path: "/addComment",query: {id: id}});
    // },
    gotoAsk:function(){
           let id=this.$route.query.id;
           let productName=this.productObj.productName;
           this.$router.push({path: "/addAsk", query: {id: id,productName:productName}});
    },
    //立即购买
    nowPay:function(){
        let orderIdArray=[];
        let joinAuctionKey = "add_order";
        let _self = this;
        let orderObj={};
        orderObj.count=1;
        orderObj.createTime=_self.productObj.createTime;
        orderObj.guid=_self.productObj.guid;
        orderObj.id=_self.productObj.id;
        orderObj.price=_self.productObj.salePrice;
        orderObj.productCode=_self.productObj.productCode;
        orderObj.productId=_self.productObj.productId;
        orderObj.productName=_self.productObj.productName;
        orderIdArray.push(orderObj);
        console.log(orderObj);
        localStorage.setItem(joinAuctionKey, JSON.stringify(orderIdArray));
        this.$router.push({path: "/fillOrder"});
    },
    //获取商品评价
    getProductComment: function() {
      let params ={};
      let _self = this;
      params.product_id=_self.$route.query.id;;
      api.getProductComment(params)
        .then(res => {
          if (res.status == 200) {
             let code=res.data.code;
             if(code==1){
               let result=res.data.data;
                _self.productCommentList=result;
             }
          } else {
            let params = { msg: "获取商品明细错误" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取商品明细错误" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
    //获取商品提问
    getProductAsk: function() {
      let params ={};
      let _self = this;
      params.product_id=_self.$route.query.id;;
      api.getProductAsk(params)
        .then(res => {
          if (res.status == 200) {
             let code=res.data.code;
             if(code==1){
               let result=res.data.data;
               _self.productAskList=result;
             }
          } else {
            let params = { msg: "获取商品明细错误" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取商品明细错误" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
    //获取商品明细
    getProductDetail: function() {
      let params ={};
      let _self = this;
      params.product_id=_self.$route.query.id;;
      api.getProductDetail(params)
        .then(res => {
          if (res.status == 200) {
             let code=res.data.code;
             if(code==1){
               let result=res.data.data;
               _self.productObj=result;
             }
          } else {
            let params = { msg: "获取商品明细错误" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取商品明细错误" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
    //获取购物车列表
      refreshShoppingCartList: function() {
      let params ={};
      let _self = this;
      api.refreshShoppingCartList(null)
        .then(res => {
          if (res.status == 200) {
              let code=res.data.code;
              if(code==1){
                 let shoppingList=res.data.data;
                 if(shoppingList&&shoppingList.length>0){
                   _self.shoppingcartcount=shoppingList.length;
                 }
              }
          } else {
            let params = { msg: "获取购物车列表错误" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取购物车列表错误" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
    //增加商品喜欢
    addProductLove: function() {
      let _self = this;
      let data = new URLSearchParams();
      data.append('product_id',_self.$route.query.id);
      api.addProductLove(data)
        .then(res => {
            let code=res.code;
            if (code == 1) {
            // _self.shoppingcartcount=_self.shoppingcartcount+1;
        
          } else {
            let params = { msg: "加入购物车错误" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "加入购物车错误" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
    //删除商品喜欢
    deleteProductLove: function() {
      let _self = this;
      let data = new URLSearchParams();
      data.append('product_id',_self.$route.query.id);
      api.deleteProductLove(data)
        .then(res => {
            let code=res.code;
          if (code == 1) {
            // _self.shoppingcartcount=_self.shoppingcartcount+1;
        
          } else {
            let params = { msg: "加入购物车错误" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "加入购物车错误" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
    //购物车增加
    addProductToCart: function() {
      let _self = this;
      let data = new URLSearchParams();
      data.append('product_id',_self.$route.query.id);
      api.addProductToCart(data)
        .then(res => {
            let code=res.code;
          if (code == 1) {
            _self.shoppingcartcount=_self.shoppingcartcount+1;
        
          } else {
            let params = { msg: "加入购物车错误" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "加入购物车错误" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
     }
    }

  }

</script>
<style scoped>
.seat .add-question{
 width: 200px;
 height: 60px;
 border-radius: 30px;
 color: #1e88f5;
 border: 1px solid #1e88f5;
 background-color: #E0EEEE;
 text-align: center;
 line-height: 60px;
 float: right;
}
.commnet-list{
  width: 710px;
  padding-left: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
  padding-right: 20px;
  border-bottom: 1px solid #eef1f6;
}
</style>
<style lang="less" scoped>
  .mint-tab-item.is-selected {
    .mint-tab-item-label {
      border-bottom: 2px solid #1e88f5;
      color: #26a2ff;
    }
  }

  .mint-tab-item .mint-tab-item-label {
    color: inherit;
    font-size: 28px;
    line-height: 88px;
    padding: 0px 20px;
  }

  .mint-navbar .mint-tab-item {
    padding: 0px;
  }

  .mint-tab-container {
    position: absolute;
    top: 88px;
    right: 0;
    left: 0;
    bottom: 99px;
    overflow: auto;
    .mint-tab-container-wrap, .mint-tab-container-item {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
    }
  }
</style>
<style scoped lang="less">
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .pages {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    .mint-navbar {
      height: 88px;
      top: 0;
      right: 0;
      left: 0;
      position: relative;
      display: flex;
      z-index: 1;
      background-color: #fff;

      .mint-tab-item {
        flex: 1;
        font-size: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        &.is-selected {
          border-bottom: 0;
          color: #26a2ff;
          margin-bottom: -3px;
        }
      }
    }
    .product {
      padding: 10px;
      .img {
        height: 100%;
        overflow: hidden;
        zoom: 1;
      }
    }

    .bottom {
      position: absolute;
      bottom: 0;
      border-top: 1px solid #ebebeb;
      display: -webkit-box;
      display: flex;
      width: 100%;
      height: 98px;
      background-color: #fff;
      .collect,.collect-like, .not-sell, .shop-car {
        width: 19%;
        line-height: 98px;
        text-align: center;
        font-size: 40px;
        position: relative;
      }
      .shop-car{
           background-image: url(../../static/img/shopping-cart.png);
      }
      .collect{
         background-image: url(../../static/img/like67.png);
         background-size:50px 50px;
         background-repeat:no-repeat;
         background-position:center; 
      }
      .collect-like{
         background-image: url(../../static/img/heart-icon.png);
         background-size:50px 50px;
         background-repeat:no-repeat;
         background-position:center; 
      }
      .collect:after, .not-sell:after, .shop-car:after {
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        height: 100%;
        border-left: 1px solid #ebebeb;
        content: "";
      }
      .shop-car .circle {
        min-width: 32px;
        height: 32px;
        color: #fff;
        line-height: 32px;
        padding: 0 8px;
        font-size: 20px;
        border-radius: 16px;
        background-color: #e93a0e;
        text-align: center;
        position: absolute;
        top: 12px;
        right: 24px;
      }
      .click-wrapper {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
      }
      .sign-up {
        position: relative;
      }
      .sign-up, .join-car {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        line-height: 98px;
        text-align: center;
        font-size: 32px;
        color: #1e88f5;
      }
      .sign-up:after {
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        height: 100%;
        border-left: 1px solid #ebebeb;
        content: "";
      }
      .join-car {
        background-color: #1e88f5;
        color: #fff;
      }

    }
    .scroll-area {
      min-height: 100%;
    }
    .heard .heard-banner {
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 75%;
    }
    .slider {
      overflow: hidden;
      .dots {
        position: absolute;
        right: 0;
        left: 0;
        bottom: 12px;
        text-align: center;
        font-size: 0;
      }
      .slider-group {
        height: 100%;
        overflow: hidden;
        zoom: 1;
        &:after {
          visibility: hidden;
          display: block;
          font-size: 0;
          content: " ";
          clear: both;
          height: 0;
        }
        .slider-item {
          float: left;
          overflow: hidden;
        }
      }
    }

    .banner {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      .banner-item {
        display: block;
        height: 100%;
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-position: 50%;
        background-size: cover;
      }
    }
    .details{
      .title {
        padding: 30px 30px 30px 24px;
        position: relative;
        .class-name, .descrite {
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: break-all;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        .class-name {
          line-height: 44px;
          padding-top: 20px;
          font-size: 32px;
          color: #333;
        }
        .descrite {
          line-height: 40px;
          font-size: 28px;
          opacity: .66;
          color: #6d6d6d;
        }
        .price-bar {
          height: 84px;
          line-height: 84px;
          font-size: 52px;
          color: #e93a0e;
        }
        .old-price {
          color: #999;
          .priceold {
            margin-left: 22px;
            color: #999;
            font-size: 28px;
            text-decoration: line-through;
          }
        }
        &:after {
          display: block;
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          border-top: 1px solid #ebebeb;
          content: "";
        }
      }
      .seat {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        position: relative;
        padding: 32px 30px 32px 24px;
        .seat-title {
          width: 160px;
          font-size: 30px;
          display: inline-block;
          color: #999;
        }
        .seat-box {
          -webkit-box-flex: 1;
          -ms-flex: 1;
          flex: 1;
          text-align: right;
          position: relative;
          .seat-content {
            position: absolute;
            left: 0;
            right: 40px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: 24px;
            color: #1e88f5;
          }
        }
        &:after {
          display: block;
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          border-top: 1px solid #ebebeb;
          content: "";
        }
      }
      .void {
        height: 24px;
        background-color: #eef1f6;
      }
      .goods-evaluate{
        top: 44px;
        right: 0;
        bottom: 49px;
        left: 0;
        overflow: hidden;
        background-color: #eef1f6;
            .empty-box{
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              display: flex;
              align-items: center;
              -webkit-box-pack: center;
              justify-content: center;
              -webkit-box-orient: vertical;
              -webkit-box-direction: normal;
              flex-direction: column;
              background-color: #eef1f6;
              .empty-img{
                width: 200px;
                height: 270px;
                background-image: url(../assets/img/coupon.png);
                background-repeat: no-repeat;
                background-attachment: scroll;
                background-position: 50%;
                background-size: cover;
              }
              .empty-tips{
                margin-top: 56px;
                font-size: 26px;
                color: #666;
              }
            }
      }
    }
  }

</style>
