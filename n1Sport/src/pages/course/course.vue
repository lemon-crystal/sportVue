<template>
	<div class="course_wrap">
		<Publichead :leftUrl="headArr.leftUrl"
			:curIcon="headArr.curIcon"
			:curTitle="headArr.curTitle"
			:rightUrl="headArr.rightUrl"
		/>
		<div class="top_zhanwei"></div>
		<div class="container">
		</div>
		<div class="course_item">
			<div class="item" v-for="(item,index) in itemArr" :key="index">
				<img :src="item.imgUrl" alt="">
				<p>{{item.title}}</p>
			</div>
		</div>
		<div class="course_display">
			<p>全部课程</p>
			<div class="display_item" v-for="(item,index) in courseArr" :key="index">
				<img :src="item.imgUrl" alt="">
			</div>
		</div>
		<div class="top_zhanwei"></div>
		<Footernav />
	</div>
</template>
<script>
	import Footernav from "../../components/footernav"
	import Publichead from "../../components/publichead"
	export default{
		name:"course",
		data(){
			return{
				headArr:{
					leftUrl:"",
					curIcon:"icon-yuanquanjiantouyou",
					curTitle:"课程",
					rightUrl:""
				},
				itemArr:[
					{
						title:"定制",
						imgUrl:require("../../assets/images/course02.png")
					},
					{
						title:"音乐库",
						imgUrl:require("../../assets/images/course03.png")
					},
					{
						title:"挑战",
						imgUrl:require("../../assets/images/course04.png")
					}
				],
				courseArr:[
					{
						title:"减脂",
						imgUrl:require("../../assets/images/course05.png")
					},
					{
						title:"跑步",
						imgUrl:require("../../assets/images/course06.png")
					},
					{
						title:"塑性",
						imgUrl:require("../../assets/images/course08.png")
					},
					{
						title:"增肌",
						imgUrl:require("../../assets/images/course07.png")
					}
				]
			}
		},
		components:{
			Footernav,
			Publichead
		}
	}
</script>
<style lang="scss" scoped  type="text/css">
	.course_wrap{
		.top_zhanwei{
			width: 100%;
			height: 50 / 50 * 1rem;
		}
		.container{
			width:100%;
			height:323 / 2 / 50 * 1rem;
			background-image:url("../../assets/images/course01.png");
			background-size:cover;
		}
		.course_item{
			width:100%;
			height:160 / 2 / 50 *1rem;
			.item{
				width:33.3%;
				height:100%;
				background-color:#fff;
				float: left;
				text-align: center;
				img{
					width:60 / 2 / 50 *1rem;
					height:60 / 2 / 50 *1rem;
					margin-top: 30 / 2 / 50 *1rem;
				}
				p{
					margin-top: 15 / 2 / 50 *1rem;
				}
			}
		}
		.course_display{
			width:95%;
			height: 680 / 2 / 50 * 1rem;
			margin:20 / 2 / 50 * 1rem auto;
			padding:20 / 2 / 50 * 1rem;
			box-sizing: border-box;
			p{
				width: 100%;
				text-align: center;
				height: 75 / 2 / 50 * 1rem;
				line-height: 75 / 2 / 50 * 1rem;
				color:#8c57ff;
				font-weight: bolder;
				font-size:34 / 2 / 50 * 1rem;
			}
			.display_item{
				float: left;
				width: 312 / 2 / 50 *1rem;
				height: 268 / 2 / 50 *1rem;
				margin-bottom: 40 / 2 / 50 * 1rem;
				img{
					width: 100%;
					height: 100%;
				}
				&:nth-child(even){
					margin-right: 40 / 2 / 50 * 1rem;
				}
			}
		}
	}
</style>