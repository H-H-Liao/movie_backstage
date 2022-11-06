<template>
  <div class="message_box" :class="{right:isRight}">
    <div class="message_box-title">
      <el-avatar size="24">陳</el-avatar>
      <div class="message_box-name">陳先生</div>
      <span class="message_box-time">08:56pm</span>
    </div>
    <div class="message_box-content">s</div>
  </div>
</template>

<script>
export default {
  props:{
    isRight:{
      type: Boolean,
      default:false
    }
  }
}
</script>


<style>
  .message_box{
    margin:6px 12px;
    display: flex;
    flex-direction:column;
  }
  .message_box.right{
    align-items: flex-end;
  }
  .message_box-title{
    display: flex;
    align-items: center;
  }
  .message_box.right .message_box-title{
    flex-direction: row-reverse;
  }
  .message_box-name{
    margin-right: 6px;
    margin-left: 6px;
  }
  .message_box-time{
    font-weight: bold;
    font-size: 12px;
    color:gray;
  }
  .message_box-content{
    margin:10px 32px;
    background-color: aquamarine;
    width: fit-content;
    padding:8px 14px;

  }
</style>
