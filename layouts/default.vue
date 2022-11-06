<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo side"
      @open="handleOpen"
      @close="handleClose"
      background-color="#363d4d"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="0">
        <i class="el-icon-odometer"></i>
        <span slot="title">儀表板</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-goods"></i>
          <span>電商管理</span>
        </template>
        <el-menu-item-group title="訂單與商品">
          <el-menu-item index="1-1">
            <router-link to="order">訂單管理</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
            <router-link to="stock">庫存管理</router-link>
            </el-menu-item>
          <el-menu-item index="1-3">
            <router-link to="product">商品管理</router-link>
            </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="行銷">
          <el-menu-item index="2-1" disabled="true">促銷活動管理</el-menu-item>
          <el-menu-item index="2-2">
            <router-link to="member">會員管理</router-link>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="設定">
          <el-menu-item index="3-1">
            <router-link to="payment">付款方式</router-link>
          </el-menu-item>
          <el-menu-item index="3-2">
            <router-link to="shipment">貨運方式</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-chat-round"></i>
        <span slot="title">
          <router-link to="serviceroom">客服聊天室</router-link>
        </span>
      </el-menu-item>
    </el-menu>
    <div class="header">

    </div>
    <div class="content">
      <Nuxt></Nuxt>
    </div>
    <div class="chart">

    </div>
  </div>
</template>

<script>
import MenuItemExtend from '/components/menu/MenuItemExtend.vue'
import MenuGroup from '/components/menu/MenuGroup.vue';

export default {
  components: {
        MenuItemExtend,
        MenuGroup
  },

}
</script>


<style >
  body{
    margin: 0px;
    font-family: 'Noto Sans TC', '微軟正黑體', sans-serif;
  }
  a{
    color:inherit;
    text-decoration: none;
  }

  .header{
    position: fixed;
    top: 0px;
    left: 240px;
    width: calc(100% - 240px);
    background-color: white;
    height: 50px;
    box-shadow: -1px -3px 8px rgba(0, 0, 0, 0.3);
    z-index: 999;
  }
  .side{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 240px;
    height: 100vh;
    overflow-y: auto;
  }
  .content{
    position: fixed;
    top: 50px;
    left: 240px;
    width: calc(100% - 240px);
    height: calc(100vh - 50px);
    overflow-y: auto;
    background-color: rgb(248, 248, 248);
    box-sizing: border-box;
  }
  @media (max-width:1024px) {
    .side{
      width: 0px;
    }
    .header{
      left: 0px;
      width: 100%;
      background-color: rgb(54,61,77);
    }
    .content{
      left: 0px;
      width: 100%;
    }
  }

  .breadcrumbs{
    background-color: white;
    padding:  18px 12px;
  }
  .main{
    margin:18px;
    padding:24px 12px;
    background-color: white;
  }
  .chart{
    position: fixed;
    right: 40px;
    bottom: 40px;
    border-radius: 100%;
    width: 60px;
    height: 60px;
    background-color: rgb(54,61,77);
  }
  .flex_cc{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
