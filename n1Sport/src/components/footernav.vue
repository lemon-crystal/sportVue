<template>
	<div class="footernav">
		<ul>
			<li>
				<router-link  to="/layout/sport">
					<i class="iconfont icon-hfenlei6"></i>
					运动
				</router-link>
			</li>
			<li>
				<router-link to="/layout/course">
					<i class="iconfont icon-rexiao"></i>
					教程
				</router-link>
			</li>
			<li>
				<router-link to="/layout/share">
					<i class="iconfont icon-fenxiang"></i>
					分享
				</router-link>
			</li>
			<li>
				<router-link to="/layout/mine">
					<i class="iconfont icon-yonghurenxiang"></i>
					我的
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	import "../assets/iconfont/iconfont.css"
	export default{
		name:'footernav',
		data(){
			return{

			}
		}
	}
</script>
<style scoped lang="less">
	.footernav{
		width: 100%;
		height: 50 / 50rem;
		background-color: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		// border-top: 1/50rem solid #ff5555;
		box-shadow: 0 0 5 / 50rem 2 / 50rem #dadada; 
		ul{
			width: 95%;
			margin: 0 auto;
			display: flex;
			li{
				flex:1;
				font-size: 12 / 50rem;
				text-align: center;
				color: #a9a9a9;
				font-weight: bolder;
				i{
					display: block;
					margin-top: 6 / 50rem;
					font-size: 20 / 50rem;
					margin-bottom: 5 / 50rem;
				}
			}
		}
	}
	.router-link-active{
		color: #8c6ddb;
	}
</style>