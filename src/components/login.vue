<template>
    <div class="loginPage" >
        <div class="background"  @click="isShow"></div>
        <div class="loginPanel" >
            <div class="content">
            <div class="pic"><img :src="logo"></div>
            <div class="login1" v-show="isLogin1">
                <div class="input"><input type="text" placeholder="输入您的邮箱" v-model.lazy="loginEmail"></div>
                <div :class="['Error',loginEmailError?'show':'']">邮箱格式错误</div>
                <div class="select"><div class="register"><a href="#" @click="goRegister">没有账号?注册</a></div><div class="continue"><button @click="loginCheckEmail">继续</button></div></div>
            </div>
            <div class="login2" v-show="isLogin2">
                <div class="input"><input type="password" placeholder="输入密码" v-model.lazy="loginPw"></div>
                <div :class="['Error',loginPwError?'show':'']">密码错误</div>
                <div class="select"><div class="forget_pw"><a href="#">忘记密码</a></div><div class="continue"><button @click="loginCheckPw">登录</button></div></div>
            </div>
            <div class="register_inf" v-show="isRegister">
                <div><input type="text" placeholder="输入昵称" v-model.lazy="registerNickName"></div>
                <div :class="['Error', registerNickNameError?'show':'']">昵称不为空</div>
                <div><input type="text" placeholder="输入邮箱" v-model.lazy="registerEmail"></div>
                <div :class="['Error',registerEmailError?'show':'']">邮箱格式错误</div>
                <div><input type="password" placeholder="输入密码" v-model.lazy="registerPw"></div>
                <div :class="['Error',registerPwError?'show':'']">密码为8位以上数字字母混合</div>
                <div><input type="password" placeholder="确认密码" v-model.lazy="registerPw2"></div>
                <div :class="['Error', registerPw2Error?'show':'']">密码不一致</div>
                <div class="select1"><button class="b1" @click="goLogin1">返回</button></div> <div><button class="b2" @click="checkRegister">注册</button></div>
            </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                loginEmail:"",
                loginPw:"",
                registerNickName:"",
                registerEmail:"",
                registerPw:"",
                registerPw2:"",
                loginEmailError:false,
                loginPwError:false,
                registerNickNameError:false,
                registerEmailError:false,
                registerPwError:false,
                registerPw2Error:false,
                isLogin1:true,
                isLogin2:false,
                isRegister:false,
                logo:require("@/assets/logo.png")
            }
        },
        methods:{
            loginCheckEmail:function(){
                let pat=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
               if (pat.test(this.loginEmail)){
                   this.goLogin2()
               }else{
                   this.loginEmailError=true
               }

            },
            loginCheckPw:function () {
                let loginJson= new Object();
                    loginJson.email=this.loginEmail
                    loginJson.password=this.loginPw
                    loginJson.rememberMe=0
                   this.axios.post("/api/login",loginJson).then(
                       resp=>{
                           if (resp.headers.token) {
                                localStorage.setItem("token",resp.headers.token)
                                localStorage.setItem("id",resp.headers.id)
                                location.reload()
                           }else{
                               this.loginPwError=true
                           }
                       }
                   )
            },
            checkRegister:function () {
                let patEmail=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
                let patNickName=/^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/
                let patPw=/^[A-Za-z0-9]+$/
                let e1=patEmail.test(this.registerEmail)
                let e2=patNickName.test(this.registerNickName)
                let e3=patPw.test(this.registerPw)
                let e4=this.registerPw==this.registerPw2
                if(!e1){
                    this.registerEmailError=true
                }
                if(!e2){
                    this.registerNickNameError=true
                }
                if (!e3){
                    this.registerPwError=true
                }
                if (!e4){
                    this.registerPw2Error=true
                }
                if (e1 && e2 && e3 && e4) {
                    let visitor = new Object();
                       visitor.nickName=this.registerNickName
                      visitor.email=this.registerEmail
                    visitor.password=this.registerPw
                     this.axios.post("/api/visitor/addVisitor",visitor).then(
                         resp=>{
                             this.goLogin1()
                         }
                     )
                }
            }
            ,
            goLogin1:function(){
               this.isLogin2=false
               this.isRegister=false
               this.isLogin1=true
            },
            goLogin2:function () {
                this.isLogin1=false
                this.isRegister=false
                this.isLogin2=true
            },
            goRegister:function () {
                this.registerEmailError=false
                this.registerNickNameError=false
                this.registerPwError=false
                this.registerPw2Error=false
                this.isLogin1=false
                this.isLogin2=false
                this.isRegister=true
            },
            isShow:function () {
                this.$emit('changeIsShow')
                this.goLogin1()
            }
        }
    }
</script>

<style scoped>
    .background{
        z-index: 2;
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: #000;
        opacity: 0.3;
    }
.loginPanel{
    padding: 20px 0px;
    z-index: 2;
    width: 400px;
    height: 400px;
    position: fixed;
    top:50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    background-color:white;
    border-radius: 5px;
}
    .content{
        width: 236px;
        margin: 0 auto;
    }
.pic{
   text-align: center;
}
.pic img{
    width: 120px;
    height: 80px;
}
    input{
        border-radius: 4px;
        color: #202124;
        font-size: 17px;
        height: 28px;
        margin: 1px 1px 0 1px;
        padding: 13px 15px;
        border: 1px solid #cccccc;
    }
  .login1{
      width: 100%;
  }
  .login2{
      width: 100%;
  }
  .select{
      margin-top: 30px;
  }
    .register{
        float: left;
        height: 35px;
    }
    .register a{
       color:  #16A085;
        line-height: 35px;
    }
    .continue{
        float: right;
    }
    .continue button{
        background:  #16A085;
        width: 87px;
        height: 35px;
        color: #fff;
        border: none;
        border-radius: 4px;
    }
    .forget_pw{
        float: left;
        height: 35px;
    }
    .forget_pw a{
        color:  #16A085;
        line-height: 35px;
    }
    .register_inf{
        width: 100%;
    }
    .register_inf input{
        height: 20px;

    }
    .register_inf div{
        margin-bottom: 2px;
    }
    .register_inf button{
        background:  #16A085;
        width: 87px;
        height: 35px;
        color: #fff;
        border: none;
        border-radius: 4px;
    }
    .b1{
        float: left;
    }
    .b2{
        float: right;
    }
.select1{
    margin-top: 10px;
}
.Error{
    color: red;
    font-size: 12px;
    display: none;
}
    .show{
        display: block;
    }
</style>