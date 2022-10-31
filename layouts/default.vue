<template>
  <div>
    <div class="side not-print">
      <menu-group title="電商管理" icon="mdi-shopping">
        <menu-item-extend url="order"  title="訂單管理"></menu-item-extend>
        <menu-item-extend url="stock"  title="庫存管理"></menu-item-extend>
        <menu-item-extend url="product"  title="商品管理"></menu-item-extend>
        <menu-item-extend url="member"  title="會員管理"></menu-item-extend>
      </menu-group>
      <menu-group title="設定" icon="mdi-shopping">
        <menu-item-extend url="payment"  title="付款方式"></menu-item-extend>
        <menu-item-extend url="shipment"  title="貨運方式"></menu-item-extend>
      </menu-group>
    </div>
    <div class="content">
      <Nuxt></Nuxt>
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
    background-color: rgb(54,61,77);
    color:rgb(241,242,243);
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
