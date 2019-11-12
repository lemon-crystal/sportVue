<template>
	<div class="login_wrap">
		<div class="login_container">
			<div class="login_uerImg_wrap">
				<img src="../assets/images/loginImg.png" alt="">
			</div>
			<div class="login_form_wrap" v-if="!isReg">
				<p>
					<i class="iconfont icon-user login_i"></i>
					<input type="text" placeholder="请输入手机号" @blur="checkPhone()" v-model="phoneNum">
					<i class="iconfont icon-guanbi close_i" @click="empty_value('phoneNum')"></i>
				</p>
				<p>
					<i class="iconfont icon-mima login_i"></i>
					<input type="password" placeholder="请输入密码" v-model="password"  @blur="checkPassword()">
					<i class="iconfont icon-guanbi close_i" @click="empty_value('password')"></i>
				</p>
				<input type="button" value="登录" class="loginBtn" @click="loginBtn()">
			</div>
			<div class="reg_wrap" v-else>
				<p>
					<i class="iconfont icon-user login_i"></i>
					<input type="text" placeholder="请输入手机号" @blur="checkPhone()" v-model="phoneNum">
					<i class="iconfont icon-guanbi close_i" @click="empty_value('phoneNum')"></i>
				</p>
				<p>
					<i class="iconfont icon-mima login_i"></i>
					<input type="password" placeholder="请输入密码" v-model="password"  @blur="checkPassword()">
					<i class="iconfont icon-guanbi close_i" @click="empty_value('password')"></i>
				</p>
				<p>
					<i class="iconfont icon-user login_i"></i>
					<input type="text" placeholder="请输入昵称" v-model="iconname"  @blur="checkIconname()">
					<i class="iconfont icon-guanbi close_i" @click="empty_value('iconname')"></i>
				</p>
				<input type="button" value="注册" class="regBtn" @click="regBtn()">
			</div>
			<div class="login_three_wrap">
				<fieldset class="oth_type_tit">
					<legend align="center" class="oth_type_txt">
						第三方登录
					</legend>
				</fieldset>
				<div class="oth_type_img">
					<img src="../assets/images/wx.png" alt="">
					<img src="../assets/images/qq.png" alt="">
					<img src="../assets/images/wb.png" alt="">
				</div>
			</div>
		</div>
		<div class="forget_reg_wrap">
			<p>
				<a href="javascript:;">忘记密码</a>
				<span>|</span>
				<a href="javascript:;" @click="register()">{{regStr}}</a>
				<!-- <router-link to="/register">
					立即注册
				</router-link>	 -->
			</p>
		</div>
	</div>
</template>
<script>
	import "../assets/iconfont/iconfont.css"
	export default {
		name:'login',
		data(){
			return{
				phoneNum:"",
				password:"",
				iconname:"",
				isPwd:false,
				isPnum:false,
				isIcon:false,
				isReg:false,
				regStr:"立即注册"
			}
		},
		methods:{
			register(){
				this.isReg=!this.isReg;
				if(this.isReg){
					this.regStr="返回登录";
				}else{
					this.regStr="立即注册"
				}
			},
			checkPhone(value){
				if(this.phoneNum==""){
					this.$message({
				        message: '手机号不能为空',
				        type: 'warning',
				        showClose: true
			        });
				}else{
					if(!(/^1[34578]\d{9}$/.test(this.phoneNum))){
						this.$message({
					        message: '请正确填写手机号',
					        type: 'warning',
					        showClose: true
				        });
					}else{
						this.isPnum=true;
					}
				}
			},
			checkIconname(){
				if(this.iconname==""){
					this.$message({
				        message: '昵称不能为空',
				        type: 'warning',
				        showClose: true
			        });
				}else{
					if(!(/^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(this.iconname))){
						this.$message({
					        message: '昵称只含有汉字、数字、字母、下划线不能以下划线开头和结尾',
					        type: 'warning',
					        showClose: true
				        });
					}else{
						this.isIcon=true;
					}
				}
			},
			checkPassword(){
				if(this.password==""){
					this.$message({
				        message: '密码不能为空',
				        type: 'warning',
				        showClose: true
			        });
				}else{
					if(!/^[A-Za-z0-9]{4,10}$/.test(this.password)){
						this.$message({
					        message: '密码为4-10位数字或字母',
					        type: 'warning',
					        showClose: true
				        });
					}else{
						this.isPwd=true;
					}
				}
			},
			loginBtn(){
				if(this.isPwd&&this.isPnum){
					var curUrl=this.HOST+"/login",
					curData={
						phonenumber:this.phoneNum,
						password:this.password
					};
					this.$axios.post(curUrl,curData)
					.then(res=>{
						if(res.data.msg){
							this.$message({
						        message: res.data.msg,
						        type: 'error',
						        showClose: true
					        });
						}else{
							// console.log(res.data[0])
							var curUser=res.data[0];
							this.$cookie.set('curUser',JSON.stringify(curUser),7)
							setTimeout(function(){
								this.$message({
							        message: '登录成功，跳转页面',
							        type: 'success',
							        showClose: true
						        });
                      			this.$router.push('/layout/sport')
                  			}.bind(this),1000)
						}
					})
					.catch(error => {
                		console.log(error)
                	})
				}else{
					this.$message({
				        message: '请先正确输入手机号和密码',
				        type: 'warning',
				        showClose: true
			        });
				}
			},
			regBtn(){
				if(this.isPwd&&this.isPnum&&this.isIcon){
					var regUrl=this.HOST+"/register",
					regData={
						phonenumber:this.phoneNum,
						password :this.password,
						iconname:this.iconname
					};
					this.$axios.post(regUrl,regData)
					.then(res=>{
						if(res.data.code=="0"){
							this.$message({
						        message: res.data.msg,
						        type: 'warning',
						        showClose: true
					        });
						}else if(res.data.code=="1"){
							this.$cookie.set('curUser',JSON.stringify(regData),7)
							setTimeout(function(){
								this.$message({
							        message: res.data.msg,
							        type: 'success',
							        showClose: true
						        });
                      			this.$router.push('/layout/sport')
                  			}.bind(this),1000);
						}else{
							this.$message({
						        message: res.data.msg,
						        type: 'warning',
						        showClose: true
					        });
						}
					})
					.catch(error=>{
						console.log(error)
					})
				}else{
					this.$message({
				        message: '请先正确输入再进行注册',
				        type: 'error',
				        showClose: true
			        });
				}
			},
			empty_value(value){
				// 传参不加引号得到input 中value
				console.log(value)
				if(value=="phoneNum"){
					this.phoneNum="";
				}else if(value=="password"){
					this.password=""
				}else{
					this.iconname=""
				}
			}
		}
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
	.login_wrap{
		width: 100%;
		height: 1334 / 2 / 50rem;
		background: url("../assets/images/loginbg.png");
		background-size:cover;
		overflow: hidden;
		.login_container{
			width: 85%;
			height: 950 / 2 / 50rem;
			background-color: #fff;
			border-radius: 10 / 2 / 50rem;
			overflow: hidden;
			margin: 0 auto;
			margin-top: 160 / 2 / 50rem;
			box-shadow: 0 0 10 / 50rem 5 / 50rem #9c6be1;
			.login_uerImg_wrap{
				margin-top: 100 / 2 / 50rem;
				text-align: center;
				img{
					width: 180 / 2 / 50rem;
					height:  180 / 2 / 50rem;
				}
			}
		}
		.login_form_wrap,.reg_wrap{
			width:100%;
			margin: 0 auto;
			margin-top: 100 / 2 / 50rem;
			text-align: center;
			p{
				position: relative;
				i.close_i{
					position: absolute;
					right: 150 / 2 / 50rem;
					top: 12 / 2 / 50rem;
					color: #a9a9a9;
				}
			}
			input{
				width: 260 / 2 / 50rem;
				margin-bottom: 30 / 2 / 50rem;
				border: 0;
				border-bottom: 1 / 50rem solid #a9a9a9;
				// 去除获得焦点时的边框
				outline: none;
				padding: 4 / 50rem 6 / 50rem;
				font-size: 15 / 50rem;	
				color: #a9a9a9;
			}
			.loginBtn,.regBtn{
				padding: 0;
				width: 555 / 2 / 50rem;
				height: 85 / 2 / 50rem;
				background-color: #ab8af3;
				color: #fff;
				text-align: center;
				border-radius: 40 / 2 / 50rem;
				margin-top: 30 / 2 / 50rem;
				font-size: 18 / 50rem;
				letter-spacing:10 / 50rem;
				font-weight: bolder;
				line-height: 90 / 2 / 50rem;
			}
			i.login_i{
				color: #8c57ff;
				font-weight: bolder;
				font-size: 18 / 50rem;
			}
		}
		.reg_wrap{
			margin-top: 60 / 2 / 50rem;
		}
		.login_three_wrap{
			width: 85%;
			height: 100 / 2 / 50rem;
			margin: 0 auto;
			margin-top: 30 / 2 / 50rem;
			.oth_type_tit {
			    border-top: 1px solid #e0e0e0;
			    padding-top: 10px;
			}
			.oth_type_txt {
			    font-size: 14px;
			    color: #a9a9a9;
			    margin: 0 auto;
			    text-align: center;
			}
			legend {
			    display: block;
			    -webkit-padding-start: 2px;
			    -webkit-padding-end: 2px;
			    border-width: initial;
			    border-style: none;
			    border-color: initial;
			    border-image: initial;
			}
			.oth_type_img{
				width: 100%;
				text-align: center;
				img{
					width: 44 / 2 / 50rem;
					height: 40 / 2 / 50rem;
					margin:20 / 2 / 50rem;
				}
			}
		}
		.forget_reg_wrap{
			color: #fff;
			width: 85%;
			height: 100 / 2 / 50rem;
			text-align: center;
			margin: 0 auto;
			margin-top: 50 / 2 / 50rem;
			font-size: 16 / 50rem;
			font-weight: bolder;
			p{
				span{
					display: inline-block;
					margin: 0 80 / 2 / 50rem;
				}
				a:active{
					color: #fff;
				}
			}
		}
	}
</style>