<template>
	<div class="sport_wrap">
		<Publichead :leftUrl="headArr.leftUrl"
			:curIcon="headArr.curIcon"
			:curTitle="headArr.curTitle"
			:rightUrl="headArr.rightUrl"
		/>
		<div class="top_zhanwei"></div>
		<div class="swiper_wrap">
			<transition-group tag="div" class="swiper_container" name="imgStyle">
				<div class="swiper_slide" v-for="(item,index) in swiperImgArr" 
				:key="index" v-show="index===mark">
					<img :src="item" alt="">
				</div>
			</transition-group>
			<div class="swiper_pagination">
				<span :class="index===mark?'pagination_item action':'pagination_item'" 
				v-for="(item,index) in swiperImgArr.length" :key="index"
				@click="change(index)">
				</span>
			</div>
		</div>
		<div class="soprt_item" v-for="(item,index) in sportJilu">
			<router-link :to="item.href">
				<img :src="item.imgUrl" alt="">
				<p>{{item.title}}</p>
			</router-link>
		</div>
		<div class="sport_btn">
			开始训练
		</div>
		<div class="top_zhanwei"></div>
		<Footernav />
	</div>
</template>
<script>
	import Footernav from "../../components/footernav"
	import Publichead from "../../components/publichead"
	export default{
		name:"sport",
		data(){
			return{
				mark:0,
				swiperImgArr:[
					require("../../assets/images/sport01.png"),
					require("../../assets/images/sport02.jpg"),
					require("../../assets/images/sport03.jpg")
				],
				headArr:{
					leftUrl:"",
					curIcon:"icon-yuanquanjiantouyou",
					curTitle:"运动",
					rightUrl:""
				},
				sportJilu:[
					{
						title:"运动记录",
						imgUrl:require("../../assets/images/sport02.png"),
						href:"/layout/sport/sportJl"
					},
					{
						title:"运动挑战",
						imgUrl:require("../../assets/images/sport03.png"),
						href:"/layout/sport/sportTz"
					}
				]
			}
		},
		components:{
			Footernav,
			Publichead
		},
		computed:{
			
		},
		methods:{
			change(index){
				this.mark=index
			},
			autoPlay(){
				this.mark++;
				if(this.mark===this.swiperImgArr.length){
					this.mark=0;
					return;
				}
			},
			play(){
				setInterval(this.autoPlay,3000)
			}
		},
		created(){
			this.play()
		}
	}
</script>
<style scoped lang="less">
	.imgStyle-enter-active,.imgStyle-leave-active{
		transition: opacity 1s;
	}
	.imgStyle-enter,.imgStyle-leave-to{
		opacity: 0;
	}
	.sport_wrap{
		.top_zhanwei{
			width: 100%;
			height: 50 / 50rem;
		}
		.swiper_wrap{
			width: 100%;
			height: 400 / 2 / 50rem;
			overflow: hidden;
			position: relative;
			.swiper_container{
				width: 300%;
				height: 100%;
				.swiper_slide{
					float: left;
					width: 33.33%;
					height: 100%;
					img{
						width: 100%;
						height: 100%;
					}
				}
			}
			.swiper_pagination{
				position: absolute;
				bottom: 10 / 50rem;
				left: 0;
				right: 0;
				text-align: center;
				span.pagination_item{
					border-radius: 50%;
					display: inline-block;
					width: 20 / 2 / 50rem;
					height: 20 / 2 / 50rem;
					// background-color: #6954fd;
					background-color: #5b95d8;
					margin: 0 10 / 2 / 50rem;
				}
				span.action{
					background-color: #6954fd;
				}
			}
		}
		.soprt_item{
			width: 95%;
			height: 228 / 2 / 50rem;
			margin: 30 / 2 / 50rem auto;
			border-radius: 8 / 2 / 50rem;
			// background-image: url("../assets/images/sport02.png");
			// background-size: cover;
			box-shadow: 0 0 10 / 50rem 2 / 50rem rgba(0,0,0,0.3);
			position: relative;
			img{
				width: 100%;
				height: 100%;
			}
			p{
				position: absolute;
				top: 90 / 2 / 50rem;
				left: 60 / 2 / 50rem;
				z-index: 66;
				color: #666;
				font-size: 18 / 50rem;
				font-weight: bolder;
				letter-spacing: 6 / 2 / 50rem;
			}
		}
		.curbgImg{
			background-image: url("../../assets/images/sport03.png");
		}
		.sport_btn{
			width: 570 / 2 / 50rem;
			height: 78 / 2 / 50rem;
			margin: 45 / 2 / 50rem auto;
			color: #967bd5;
			font-size: 20 / 50rem;
			font-weight: bolder;
			border: 2 / 50rem solid #967bd5;
			border-radius: 8 / 2 / 50rem;
			text-align: center;
			line-height: 78 / 2 / 50rem;
			background-color: #fff;
		}
	}
</style>