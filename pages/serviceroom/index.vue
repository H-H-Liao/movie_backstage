<template>
  <div class="service_room">
    <div class="service_room-side">
      <div class="search_bar">
        <el-input
        placeholder="請輸入關鍵字"
        prefix-icon="el-icon-search"
        ></el-input>
      </div>
      <div class="customer_item" v-for="($item,$key) in user_list" :key="$key" :class="{'active':$key==1}">
        <div class="customer_content">
          <el-avatar size="24">陳</el-avatar>
          <div class="customer_name">a先生</div>
        </div>
        <div class="message_count">50</div>
      </div>
    </div>
    <div class="service_room-main">
      <div class="service_room-content">
        <message-box v-for="($item,$key) in message_list" :key="$item" :is-right="$key%2==0?true:false"></message-box>
      </div>
      <div class="service_room-messagebar">
        <el-input v-model="text_message_input" placeholder="请输入内容"></el-input>
        <el-button>傳送</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import MessageBox from '/components/serviceroom/MessageBox.vue'

export default {
  components:{
    MessageBox
  },
  data:function(){
    return {
      text_message_input:"",
      user_list:[
        1,2,3
      ],
      message_list:[
        1,2,3,4,5
      ]
    }
  }
}
</script>

<style>
  .service_room{
    display:flex;
    height: 100%;
  }

  .service_room-side{
    flex:0 300px;
    background-color: white;
    height: 100%;
  }

  .search_bar{
    padding:12px;
  }
  .customer_item{
    display: flex;
    justify-content: space-between;
    padding:12px 24px;
  }
  .customer_item.active .customer_name{
    font-weight: bold;
  }
  .customer_content{
    display: flex;
  }
  .customer_name{
    margin-left: 8px;
    margin-right: 8px;
  }

  .message_count{
    font-size: 14px;
    background-color: gray;
    padding:2px;
    border-radius: 4px;
    text-align: center;
    color:black;
  }
  .el-avatar{
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .service_room-main{
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .service_room-content{
    background-color: gainsboro;
    flex:1 1 auto;
  }
  .service_room-messagebar{
    flex:0 0 40px;
    padding:12px;
    display: flex;
  }
</style>
