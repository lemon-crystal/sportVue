<template>
	<div class="public_wrap">
		<div class="public_container">
			<div class="left_wrap">
				<router-link :to="leftUrl">
					<i :class="'iconfont '+ curIcon"></i>
				</router-link>
			</div>
			<div class="content_wrap">{{curTitle}}</div>
			<div class="right_wrap">
				<router-link :to="rightUrl">
					<i :class="'iconfont '+ rightIcon"></i>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
	import "../assets/iconfont/iconfont.css"
	export default{
		name:'publichead',
		data(){
			return{

			}
		},
		methods:{
		},
		props:{
			leftUrl:{
				type:String,
				default:""
			},
			curIcon:{
				type:String,
				default:"icon-yuanquanjiantouyou"
			},
			curTitle:{
				type:String,
				default:""
			},
			rightUrl:{
				type:String,
				default:""
			},
			rightIcon:{
				type:String,
				default:""
			}
		}
	}
</script>
<style scoped lang="less">
	.public_wrap{
		width: 100%;
		overflow: hidden;
		height: 50 / 50rem;
		background: linear-gradient(to right, #6156fd, #9d48fe);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 666;
		.public_container{
			width: 95%;
			height: 100%;
			margin: 0 auto;
			background: transparent;
			display:-webkit-flex;
 			display:flex;
			.left_wrap,.content_wrap,.right_wrap{
				float: left;
				text-align: center;
				height: 100%;
				line-height: 50 / 50rem;
				color: #fff;
			}
			.left_wrap,.right_wrap{
				width: 10%;
				i{
					font-size: 22 / 50rem;
				}
			}
			.content_wrap{
				-webkit-flex:1; 
 				flex:1; 
 				font-size: 18 / 50rem;
 				font-weight: bolder;
 				letter-spacing: 6 / 50rem;
			}
			.right_wrap{
			}
		}
	}
</style>