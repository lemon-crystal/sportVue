<template>
	<div class="reg_wrap">
		<div class="reg_container">
			<form>
				<i class="iconfont icon-user"></i>
				<input type="text" placeholder="请输入手机号">
				<br>
				<i class="iconfont icon-mima"></i>
				<input type="text" placeholder="请输入密码">
			</form>
		</div>
	</div>
</template>
<script>
	import "../assets/iconfont/iconfont.css"
	export default {
		name:'login',
		data(){
			return{
			}
		},
		methods:{}
	}
</script>
<style scoped lang="less">
	input::-webkit-input-placeholder { /* WebKit browsers */  
	  color: #a9a9a9;  
	}  
	input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */  
	  color: #a9a9a9;  
	}  
	input::-moz-placeholder { /* Mozilla Firefox 19+ */  
	  color: #a9a9a9;  
	}  
	input:-ms-input-placeholder { /* Internet Explorer 10+ */  
	  color: #a9a9a9;  
	} 
	.reg_wrap{
		width: 100%;
		height: 1334 / 2 / 50rem;
		background: url("../assets/images/loginbg.png");
		background-size:cover;
		overflow: hidden;
		.reg_container{
			width: 85%;
			height: 950 / 2 / 50rem;
			background-color: #fff;
			border-radius: 10 / 2 / 50rem;
			overflow: hidden;
			margin: 0 auto;
			margin-top: 160 / 2 / 50rem;
			box-shadow: 0 0 10 / 50rem 5 / 50rem #9c6be1;
		}
	}
</style>