<template>
  <div class="cart">
    <div class="body">
      <div class="campus-tips">
        不同校区的商品不可一起购买
        <span  class="campus-tips-icon">
          <svg  aria-hidden="true" class="icon">
            <use  xlink:href="#icon-guanbi"></use>
          </svg>
        </span>
      </div>
      <div class="edit"><span v-if="!isEdit" v-on:click="editShopCart(1)">编辑</span><span v-if="isEdit" v-on:click="editShopCart(0)">完成</span></div>
      <div class="shop-list"  v-for="(item,index) in list">
        <div class="list-wrap" >
          <div class="list-header" v-if="false">
            <span  class="cname">
              <span  class="cname-icon">
               <!-- <input  class="icon" type="checkbox" id="checkA]" v-on:click="checkAll($event.currentTarget)"/><label for="checkA"></label> -->
              </span>
             <!-- {{item.productName}} -->
        	</span>

          </div>
          <div class="list-body">
            <!-- <div  class="row"  v-for="(itemList,index1) in item.data"> -->
              <div  class="row">
              <div class="void"></div>
              <div  class="row-hd">
                <div  class="body-left">
                  <input class="icon" type="checkbox" :id="'check'+index" name="checkboxs" v-model="checkeds[index]" />
                  <!-- <input type="checkbox" id="dogs"> -->
                  <label :for="'check'+index"></label>
                </div>
                <div class="body-right">
                  <span class="goods-img" :style="getBackground('//cdn01.xiaogj.com/file/mall/default/goods.png')" ></span>
                  <div  class="goods-info">
                    <div  class="name">{{item.productName}}</div>
                    <div class="detail">
                      <span  class="price">¥{{item.price}}</span>
                      <span class="count" v-if="!isEdit">
                        x{{item.count}}
                      </span>
                      <span class="count" v-if="isEdit">
                        <span>
                          <em v-on:click="minius(item.productId,index)">-</em>
                          <input type="number" v-model="item.count" />
                          <em v-on:click="add(item.productId,index)">+</em>
                        </span>
                        <span><button v-on:click="del(index,item.productId)">删除</button></span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <!--<div data-v-519ba53a="" class="row-delete" style="display: none;">删除</div>-->
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="account-wrap">
            <div class="account-wrap-l">
              <div class="count">
                合计:<span class="total">￥{{sum.toFixed(2)}}</span>
              </div>
            </div>
            <div  class="account-wrap-r" v-on:click="addOrder">
              去结算<span class="num">（{{checkNum}}）</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Vue from "vue";
  import { api } from "../../static/js/request-api/request-api.js";
  let list = [
    {
      title:"澧县一中校区",
      data:[
        {
          goodId:1,
          goodsTitle: "2017寒初二英语培优班",							//商品名
          unitPrice: "50",									//商品单价
          subimage1Filename :"//cdn01.xiaogj.com/file/mall/default/goods.png",		//商品图片名
          purchaseQuantity: 6								//商品数量
        },  {
          goodId:2,
          goodsTitle: "2017寒初二",							//商品名
          unitPrice: "10",									//商品单价
          subimage1Filename :"//cdn01.xiaogj.com/file/mall/default/goods.png",		//商品图片名
          purchaseQuantity: 2								//商品数量
        }
      ]

    }
  ] //Vue对象
  export default {
    name: "ShopCart",
    data() {
      return {
        list: list,
        checkeds: {},
        orderIdArray:[],
        isEdit:false
      }
    },
    computed: {
      sum: function () {
        let sum = 0;
        let _self=this;
        for (let i in this.list) {
          if (this.checkeds[i])
            sum += this.list[i].price * this.list[i].count;
        }
        return sum;
      },
      checkNum: function () {
        let num = 0;
        for (let i in this.checkeds) {
          if (this.checkeds[i]) {
            num++;
          }
        }
        return num;
      }
    },
    mounted() {
      //获取购物车列表
      this.refreshShoppingCartList();
    },
    methods: {
      getBackground:function(name){
        return "background-image:url("+name+")";
      },
      //编辑购物车
      editShopCart:function(over){
         if(over==1){
           this.isEdit=true;
         }else{
           this.isEdit=false;
         }
      },
      del: function (index,productId) {
        console.log(productId);
        this.list.splice(index, 1);//删除数组中指定元素
        this.deleteProductToCart(productId);
      },
      add: function (productId,index) {
        this.list[index].count++;
        this.editProductToCart(productId,1);
      },
      minius: function (productId,index) {
        if (this.list[index].count > 1) {
          this.list[index].count--;
          this.editProductToCart(productId,-1);
        }
      },
      refreshShoppingCartList: function() {
      let params ={};
      let _self = this;
      api.refreshShoppingCartList(null)
        .then(res => {
          console.log(res);
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  _self.list=res.data.data;
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
    //提交订单
    addOrder:function(){
        this.orderIdArray=[];
         for (let i in this.list) {
          if (this.checkeds[i])
            this.orderIdArray.push(this.list[i]);
        }
      let joinAuctionKey = "add_order";
      let _self = this;
      // if (!localStorage.getItem(joinAuctionKey)) {
        localStorage.setItem(joinAuctionKey, JSON.stringify(_self.orderIdArray));
      // }
        this.$router.push({path: "/fillOrder"});
    },
     //删除购物车
     deleteProductToCart: function(id) {
      let params ={};
      let _self = this;
      params.product_id=id;
      let data = new URLSearchParams();
      data.append('product_id',id);
      api.deleteProductToCart(data)
        .then(res => {
          console.log(res);
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  _self.list=res.data.data;
                }
          } else {
            let params = { msg: "删除购物车错误" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "删除购物车错误" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
    //编辑购物车
     editProductToCart: function(id,count) {
      let params ={};
      let _self = this;
      let data = new URLSearchParams();
       data.append('product_id',id);
       data.append('product_count',count)
      api.editProductToCart(data)
        .then(res => {
          console.log(res);
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  _self.list=res.data.data;
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
      checkAll: function (event) {
        if (event.checked) {
          for (let i = 0; i < this.checkeds.length; i++) {
            Vue.set(this.checkeds, i, true);
          }
        } else {
          for (let i = 0; i < this.checkeds.length; i++) {
            Vue.set(this.checkeds, i, false);
          }
        }
      }
    }

  }

</script>

<style scoped lang="less">
  .void{
    height: 2px;
    background-color: #eef1f6;
  }
  .edit{
    width: 710px;
    height: 80px;
    padding-left: 20px;
    line-height: 80px;
    border-bottom: 1px solid #ccc;
    text-align: right;
    padding-right: 20px;
  }
  button{
    width: 80px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    color: #fff;
    font-size: 30px;
    background: #1e88f5;
    margin-left:20px;
  }
  input[type=number], input[type=password], input[type=search], input[type=tel], input[type=text], textarea {
    width: 60px;
    text-align: center;
    height: inherit;
    border: 1px solid #666;

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

input[type="checkbox"]{
    -webkit-appearance: none;
    vertical-align:middle;
    margin-top:0;
    background:#fff;
    border:#999 solid 1px;
    border-radius: 3px;
    min-height: 12px;
    min-width: 12px;
}
input[type="checkbox"]:checked {
    background: #3190e8;
}
input[type=checkbox]:checked::after{
    content: '';
    top: 3px;
    left: 3px;
    position: absolute;
    background: transparent;
    border: #fff solid 2px;
    border-top: none;
    border-right: none;
    height: 6px;
    width: 10px;
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg); 
    transform: rotate(-45deg);
}
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -.15em;
    fill: currentColor;
    overflow: hidden;
    // border: 2px solid #333;
  }
  .cart{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    background-color: #fff;
    .body{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      bottom: 0px;
      .campus-tips {
        height: 80px;
        line-height: 80px;
        padding-left: 32px;
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
        font-size: 28px;
        color: #f8800a;
        background: #fffcee;
        .campus-tips-icon{
          padding: 0 20px;
          font-size: 36px;
        }
      }
      .shop-list{
        background-color: #eef1f6;
        .footer {
          position: absolute!important;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100px;
          line-height: 100px;
          background-color: #fff;
          .account-wrap {
            display: -webkit-box;
            display: -ms-flexbox;

            .account-wrap-l {
              -webkit-box-flex: 1;
              -ms-flex: 1;
              flex: 1;
              padding-left: 20px;
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
              .count {
                padding-right: 30px;
                color: #333;
                font-size: 30px;
                .total {
                  color: #e93a0e;
                  font-size: 32px;
                }
              }
            }
            .account-wrap-r {
              width: 260px;
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              -webkit-box-pack: center;
              -ms-flex-pack: center;
              justify-content: center;
              -webkit-box-orient: horizontal;
              -webkit-box-direction: normal;
              -ms-flex-direction: row;
              flex-direction: row;
              color: #fff;
              font-size: 36px;
              background: #1e88f5;
              .num {
                font-size: 24px;
              }
            }
          }
        }
        .list-wrap{
          margin-bottom: 18px;
          background-color: #fff;
          .list-header{
            height: 80px;
            line-height: 80px;
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
            font-size: 30px;
            .cname{
              max-width: 80%;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              .cname-icon{
                width: 100px;
                height: 80px;
                display: inline-block;
                text-align: center;
                .icon {
                  color: #999;

                }
              }
            }

          }
          .list-body {
            line-height: 1;
            .row{
              position: relative;
              .row-hd{
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                position: relative;
                .body-left{
                  width: 100px;
                  height: 200px;
                  line-height: 200px;
                  text-align: center;
                  .icon {

                    color: #999;
                  }
                }
                .body-right {
                  -webkit-box-flex: 1;
                  -ms-flex: 1;
                  flex: 1;
                  padding: 30px 30px 30px 0;
                  display: -webkit-box;
                  display: -ms-flexbox;
                  display: flex;
                  .goods-img{
                    position: relative;
                    width: 150px;
                    height: 150px;
                    background-repeat: no-repeat;
                    background-attachment: scroll;
                    background-position: 50%;
                    background-size: cover;
                    background-color: #eef1f6;
                  }
                  .goods-info{
                    position: relative;
                    -webkit-box-flex: 1;
                    -ms-flex: 1;
                    flex: 1;
                    margin-left: 16px;
                    padding-bottom: 30px;
                    .name{
                      font-size: 30px;
                      color: #333;
                      line-height: 32px;
                      display: -webkit-box;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      word-break: break-all;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 2;
                    }
                    .detail{
                      position: absolute;
                      left: 0;
                      right: 0;
                      bottom: 0;
                      height: 30px;
                      line-height: 30px;
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
                      .price{
                        color: #e93a0e;
                        font-size: 32px;
                      }
                      .count{
                        color: #999;
                        font-size: 24px;
                      }
                    }
                  }
                }

              }
            }
          }
        }
      }
    }

  }
</style>
