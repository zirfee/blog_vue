<template>
    <div class="leaveMessage">
        <nav_bar></nav_bar>
        <login v-show="isShow" @changeIsShow="changeIs"></login>
        <div class="content">
             <div class="leave">
                 <div class="t">我要留言:</div>
                 <div class="textArea"><textarea v-model="message" @focus="checkIsLogin"></textarea></div>
                 <div class="submit"><div class="emoji"><img :src="smile"></div><button @click="submit">提交</button></div>
             </div>
              <div class="messages">
                   <div class="t2">所有留言</div>
                  <div class="all_message">
                      <div class="message_item" v-for="(item,index) in message_info" :key="index">
                          <div class="img"><img :src="visitor_head"></div>
                          <div class="border_img"><img :src="border"></div>
                          <div class="message_content">
                              <div class="nickname">{{item.visitorName}}<span style="font-weight: bold">:</span></div>
                              &nbsp&nbsp&nbsp&nbsp{{item.messageContent}}
                              <div class="time"><img :src="clock">{{dateFormat(new Date(item.messageTime))}}</div>
                          </div>
                      </div>
                  </div>
              </div>
        </div>
    </div>
</template>

<script>
    import nav_bar from "@/components/nav_bar"
    import login from "@/components/login"
    import {dateFormat} from "@/static/jsUtils/dateFormat";

    export default {
        name: "LeaveMessage",
       data(){
            return{
                isShow:false,
                message:"",
                message_info:0,
                smile:require("@/assets/smile.png"),
                visitor_head:require("@/assets/visitor.png"),
                border:require("@/assets/message_border.png"),
                clock:require("@/assets/clock.png")
            }
       },
        methods:{
            submit:function () {
                if(localStorage.getItem("id")) {
                    let messageJson = new Object()
                    messageJson.visitorId = localStorage.getItem("id")
                    messageJson.content = this.message
                    this.axios.defaults.headers.common['token'] = localStorage.getItem('token')
                    this.axios.post("/api/message/sendMessage", messageJson).then(
                        resp => {
                           location.reload()
                        }
                    )
                }else {
                    this.isShow=true
                }
            },
           dateFormat,
            checkIsLogin:function () {
                if(!localStorage.token){
                    this.isShow=true
                }
            },
            changeIs:function () {
                this.isShow=!this.isShow
            }
        },
        components:{
            nav_bar,
            login
        },
        created() {
          this.axios.get("/api/message/getMessages").then(
              resp=>{
                 this.message_info=resp.data.data
              }
          )
        }
    }
</script>

<style scoped>
.leaveMessage {
    width: 100%;
}
    .content{
        width: 100%;
        background-color: #faf7f7;
        margin-top: 20px;
        padding: 2%;
        width: 96%;
    }
    .leave{
        height: 200px;
    }
   .messages{
       width: 100%;
       height: 500px;
       margin-top: 20px;
   }
   .t{
       color: #462C2C;
       font-size: 18px;
       font-weight: bold;
       margin-bottom: 5px;
   }
   .t2{
       width: 100%;
       color: #462C2C;
       font-size: 18px;
       font-weight: bold;
       margin-bottom: 5px;
       text-align: center;
   }
   .textArea{
       width: 100%;
   }
    .textArea textarea{
        font-family: STFangsong;
        resize: none;
        outline: none;
        font-size: 14px;
        padding: 5px;
        border: none;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 100%;
        height: 100px;
        -webkit-box-shadow: 0 0 8px rgba(0,0,0,.4);
        box-shadow: 0 0 8px rgba(0,0,0,.4);
        -webkit-appearance: textarea;
        background-color: white;
        -webkit-rtl-ordering: logical;
        flex-direction: column;
        cursor: text;
        white-space: pre-wrap;
        overflow-wrap: break-word;
        ext-rendering: auto;
        color: initial;
        letter-spacing: normal;
        word-spacing: normal;
        text-transform: none;
        text-indent: 0px;
        text-shadow: none;
        display: inline-block;
        text-align: start;
        font: 400 13.3333px Arial;
    }
    .submit{
        width: 100%;
    }
    .emoji{
        float: left;
    }
    .emoji img{
        width: 25px;
        height: 25px;
    }
.submit button{
    float: right;
    width: 60px;
    height: 30px;
    background-color: #5BC0DE;
    border-radius: 5px;
    border: 0px;
    text-align: center;
    color: #eeeeee;
}
    .all_message{
        width: 100%;
        min-height: 90px;
    }
    .message_item{
        width: 100%;
        height: 100px;
        margin-bottom: 10px;
    }
    .img{
        float: left;
        width: 6%;
        height: 100px;
        text-align: center;
    }
    .img img{
        margin-top: 30px;
        width: 40px;
        height: 40px;
    }
    .border_img{
        position: relative;
        z-index: 1;
        float: left;
        margin-top: 35px;
        background-color: #faf7f7;
        margin-right: -8px;
    }
    .border_img img{
        width: 40px;
        height: 30px;
    }
    .message_content{
        float: left;
        position: relative;
        padding: 10px;
        width: 85%;
        height: 70px;
        margin-top: 5px;
        border:1px solid #647155;
        border-radius: 8px;
        box-shadow:0px 0px  5px  #2E3033;
    }
    .time{
        position: absolute;
        right: 10px;
        bottom: 0px;
    }
    .time img{
        width: 18px;
        height: 18px;
    }
</style>