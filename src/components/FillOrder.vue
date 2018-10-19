d<template>
  <div class="pages">
    <div class="body">
      <div class="order-shopping" v-for="item in FillOrder" >
        <!-- <div class="order-shopping-hd">{{item.productName}}</div> -->
        <div class="order-shopping-bd">
          <div class="row-hd-l"  :style="getBackground('//cdn01.xiaogj.com/file/mall/default/goods.png')"></div>
          <div class="row-hd-r">
            <div class="name">{{item.productName}}</div>
            <div class="detail">
              <div class="price">¥{{(item.price).toFixed(2)}}</div>
              <div class="count">x{{item.count}}</div>
            </div>
          </div>
        </div>
        <div class="order-shopping-ft">
           共{{FillOrder.length}}件商品
          <span class="amount">小计：<span class="price">¥{{((item.count)*(item.price)).toFixed(2)}}</span></span>
        </div>
      </div>
      <div class="line"></div>
      <div class="order-discount">
        <div class="item-name" @click="showSheet()">
          <mt-cell title="优惠活动" is-link>
            <span style="color: #333">不使用优惠卷</span>
          </mt-cell>
        </div>
      </div>
      <div class="order-discount">
        <div class="item-name" @click="showSheet()">
          <mt-cell title="优惠卷" is-link>
            <span style="color: #333">无可用</span>
          </mt-cell>
        </div>
      </div>
      <div class="line"></div>
      <div class="order-memo">
        <div class="item-name">备注：</div>
        <div class="memo-wrap">
          <input  type="text" placeholder="选填，对本次交易的说明" v-model="remark">
        </div>
      </div>
      <div class="order-student">
        使用学员：{{userData.name}}<span v-if="userData.sex">（{{userData.sex}}）</span>
      </div>
    </div>
    <div class="footer">
      <div class="footer-l">共<span  class="count">{{getTotalNum()}}</span>件，合计: <span class="price">¥{{getTotalMoney().toFixed(2)}}</span></div>
      <div class="footer-r" v-on:click="submitOrder()">提交订单</div>
    </div>
    <mt-actionsheet cancel-text="" class="order-scheme"
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>
  </div>
</template>

<script>
  import Vue from "vue";
  import FillOrder from "./FillOrder.json";
  import { Loadmore } from 'mint-ui';
   import { api } from "../../static/js/request-api/request-api.js";
  Vue.component(Loadmore.name, Loadmore);
  import { Actionsheet,Cell } from 'mint-ui';
  Vue.component(Actionsheet.name, Actionsheet);
  Vue.component(Cell.name, Cell);
    export default {
      name: "FillOrder",
      data() {
        return {
          sheetVisible:false,
          actions:[
            {
              name:"不使用优惠卷",
              method(){
                console.log(1)
              }
            },{
              name:"确定",
              method(){
                console.log(122222)
              }
            }
          ],
          FillOrder: FillOrder,
          remark:"",
          userData:{}
        }
      },
      mounted() {
        this.getOrderData();
        this.getUserInfo();
      },
      methods: {
        showSheet(){
          this.sheetVisible = !this.sheetVisible;
        },
        getTotalNum(){
          let totalNum = 0;
          this.FillOrder.forEach((item,index)=>{
            totalNum+=Number(item.count);
          });
          return totalNum;
        },
        getOrderData(){
          let joinAuctionKey = "add_order";
          let addOrderArray=localStorage.getItem(joinAuctionKey);
          this.FillOrder=JSON.parse(addOrderArray);
        },
      //添加订单
      submitOrder(){
      let params ={};
      let _self = this;
      params.couponinfo=null;
      let newAddOrderArray=[];
      for(let i=0;i<this.FillOrder.length;i++){
        let fillOrder=this.FillOrder[i];
        let orderObj={};
        orderObj.standardPrice=fillOrder.price;
        orderObj.productCode=fillOrder.productCode;
        orderObj.productName=fillOrder.productName;
        orderObj.productId=fillOrder.productId;
        orderObj.realPrice=fillOrder.price;
        orderObj.standardMoney=fillOrder.price*fillOrder.count.toFixed(2);
        orderObj.realMoney=fillOrder.price*fillOrder.count.toFixed(2);
        orderObj.productCount=fillOrder.count;
        orderObj.productType=2;
        orderObj.discount=0;
        newAddOrderArray.push(orderObj);
      }
      console.log(JSON.stringify(newAddOrderArray));
      params.orderdetailinfo =JSON.stringify(newAddOrderArray);
      params.remark=this.remark;
      api.insertSaleOrder(params)
        .then(res => {
          console.log(res);
          if (res.status == 200) {
             let code=res.data.code;
             if(code==1){
               alert("成功");
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
      //获取用户登录信息
      getUserInfo(){
      let _self = this;
      api.getUserInfo(null)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
               _self.userData=res.data.data;
          } else {
            let params = { msg: "获取用户登录信息错误" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取用户登录信息错误" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
         });
        },
        getTotalMoney(){
          let totalMoney = 0;
          this.FillOrder.forEach((item,index)=>{
            totalMoney+=Number(item.price*item.count);
          });
          return totalMoney;
        },
        getBackground:function(name){
          return "background-image:url("+name+")";
        }
      }
    }
</script>
<style>
  .mint-cell-wrapper{
    font-size: 26px;
    background: none;
  }
  .mint-cell-allow-right::after {
    border: solid 2px #c8c8cd;
    border-bottom-width: 0;
    border-left-width: 0;
    content: " ";
    top: 50%;
    right: 10px;
    position: absolute;
    width: 16px;
    height: 16px;
    -webkit-transform: translateY(-50%) rotate(45deg);
    transform: translateY(-50%) rotate(45deg);
  }
  .mint-cell-mask:active::after {
    opacity: 0;
  }
  .mint-actionsheet-listitem, .mint-actionsheet-button {
    display: block;
    width: 100%;
    height: 90px;
    line-height: 90px;
    font-size: 32px;
    color: #333;
    background-color: #fff;
  }
  .order-scheme .mint-actionsheet-listitem:last-of-type {
    height: 90px;
    line-height: 90px;
    text-align: center;
    color: #fff;
    font-size: 32px;
    background: #1e88f5;
  }
</style>
<style scoped lang="less">
  input[type=number], input[type=password], input[type=search], input[type=tel], input[type=text], textarea {
    width: 100%;
    padding: 0 10px;
    height: inherit;
    border: none;
    -webkit-appearance: none;
    -webkit-user-select: text;
    -webkit-font-smoothing: antialiased;
    -wekbit-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: none;
  }
  input {
    text-rendering: auto;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    margin: 0em;
    font-size:28px
  }
 .pages {
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
    position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   overflow: hidden;

   color:#666;
    .body{
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     bottom: 50px;
      .line{
        height: 18px;
        background-color: #eef1f6;
      }
      .order-shopping {
        background-color: #fff;
        .order-shopping-hd{
          height: 80px;
          line-height: 80px;
          padding-left: 30px;
          font-size: 30px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          position: relative;
        }
        .order-shopping-bd{
          margin-bottom: 3px;
          background-color: #f8f8f8;
          display: flex;
          padding:30px;
          .row-hd-l{
            width: 200px;
            height: 150px;
            background-repeat: no-repeat;
            background-attachment: scroll;
            background-position: 50%;
            background-size: cover;
            background-color: #eef1f6;
          }
          .row-hd-r{
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            position: relative;
            min-height: 150px;
            margin-left: 20px;
            .name {
              padding-bottom: 20px;
              font-size: 30px;
              color: #333;
              word-break: break-all;
            }
           .detail{
              position: absolute;
              left: 0;
              right: 0;
              bottom: 0;
              height: 40px;
              line-height: 40px;
              display: flex;
              -webkit-box-align: center;
              align-items: center;
              -webkit-box-pack: justify;
              justify-content: space-between;
              -webkit-box-orient: horizontal;
              -webkit-box-direction: normal;
              flex-direction: row;
                 .price{
                   margin-right: 12px;
                   vertical-align: middle;
                   font-size: 32px;
                 }
                 .count{
                   color: #999;
                   font-size: 24px;
                 }
            }
          }

        }
        .order-shopping-ft {
          height: 88px;
          line-height: 88px;
          padding-right: 24px;
          text-align: right;
          color: #333;
          font-size: 24px;
          .amount{

            padding-left: 30px;
          }
          .price{
            font-size: 32px;
            color: #e93a0e!important;
          }
        }
      }
      .order-discount{
        background-color: #fff;
        padding: 28px 24px;;
       /* display: flex;*/
        align-items: center;
        margin-top:1px;
        justify-content: space-between;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-direction: row;
        position: relative;
       /* padding-right: 56px;*/
        .item-name{
          padding-right:10px;
          color: #333;
          font-size: 26px;
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
      .order-memo{
        padding: 28px 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        position: relative;
        background-color: #fff;
        font-size: 26px;
       .item-name{
          color: #333;
          font-size: 26px;
        }
        .memo-wrap {
          -webkit-box-flex: 1;
          -ms-flex: 1;
          flex: 1;
        }
      }
      .order-student{
        height:80px;
        line-height: 80px;
        padding-left:24px;
        background-color: #e4f1ff;
        color: #1e88f5;
        font-size: 28px;
      }
   }
   .footer{
     position: absolute!important;
     bottom: 0;
     left: 0;
     width: 100%;
     height:100px;
     line-height: 100px;
     display: flex;
     background-color: #fff;
     border-top: 1px solid #ebebeb;
     font-size:28px;
    .footer-l{
       -webkit-box-flex: 1;
       -ms-flex: 1;
       flex: 1;
       text-align: right;
       padding-right: 32px;
      .price{
        color: #e93a0e!important;
      }
      .count{
        color:#1e88f5;
      }
     }
    .footer-r{
       width: 260px;
       font-size: 36px;
       display: flex;
       -webkit-box-align: center;
       align-items: center;
       -webkit-box-pack: center;
       justify-content: center;
       -webkit-box-orient: horizontal;
       -webkit-box-direction: normal;
       flex-direction: row;
       color: #fff;
       background-color: #1e88f5;
     }
   }

  }
</style>
