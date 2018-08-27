<template>
  <div id="index">
  <div class="top">
    <div class="select">
      <div>选择校区 ></div>
    </div>
    <div class="search"><mt-search v-model="value" placeholder="搜索"></mt-search></div>
   </div>
   <div class="banner">
     <!--<img src="../../static/img/ceshi.jpg" class="banner-img"/>-->
     <mt-swipe :auto="4000">
       <mt-swipe-item><img src="../assets/index/swiper/1.png"></mt-swipe-item>
       <mt-swipe-item><img src="../assets/index/swiper/2.png"></mt-swipe-item>
       <mt-swipe-item><img src="../assets/index/swiper/3.png"></mt-swipe-item>
     </mt-swipe>
   </div>
   <div class="list">
     <dl class="list-item"><dt class="list-icon"></dt><dd class="list-text">学校简介</dd></dl>
     <dl class="list-item"><dt class="list-icon"></dt><dd class="list-text">最新活动</dd></dl>
     <dl class="list-item"><dt class="list-icon"></dt><dd class="list-text">名师库</dd></dl>
     <dl class="list-item"><dt class="list-icon"></dt><dd class="list-text">最新通知</dd></dl>
     <dl class="list-item"><dt class="list-icon"></dt><dd class="list-text">联系我们</dd></dl>
   </div>
   <div class="news">最新资讯<span class="new-list">eee</span></div>
   <div class="tobbar">
    <dl class="tobbar-item"><dt class="tobbar-icon"></dt><dd class="tobbar-text">首页</dd></dl>
    <dl class="tobbar-item"><dt class="tobbar-icon"></dt><dd class="tobbar-text">选课</dd></dl>
     <dl class="tobbar-item"><dt class="tobbar-icon"></dt><dd class="tobbar-text">商城</dd></dl>
     <dl class="tobbar-item"><dt class="tobbar-icon"></dt><dd class="tobbar-text">购物车</dd></dl>
     <dl class="tobbar-item"><dt class="tobbar-icon"></dt><dd class="tobbar-text">我的</dd></dl>
   </div>
  </div>
</template>

<script>
export default {
  name: "index"
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
  .mint-search{
    padding: 0;
    height: auto;
  }
  .mint-searchbar-inner{
    height: 40px;
    line-height: 40px;
    border-radius:50px;
    padding: 4px 6px;
  }
  .mint-searchbar-core{
    font-size: 24px;
    margin-left: 5px;
  }

  .mint-searchbar{
    background-color:transparent;
  }
  .mint-searchbar-inner .mintui-search{
    font-size: 30px;
  }
   .top .select{
    width: 200px;
    font-size: 28px;
    color: #8c9093;
    text-align: center;
  }
  .top .search{
    width: 70%;
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
  .mint-swipe-indicator{
    width: 15px;
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
  }
  .tobbar .tobbar-item .tobbar-text{

  }
  /*!*.index .top .serch input{width: 550px;float: left;font-size: 33px;border-radius: 200px;height: 60px;}*!*/
/*.index .banner{width: 100%;height: 347px;}*/
/*.index .list{width: 100%;height: 210px;display: flex;justify-content: center;}*/
/*.index .banner .banner-img{width: 100%;height: 347px;}*/
</style>
