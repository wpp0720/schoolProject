<template>
  <div class="school">
   <div class="no-data">
     <div class="no-data-img"></div>
     <div class="no-data-font">暂无其他结果，请到别的地方看看吧</div>
   </div>

  </div>
</template>

<script>
export default {
  name: 'school',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.school{background: #eef1f6;width: 750px;height: 100%;display: flex;justify-content: center;align-items: center;}
.school .no-data{width: 710px;overflow: hidden;display: flex;flex-direction: column;margin: 0 auto;height: 190px;}
.school .no-data .no-data-img{width: 150px;height: 150px;background: url("../../static/img/no-data.png");background-size: 150px 150px;margin: 0 auto;}
.school .no-data .no-data-font{text-align: center;color: #838B8B;font-size: 32px;}

</style>
