<template>
	<div class="guide_wrap">
		<swiper :options="swiperOption" >
		    <!-- slides -->
		    <swiper-slide v-for="(item,index) in swiperData" :key="index">
		    	<img :src="item.imgUrl" alt="">
		    	<router-link to="/login">
		    		<div class="swiper_title">
			    		{{item.title}}
			    		<p>
			    			{{item.description}}
			    		</p>
			    	</div>
		    	</router-link>
		    </swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>
<script>
	export default {
		name:'guide',
		data(){
			return{
				swiperData:[
					{
						title:"科学锻炼",
						description:"多位资深教练亲历师范动作，并运用科学的时间、强度安排，为您定制适合的课程。",
						imgUrl:require("../assets/images/one1.png")
					},
					{
						title:"挑战系统",
						description:"进入挑战模式，与其他i动运动者一起挑战跑步极限尽享运动带来的非凡感受。",
						imgUrl:require("../assets/images/one2.png")
					},
					{
						title:"勋章系统",
						description:"丰富的勋章系统，令您在完成运动项目的同时，增加一枚属于您自己的“军功章”。",
						imgUrl:require("../assets/images/one3.png")
					}
				],
				swiperOption: {
		          	pagination: {
					    el: '.swiper-pagination',
					},
					loop:false
		        }
			}
		}
	}
</script>
<style scoped lang="less">
	.guide_wrap{
		width: 100%;
		overflow: hidden;
		img{
			width: 100%;
			height: 100%;
			float: left;
		}
		.swiper_title{
			width: 100%;
			color: #4c4c4c;
			position: absolute;
			left: 0;
			bottom: 270 / 2 / 50rem;
			text-align: center;
			overflow: hidden;
			font-size: 16 / 50rem;
			font-weight: bolder;
			p{
				font-size: 14 / 50rem;
				margin: 25 / 2 / 50rem 0;
				line-height: 20 / 50rem;
			}
		}
	}
</style>