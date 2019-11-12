<template>
	<router-link to="/guide">
		<div class="boot_wrap">
			<img src="../assets/images/qidong.png" alt="">
			<h3>千里之行  始于i动</h3>
			<div class="footer_title">
				<span>idong@{{curDate}} week.com. All rights reserved</span>
			</div>
		</div>
	</router-link>
</template>
<script>
	export default {
		name:'boot',
		data(){
			return{
				curDate:new Date().getFullYear()
			}
		}
	}
</script>
<style scoped lang="less">
	.boot_wrap{
		width: 100%;
		height: 1334 / 2 / 50rem;
		background-image: url("../assets/images/qidong_bg.png");
		background-size:cover;
		text-align: center;
		overflow: hidden;
		color: #fff;
		img{
			width: 173 / 2 / 50rem;
			height: 167 / 2 / 50rem;
			margin-top: 363 / 2 / 50rem;
		}
		h3{
			font-size: 20 / 50rem;
			font-weight: bolder;
			margin-top: 75 / 2 / 50rem;
		}
		.footer_title{
			font-size: 13 / 50rem;
			color: rgba(255,255,255,.9);
			margin-top: 550 / 2 / 50rem;
		}
	}
</style>