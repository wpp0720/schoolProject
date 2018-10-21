<template>
  <div class="add-ask">
  
    <div class="teacher-list">
      <div class="list-item">
        <img  src="../../static/img/goods.png" class="head"/>
        <span>{{productName}}</span>
      </div>
      <div class="input-text-area">
       <textarea  placeholder="说出您的问题，我们会为您解答" v-model="ask_content"></textarea>
      </div>
      <div class="submit-ask">
         <div class="submit-button"  v-on:click="submitAddAsk"><span>提交</span></div>
      </div>
    </div>
     <attentionSuccess v-if="showAttentionAlert" v-bind:attentionText="attentionText"  style="z-index:600;"></attentionSuccess>
  </div>
</template>

<script>
import { api } from "../../static/js/request-api/request-api.js";
import attentionSuccess from "@/components/assets/alertSuccess";
export default {
  name: 'hello',
   components:{
      attentionSuccess
    },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      productName:null,
      ask_content:null,
      showAttentionAlert:false,
      attentionText:"提交成功"
    };
  },
  mounted:function(){
    this.getProductName();
  },
  methods:{
    //获取商品名称
    getProductName:function(){
      this.productName=this.$route.query.productName;
    },
    //提交提问
    submitAddAsk:function(){
      let params =new URLSearchParams();
      let _self = this;
      params.append('ask_content',_self.ask_content);
      params.append('product_id',_self.$route.query.id);
      api.addProductAsk(params)
        .then(res => {
          console.log(res);
             let code=res.code;
             if(code==1){
                _self.showAttentionAlert=true;
                 setTimeout(function(){
                   window.location.href="proDetails?id="+_self.$route.query.id;
                 },2000);
             }
           else {
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
.add-ask{background: #eef1f6;width: 750px;overflow: hidden;}
.add-ask .search{width: 710px;height: 90px;background: #fff;display: flex;align-items: center;justify-content: space-between;padding-left: 20px;padding-right: 20px;}
.add-ask .search input{width: 610px;height: 55px;border-radius: 100px;font-size: 26px;line-height: 55px;text-indent: 15px;border: 2px solid #838B8B;}
.add-ask .search .search-button{width: 100px;height: 30px;color: #838B8B;font-size: 26px;text-align: center;line-height: 30px;}
.add-ask .teacher-list{padding-left: 20px;padding-right: 20px;}
.add-ask .teacher-list .list-item{width: 710px;height: 210px;margin-top: 20px;margin-bottom: 20px;background: #fff;display: flex;align-items: center;}
.add-ask .teacher-list .list-item img{width: 226px;height: 169px;margin-right: 20px;margin-left: 20px;}
.add-ask .input-text-area{margin: 0 auto;width: 650px;padding-bottom: 30px;}
.add-ask .input-text-area textarea{width: 650px;height: 300px;  -webkit-user-select: auto!important;
  -khtml-user-select: auto!important;
  -moz-user-select: auto!important;
  -ms-user-select: auto!important;
  -o-user-select: auto!important;
  user-select: auto!important;}
  .add-ask .submit-ask{width: 100%;height: 60px;padding-bottom: 30px;}
 .add-ask .submit-ask .submit-button{width: 600px;height: 60px;text-align: center;line-height: 60px;background-color: #436EEE;border-radius: 30px;margin: 0 auto;color: #fff;}
</style>
