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
      <div class="shop-list"  v-for="(item,index) in list">
        <div class="list-wrap" >
          <div class="list-header">
            <span  class="cname">
              <span  class="cname-icon">
               <input  class="icon" type="checkbox" id="checkA]" v-on:click="checkAll($event.currentTarget)"/><label for="checkA"></label>
              </span>
             {{item.title}}
        	</span>

          </div>
          <div class="list-body">
            <div  class="row"  v-for="(itemList,index1) in item.data">
              <div class="void"></div>
              <div  class="row-hd">
                <div  class="body-left">
                  <input class="icon" type="checkbox" :id="'check'+index+index1" name="checkboxs" v-model="checkeds[index]" />
                  <label :for="'check'+index+index1"></label>
                </div>
                <div class="body-right">
                  <span class="goods-img" :style="getBackground(itemList.subimage1Filename)" ></span>
                  <div  class="goods-info">
                    <div  class="name">{{itemList.goodsTitle}}</div>
                    <div class="detail">
                      <span  class="price">¥{{itemList.unitPrice}}</span>
                      <span class="count">
                        <span>
                          <em v-on:click="minius(index,index1)">-</em>
                          <input type="number" v-model.number="itemList.purchaseQuantity" />
                          <em v-on:click="add(index,index1)">+</em>
                        </span>
                        <span><button v-on:click="del(index,index1)">删除</button></span>
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
            <div  class="account-wrap-r">
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

    },
    {
      title:"潮人部落",
      data:[
        {
          goodId:3,
          goodsTitle: "新视野英语教材",							//商品名
          specifications: "大包",							//商品规格
          unitPrice: "12",									//商品单价
          subimage1Filename :"//cdn01.xiaogj.com/file/mall/default/goods.png",		//商品图片名
          purchaseQuantity: 1								//商品数量
        }
      ]

    }
  ] //Vue对象
  export default {
    name: "ShopCart",
    data() {
      return {
        list: list,
        checkeds: {}
      }
    },
    computed: {
      sum: function () {
        let sum = 0;
        for (let i in this.list) {
          if (this.checkeds[i])
            sum += this.list[i].unitPrice * this.list[i].purchaseQuantity;
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
    methods: {
      getBackground:function(name){
        return "background-image:url("+name+")";
      },
      del: function (index,index1) {
        this.list[index].data.splice(index1, 1);
        this.checkeds.splice(index,1); //同时删除对应的选中状态标识
      },
      add: function (index,index1) {
        this.list[index].data[index1].purchaseQuantity++;
      },
      minius: function (index,index1) {
        if (this.list[index].data[index1].purchaseQuantity > 1) {
          this.list[index].data[index1].purchaseQuantity--;
        }
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
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -.15em;
    fill: currentColor;
    overflow: hidden;
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
