<template>
  <div class="top-teacher">
    <div class="search">
      <input type="text" placeholder="搜索老师姓名，授课科目"/><div class="search-button"><span>搜索</span></div>
    </div>
    <div class="teacher-list">
      <div class="list-item">
        <img  src="../../static/img/head.png" class="head"/>
        <span>小花老师</span>
      </div>
      <div class="list-item">
        <img  src="../../static/img/head.png" class="head"/>
        <span>小花老师</span>
      </div>
      <div class="list-item">
        <img  src="../../static/img/head.png" class="head"/>
        <span>小花老师</span>
      </div>
      <div class="list-item">
        <img  src="../../static/img/head.png" class="head"/>
        <span>小花老师</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-teacher{background: #eef1f6;width: 750px;overflow: hidden;}
.top-teacher .search{width: 710px;height: 90px;background: #fff;display: flex;align-items: center;justify-content: space-between;padding-left: 20px;padding-right: 20px;}
.top-teacher .search input{width: 610px;height: 55px;border-radius: 100px;font-size: 26px;line-height: 55px;text-indent: 15px;border: 2px solid #838B8B;}
.top-teacher .search .search-button{width: 100px;height: 30px;color: #838B8B;font-size: 26px;text-align: center;line-height: 30px;}
.top-teacher .teacher-list{padding-left: 20px;padding-right: 20px;}
.top-teacher .teacher-list .list-item{width: 710px;height: 190px;margin-top: 20px;margin-bottom: 20px;background: #fff;display: flex;align-items: center;}
.top-teacher .teacher-list .list-item img{width: 145px;height: 145px;margin-right: 25px;}

</style>
