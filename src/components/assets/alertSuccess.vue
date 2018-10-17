<template>
    <div class="attention-success">
      <span class="attention-desc">{{attentionText}}</span>
    </div>
</template>
<style  scoped>
.attention-success {
  width: 200px;
  height: 80px;
  position: fixed;
  top:50%;
  transform: translateY(-50%);
  /*background-color: #000;*/
  /*opacity: 0.5;*/
  background: rgba(0,0,0,0.5);
  text-align: center;
  height: 80px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 8px;
}
.attention-success  .attention-desc{
  font-size: 26px;
  color: #fff;
}
</style>
<script>
export default {
  name: "attention-success",
  props: ["attentionText"],
  data() {
    return {};
  },
  methods: {

  }
};
</script>

