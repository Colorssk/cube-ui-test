<template>
  <transition name="slide">
    <div class="user-center">
      <div class="back" @click="back">
        <i class="icon-back"></i>
       </div>
    <div >
		<form>
			<div >
				<label>用户名</label>
				<p><input placeholder="请输入用户名..." v-model="name"/></p>
			</div>
			<div>
				<label>密码</label> 
				<p><input v-model="pwd" type="password" placeholder="请输入密码..."/></p> 
			</div>
			<br/>
			<button @click="isLogin">登陆</button> 
		</form>
		</div>
   </div>

  </transition>
</template>

<script type="text/ecmascript-6">

  export default {
			data() {
				return {
					name:'',
					pwd:'',
					error:''
				}
			},
			computed: {
				user() {
					return this.$store.state.user
				}
			},
			methods:{
				isLogin:function() {
					this.$http.get('http://localhost:3000/users?username='+this.name+'&password='+this.pwd).then((response) => { 
						//这里在isLogin方法中先判断一下后台返回的是否为空值，如果不是然后提交后台返回的值。
						//注意这里是个难点，Vuex与Vue-Resource结合使用。 
						if(response.body != null & response.body.length > 0){ 
							this.$store.commit('isLogin',response.body[0]);
							this.name=''
							this.pwd= ''
							console.log('验证成功')
							this.$router.push({ path: 'Main' }) 
						}else{
							alert('请输入正确的用户名和密码！！！');
							this.name=''
							this.pwd= ''
						}
						
					}).then((error)=> this.error = error)
				},
				back() {
       this.$router.back()
      }
			}

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
.user-center
    position: fixed
    top: 0
    bottom: 0
    z-index: 100
    width: 100%
    background: $color-background
    &.slide-enter-active, &.slide-leave-active
      transition: all 0.3s
    &.slide-enter, &.slide-leave-to
      transform: translate3d(100%, 0, 0)
    .back
      position absolute
      top: 0
      left: 6px
      z-index: 10000
      .icon-back
        display: block
        padding: 10px
        font-size: $font-size-large-x
        color: $color-theme
  
</style>