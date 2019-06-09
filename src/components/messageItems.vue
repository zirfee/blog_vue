<template>
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
</template>

<script>
    import {dateFormat} from "@/static/jsUtils/dateFormat";
    export default {
        name: "messageItems",
        data(){
            return{
                visitor_head:require("@/assets/visitor.png"),
                border:require("@/assets/message_border.png"),
                clock:require("@/assets/clock.png"),
                message_info:0
            }
        },
        methods:{
            dateFormat
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