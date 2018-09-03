<template>
  <div class="like">
    <div class="like-top">
    	<div>
    		<mt-checklist 
				v-model="value" 
				:options="options">
				</mt-checklist>
    		<span>全选</span>
    	</div>
    	<div><span>编辑</span><span v-show="false">完成</span></div>
    </div>
	<div class="like-list">

		<div class="item">
        	<div class="middle">
        		<div class="left">
        			<img :src="defaultImg"/>
        		</div>
        		<div class="center">
        			<p>数学教科书</p>
        		</div>
        	</div>
        	<div class="bottom">
        		<span><strong>￥0.01</strong></span>
        	</div>
        </div>
        <div class="item">
        	<div class="middle">
        		<div class="left">
        			<img :src="defaultImg"/>
        		</div>
        		<div class="center">
        			<p>数学教科书</p>
        		</div>
        	</div>
        	<div class="bottom">
        		<span><strong>￥0.01</strong></span>
        	</div>
        </div>
        <div class="item">
        	<div class="middle">
        		<div class="left">
        			<img :src="defaultImg"/>
        		</div>
        		<div class="center">
        			<p>数学教科书</p>
        		</div>
        	</div>
        	<div class="bottom">
        		<span><strong>￥0.01</strong></span>
        	</div>
        </div>

	</div>
    
  </div>
</template>
 
<script>
export default { 
  data() {
    return {
			defaultImg:require('../../assets/img/goodsPhoto.png'),
			value:[],
			//checklist设置
			options : [{
		    label: '选项A',
		    value: 'A',
		    disabled: true	//可以禁用选项
			},
			{
		    label: '选项B',
		    value: 'B',
		    disabled: true
			},
			{
		    label: '选项C',
		    value: 'C'
			},
			{
		    label: '选项D',
		    value: 'D'
			}]


    };
  }
};
</script>
<style scoped>
.like {
	width:100%;
	height:100%;
	background-color: #dfe4e8;
}
.like-top {
	padding: 1rem;
	background-color: #fff;
	box-sizing: border-box;
	overflow: hidden;
}
.like-top>div {
	float: left;
}
.like-top>div:nth-child(2) {
	float: right;
}
.like-list {
	padding: 0 1rem;
}
.item {
	margin-top: 0.5rem;
	background-color: #FFFFFF;
	font-size: 1rem;
}
.item .middle,
.item .bottom  {
	width: 100%;
	overflow: hidden;
	border-bottom: 1px solid #ccc;
	padding: 1rem 1rem;
	box-sizing: border-box;
}

.item .middle {
	position: relative;
}
.item .middle>div {
	float: left;
}
.item .middle .left {
	margin-right: -1rem;
}
.item .middle .left img {
	width: 80%;
}
.item .middle .center p{
	font-size: 1.5rem;
	
}
.item .bottom span {
	float: right;
    font-size: 1rem;
    color: red;
}

</style>
