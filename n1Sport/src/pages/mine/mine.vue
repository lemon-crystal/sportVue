<template>
	<div class="mine_wrap">
		<Publichead :leftUrl="headArr.leftUrl"
			:curIcon="headArr.curIcon"
			:curTitle="headArr.curTitle"
			:rightUrl="headArr.rightUrl"
			:rightIcon="headArr.rightIcon"
		/>
		<div class="top_zhanwei"></div>
		<div class="mine_container">
			<div class="mine_showImg">
			</div>
			<div class="mine_msg">
				<div class="mine_icon">
					<img src="../../assets/images/loginImg.png" alt="">
				</div>
				<div class="mine_tit">
					<p>{{curUserName}}</p>
					<p>{{curPhnum}}</p>
					<p class="changeInput">
						<input type="text" 
						@blur="changeSign()" 
						v-model="curSignature">
					</p>
				</div>
			</div>
			<div class="mine_show_msg" v-for="(item,index) in itemArr" :key="index"> 
				{{item.title}}
				<i :class="'iconfont '+item.iconfont"></i>
			</div>
			<div class="logOut" @click="logOut()">
				<button>退出</button>
			</div>
		</div>
		{{getCookie}}
		<Footernav />
	</div>
</template>
<script>
	import Footernav from "../../components/footernav"
	import Publichead from "../../components/publichead"
	import  "../../assets/iconfont/iconfont.css"
	export default{
		name:"mine",
		data(){
			return{
				curUserName:'',
				curPhnum:"",
				curSignature:"",
				headArr:{
					leftUrl:"",
					curIcon:"icon-yuanquanjiantouyou",
					curTitle:"我的",
					rightUrl:"",
					rightIcon:""
				},
				itemArr:[
					{
						title:"个人动态",
						iconfont:"icon-double-forward"
					},
					{
						title:"运动等级",
						iconfont:"icon-double-forward"
					},
					{
						title:"我的勋章",
						iconfont:"icon-double-forward"
					}
				]
			}
		},
		components:{
			Footernav,
			Publichead
		},
		computed:{
			getCookie(){
				var curUser=JSON.parse(this.$cookie.get("curUser")).phonenumber,
				curUrl=this.HOST+"/query",
				curData={
					phonenumber:curUser
				};
				this.$axios.post(curUrl,curData)
				.then(res=>{
					// console.log(res.data[0])
					if(res.data.msg){
						this.$message({
							message: res.data.msg,
				        	type: 'error'
						})
					}else{
						this.curUserName=res.data[0].iconname,
						this.curPhnum=res.data[0].phonenumber,
						this.curSignature=res.data[0].signature;
						if(res.data[0].signature==null){
							this.curSignature="暂未设置签名"
						}
					}
				})
				.catch(error=>{
					console.log(error)
				})
			}
		},
		methods:{
			logOut(){
				this.$cookie.delete("curUser");
				this.$router.push('/login')
			},
			changeSign(){
				// console.log(this.curSignature)
				var curUser=JSON.parse(this.$cookie.get("curUser")).phonenumber,
				curUrl=this.HOST+"/updateSign",
				curData={
					phonenumber:curUser,
					signature:this.curSignature
				};
				this.$axios.post(curUrl,curData)
				.then(res=>{
					// console.log(res.data[0])
					if(res.data.msg){
						this.$message({
							message: res.data.msg,
				        	type: 'error',
				        	showClose: true
						})
					}else{
						if(res.data.changedRows=="1"){
							this.$message({
								message:"更改成功",
								type:"success",
								showClose: true
							})
						}
						// this.curSignature=res.data[0].signature;
						// if(res.data[0].signature==null){
						// 	this.curSignature="暂未设置签名"
						// }
					}
				})
				.catch(error=>{
					console.log(error)
				})
			}
		}
	}
</script>
<style scoped lang="less">
	.mine_wrap{
		width: 100%;
		overflow: hidden;
		.top_zhanwei{
			width: 100%;
			height: 50 / 50rem;
		}
		.mine_container{
			widows: 100%;
			overflow: hidden;
			.mine_showImg{
				width: 100%;
				height: 313 / 2 / 50rem;
				background:url("../../assets/images/minebg.png");
				background-size: cover;
			}
			.mine_msg{
				width: 95%;
				height: 200 / 2 / 50rem;
				background-color: #fff;
				margin: 30 / 2 / 50rem auto;
				margin-top: -100 / 2 / 50rem;
				border-radius: 10 / 2 / 50rem;
				box-shadow: 0 0  10 / 50rem 1 / 50rem #d0d0d0;
				overflow: hidden;
				.mine_icon,.mine_tit{
					float: left;
					height: 100%;
				}
				.mine_icon{
					width: 20%;
					text-align: center;
					img{
						width: 85 / 2 / 50rem;
						height: 85 / 2 / 50rem;
						margin-top: 35 / 2 / 50rem;
					}
				}
				.mine_tit{
					width: 80%;
					padding: 45 / 2 / 50rem 20 / 2 / 50rem;
					box-sizing: border-box;
					color: #4c4c4c;
					font-size: 14 / 50rem;
					p{
						margin: 8 / 2 /50rem 0;
					}
					.changeInput{
						input{
							width: 100%; 
							border: none;
							color:#4c4c4c;
							// outline: none;
						}
					}
				}
			}
			.mine_show_msg{
				width: 95%;
				height: 85 / 2 / 50rem;
				background-color: #fff;
				box-shadow: 0 0  10 / 50rem 1 / 50rem #d0d0d0;
				margin: 30 / 2 / 50rem auto;
				line-height:  85 / 2 / 50rem;
				border-radius: 6 / 2 / 50rem;
				padding:0 30 / 2 / 50rem;
				box-sizing: border-box;
				position: relative;
				i{
					position: absolute;
					right: 30 / 2 / 50rem;
				}
			}
			.logOut{
				width: 80%;
				height: 85 / 2 / 50rem;
				margin: 40 / 2 / 50rem auto;
				overflow: hidden;
				border-radius: 8 / 2 / 50rem;
				button{
					width: 100%;
					height: 100%;
					border:none;
					background-color: #8d4cfe;
					color: #fff;
					font-size: 18 / 50rem;
					letter-spacing: 10 / 50rem;
				}
			}
		}
	}
</style>