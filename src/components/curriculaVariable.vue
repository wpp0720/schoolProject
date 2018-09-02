<template>
  <div class="curricula-variable">
  
    <div class="course-list">
      <div class="list-items">
       <div class="list-item">
        <div class="course-png"></div>
        <ul>
          <li>12暑假初二英语0523班级</li>
          <li class="nick-name"><i class="fa fa-user-o" style="font-size:28px"></i></icon><span>昵称</span> </li>
          <li class="people-num"><i class="fa fa-user-plus" style="font-size:28px"></i><span>2</span><span>/</span><span>100</span> </li>
          <li class="date"><i class="fa fa-calendar-check-o" style="font-size:28px"></i><span>05月23</span> </li>
          <li class="time"><i class="fa fa-calendar-o" style="font-size:28px"></i><span>周一三五02:30</span> </li>
        </ul>
      </div>
      <div class="course-count">
        <span>1次</span><span>$600</span>
      </div>
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
.curricula-variable{background: #eef1f6;width: 750px;overflow: hidden;}
.curricula-variable .course-list .list-items{height: 300px;margin-bottom: 20px;}
.curricula-variable .course-list .list-items .course-count{width: 670px;display: flex;height: 73px;background: #fff;margin-left: auto;margin-right: auto;align-items: center;justify-content: space-between;padding-left: 20px;padding-right: 20px;}
.curricula-variable .course-list .list-items .course-count span{display: inline-block;}
.curricula-variable .course-list .list-items .course-count span:nth-child(2){color: #FF0000;}
.curricula-variable .course-list .list-item{width: 670px;height: 225px;background: #fff;display: flex;align-items: center;margin-left: 20px;margin-right: 20px;margin-top: 20px;margin-bottom: 2px;padding-left: 20px;padding-right: 20px;}
.curricula-variable .course-list .list-item .course-png{width: 225px;height: 160px;background: url("../../static/img/selected.png") no-repeat center center;background-size: 225px 160px;margin-right: 20px;}
.curricula-variable .course-list .list-item ul li:nth-child(1){font-size: 32px;font-weight: 500;color: #333;}
.curricula-variable .course-list .list-item ul li i{display: inline-block;margin-right: 15px;}
.curricula-variable .course-list .list-item ul li:not(:first-child){color: #838B8B}

</style>
