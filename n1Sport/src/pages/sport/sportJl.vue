<template>
	<div class="sportJl">
		<Publichead :leftUrl="headArr.leftUrl"
			:curIcon="headArr.curIcon"
			:curTitle="headArr.curTitle"
			:rightUrl="headArr.rightUrl"
		/>
		<div class="top_zhanwei"></div>
		运动挑战
	</div>
</template>
<script>
	import Publichead from "../../components/publichead"
	export default{
		name:'sportJl',
		data(){
			return{
				headArr:{
					leftUrl:"/layout/sport",
					curIcon:"icon-yuanquanjiantouyou",
					curTitle:"运动记录",
					rightUrl:""
				}
			}
		},
		components:{
			Publichead
		}
	}
</script>
<style scoped lang="scss" type="text/css">
	.sportJl{
		.top_zhanwei{
			width: 100%;
			height: 50 / 50 * 1rem;
		}
	}
</style>