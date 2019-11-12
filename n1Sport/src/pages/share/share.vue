<template>
	<div class="share_wrap">
		<Publichead :leftUrl="headArr.leftUrl"
			:curIcon="headArr.curIcon"
			:curTitle="headArr.curTitle"
			:rightUrl="headArr.rightUrl"
		/>
		<div class="top_zhanwei"></div>
		share
		<Footernav />
	</div>
</template>
<script>
	import Footernav from "../../components/footernav"
	import Publichead from "../../components/publichead"
	export default{
		name:"share",
		data(){
			return{
				headArr:{
					leftUrl:"",
					curIcon:"icon-yuanquanjiantouyou",
					curTitle:"分享",
					rightUrl:""
				}
			}
		},
		components:{
			Footernav,
			Publichead
		}
	}
</script>
<style scoped lang="less">
	.share_wrap{
		.top_zhanwei{
			width: 100%;
			height: 50 / 50rem;
		}
	}
</style>