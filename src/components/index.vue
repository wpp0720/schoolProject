<template>
  <div id="index">
  <div class="top">
    <div class="select">
      <div @click="chooseArea"><span id="scName">{{scName}}</span> <icon name="angle-down" scale="2"></icon></div>
      <van-popup v-model="schoolAreaPopupVisible" position="bottom">
        <van-picker
          show-toolbar
          :columns="schoolSlots"
          item-height="70"
          @cancel="onCancel"
          @confirm="onConfirm"
          visible-item-count="5"
        />
      </van-popup>
    </div>
    <div class="search"><van-search placeholder="请输入搜索关键词" v-model="value" /></div>

   </div>
   <div class="banner">
     <van-swipe :autoplay="3000">
       <van-swipe-item><img src="../assets/index/swiper/1.png"></van-swipe-item>
       <van-swipe-item><img src="../assets/index/swiper/2.png"></van-swipe-item>
       <van-swipe-item><img src="../assets/index/swiper/3.png"></van-swipe-item>
     </van-swipe>
   </div>
   <div class="list">
     <swiper :options="swiperOption">
     <swiper-slide><dl class="list-item"><dt class="list-icon"><icon name="bars" scale="3"></icon></dt><dd class="list-text">学校简介</dd></dl></swiper-slide>
     <swiper-slide><dl class="list-item"><dt class="list-icon"><icon name="bell" scale="3"></icon></dt><dd class="list-text">最新活动</dd></dl></swiper-slide>
     <swiper-slide><dl class="list-item"><dt class="list-icon"><icon name="users" scale="3"></icon></dt><dd class="list-text">名师库</dd></dl></swiper-slide>
     <swiper-slide><dl class="list-item"><dt class="list-icon"><icon name="comment" scale="3"></icon></dt><dd class="list-text">最新通知</dd></dl></swiper-slide>
     <swiper-slide><dl class="list-item"><dt class="list-icon"><icon name="envelope" scale="3"></icon></dt><dd class="list-text">联系我们</dd></dl></swiper-slide>
     <swiper-slide><dl class="list-item"><dt class="list-icon"><icon name="envelope" scale="3"></icon></dt><dd class="list-text">投诉建议</dd></dl></swiper-slide>
     <swiper-slide><dl class="list-item"><dt class="list-icon"><icon name="envelope" scale="3"></icon></dt><dd class="list-text">师资力量</dd></dl></swiper-slide>
     <swiper-slide><dl class="list-item"><dt class="list-icon"><icon name="flag" scale="3"></icon></dt><dd class="list-text">我们的特色</dd></dl></swiper-slide>
     </swiper>
   </div>
   <div class="news">最新资讯<span class="new-list">eee</span></div>
   <div class="tobbar">
    <dl class="tobbar-item"><dt class="tobbar-icon"><icon name="home" scale="2"></icon></dt><dd class="tobbar-text">首页</dd></dl>
    <dl class="tobbar-item"><dt class="tobbar-icon"><icon name="book" scale="2"></icon></dt><dd class="tobbar-text">选课</dd></dl>
     <dl class="tobbar-item"><dt class="tobbar-icon"><icon name="server" scale="2"></icon></dt><dd class="tobbar-text">商城</dd></dl>
     <dl class="tobbar-item"><dt class="tobbar-icon"><icon name="cart-arrow-down" scale="2"></icon></dt><dd class="tobbar-text">购物车</dd></dl>
     <dl class="tobbar-item"><dt class="tobbar-icon"><icon name="user" scale="2"></icon></dt><dd class="tobbar-text">我的</dd></dl>
   </div>

  </div>

</template>

<script>
export default {
  name: "index",
  components: {},
  data() {
    var _self=this;
    return {
      schoolAreaPopupVisible:false,
      scName:'选择校区',
      schoolSlots:[
         {
           text: '金色梯田培训学校',
           value: '金色梯田培训学校'
         },
         {
           text: '天心校区',
           value: '天心校区'
         },
         {
           text: '潮人部落',
           value: '潮人部落'
         },
         {
           text: '金色阳光',
           value: '金色阳光'
         },
         {
           text: '临县一中校区',
           value: '临县一中校区'
         },
         {
           text: '清华附中',
           value: '清华附中'
         },
         {
           text: '华中示范',
           value: '华中示范'
         }
       ],
      swiperOption:{
        slidesPerView: 'auto',
      }
//      popupVisible:false
    }
  },
  mounted(){
  },
  methods:{
    chooseArea(){
      this.schoolAreaPopupVisible = true
    },
    onConfirm(val, index) {
      this.schoolAreaPopupVisible = false

      if(val.text.length <= 4){
        this.scName = val.text
      }else{
        this.scName = val.text.substring(0,4)+'...'
      }

    },
    onCancel() {
      this.schoolAreaPopupVisible = false
    },
    schoolAreaclose() {
      this.schoolAreaPopupVisible = false
    },
    schoolAreaconfirmFn(val) {
      this.schoolAreaPopupVisible = false
      if(val.select1.text.length <= 4){
        this.scName = val.select1.text
      }else{
        this.scName = val.select1.text.substring(0,4)+'...'
      }
    },
    showDia(popupVisible,cpName) {


    }
  }
};
</script>
<style lang="less">
  #index{
    height: 100%;
    background: #eef1f6;
  }
  .top{
    display: -webkit-flex; /* Safari */
    display: flex;
    justify-content:flex-start;
    background: #eef1f6;
    width: 100%;
    height: 60px;
    line-height: 60px;
    padding: 15px 0;
  }
  .select .fa-icon{
    position: relative;
    top: 5px;

  }





   .top .select{
    width: 200px;
    font-size: 28px;
    color: #8c9093;
    text-align: center;
  }
  .top .search{
    width: 70%;
   .van-cell__left-icon{
    font-size: 24px;
    position: relative;
    top: 8px;
  }
  .van-search .van-cell{
    padding: 8px 10px;
    border-radius:50px;
  }
  }

  .banner{
    width: 100%;
    height: 400px;
  }
  .banner img{
    display: block;
    width: 100%;
    height: 400px;
  }

  .list{
    display: -webkit-flex; /* Safari */
    display: flex;
    justify-content:flex-start;
    background: #fff;
    width: 100%;
  }
  .list .list-item{

    width: 150px;
    padding:15px 0 ;
  }
  .list .list-icon{
    width: 104px;
    height: 104px;
    border-radius:104px;
    border: 1px #66b7f6 solid;
    margin: 15px auto;
    text-align: center;
    line-height: 104px;
    color: #66b7f6;


  }
  .list .list-icon .fa-icon{
    vertical-align:middle
  }
  .list .list-text{
    color: #333;
    text-align: center;
    font-size: 26px;

  }
  .news{
    width: 100%;
    height: 80px;
    line-height: 80px;
    text-indent: 20px;
    color: #1e88f5;
    font-size: 30px;
    background: #fff;
    margin-top: 10px;
    display: -webkit-flex; /* Safari */
    display: flex;

  }

  .new-list{
    color: #333;
    font-size: 26px;
    padding-left: 20px;
  }
  .tobbar{
    display: -webkit-flex; /* Safari */
    display: flex;
    justify-content:flex-start;
    width: 100%;
    height:100px;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
  }
  .tobbar .tobbar-item{
    width: 20%;
    text-align: center;
  }
  .tobbar .tobbar-item .tobbar-icon{
    width: 40px;
    height: 40px;
    margin: 0 auto;
    padding: 5px;
    color:#1e88f5 ;
    text-align: center;

  }
  .tobbar .tobbar-item .tobbar-icon .fa-icon{
    vertical-align: middle;
  }


  .van-picker-column{
    font-size: 32px;
  }

  .van-picker__cancel, .van-picker__confirm{
    padding-top: 10px;
  }
.swiper-slide{
  width: 150px;
}
</style>
