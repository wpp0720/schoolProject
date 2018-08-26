<template>
  <div class="index">
  <div class="top"><div class="select">超人部落</div><div class="serch"><input type="search"></div></div>
   <div class="banner">
     <img src="../../static/img/ceshi.jpg" class="banner-img"/>
   </div>
   <div class="list">
      <dl><dt><span></span></dt><dd>学校简介</dd></dl>
      <dl><dt><span></span></dt><dd>学校简介</dd></dl>
      <dl><span></span><dt></dt><dd>学校简介</dd></dl>
      <dl><dt><span></span></dt><dd>学校简介</dd></dl>
      <dl><dt><span></span></dt><dd>学校简介</dd></dl>
   </div> 
   <div class="new">最新资讯</div>
      <div class="nav">
     <dl>
       <dt><span></span></dt>
       <dd>学校简介</dd>
       </dl>
         <dl><dt><span></span></dt><dd>学校简介</dd></dl>
         <dl><span></span><dt></dt><dd>学校简介</dd></dl>
         <dl><dt><span></span></dt><dd>学校简介</dd></dl>
        <dl><dt><span></span></dt><dd>学校简介</dd></dl>
   </div> 
  </div>
</template>

<script>
export default {
  name: "index"
};
</script>
<style scoped>
.index {width: 750px;background-color: #eff2f9;height: 100%;}
.index  .top{width: 750px;}
.index .top .select{width: 200px;float: left;font-size: 23px;color: #8c9093;height: 60px;line-height: 60px;text-align: center;}
.index .top .serch input{width: 550px;float: left;font-size: 33px;border-radius: 200px;height: 60px;}
.index .banner{width: 100%;height: 347px;}
.index .list{width: 100%;height: 210px;display: flex;justify-content: center;}
.index .banner .banner-img{width: 100%;height: 347px;}
</style>
