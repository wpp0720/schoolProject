<template>
  <div class="teacher-team">
  
    <div class="teacher-list">
      <div class="list-item">
        <img  src="../../static/img/head.png" class="head"/>
        <span>舞蹈老师</span>
      </div>
      <div class="input-text-area">
       <textarea  placeholder="说出您的问题，我们会为您解答"></textarea>
      </div>
      <div class="submit-ask">
         <div class="submit-button"  v-on:click="submitAddAsk"><span>提交</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { api } from "../../static/js/request-api/request-api.js";
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  mounted:function(){
    
  },
  methods:{
    //提交提问
    submitAddAsk:function(){
      let params ={};
      let _self = this;
      params.product_id=_self.$route.query.id;;
      api.getProductAsk(params)
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.teacher-team{background: #eef1f6;width: 750px;overflow: hidden;}
.teacher-team .search{width: 710px;height: 90px;background: #fff;display: flex;align-items: center;justify-content: space-between;padding-left: 20px;padding-right: 20px;}
.teacher-team .search input{width: 610px;height: 55px;border-radius: 100px;font-size: 26px;line-height: 55px;text-indent: 15px;border: 2px solid #838B8B;}
.teacher-team .search .search-button{width: 100px;height: 30px;color: #838B8B;font-size: 26px;text-align: center;line-height: 30px;}
.teacher-team .teacher-list{padding-left: 20px;padding-right: 20px;}
.teacher-team .teacher-list .list-item{width: 710px;height: 190px;margin-top: 20px;margin-bottom: 20px;background: #fff;display: flex;align-items: center;}
.teacher-team .teacher-list .list-item img{width: 145px;height: 145px;margin-right: 25px;}
.teacher-team .input-text-area{margin: 0 auto;width: 650px;padding-bottom: 30px;}
.teacher-team .input-text-area textarea{width: 650px;height: 300px;  -webkit-user-select: auto!important;
  -khtml-user-select: auto!important;
  -moz-user-select: auto!important;
  -ms-user-select: auto!important;
  -o-user-select: auto!important;
  user-select: auto!important;}
  .teacher-team .submit-ask{width: 100%;height: 60px;padding-bottom: 30px;}
 .teacher-team .submit-ask .submit-button{width: 600px;height: 60px;text-align: center;line-height: 60px;background-color: #436EEE;border-radius: 30px;margin: 0 auto;color: #fff;}
</style>
