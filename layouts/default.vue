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
@import url(//fonts.googleapis.com/earlyaccess/notosanstc.css);

  body{
    margin: 0px;
    padding: 0px;
    font-family: 'Noto Sans TC', sans-serif !important;
  }

  .side{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 240px;
    height: 100vh;
    overflow-y: auto;
    background-color: #444354;
    color:rgb(241,242,243);
  }
  .content{
    position: fixed;
    top: 0px;
    left: 240px;
    width: calc(100vw - 240px);
    height: calc(100vh);
    overflow-y: auto;
    /* background-color: rgb(248, 248, 248); */
    box-sizing: border-box;
  }

  .main{
    padding:15px;
    background-color: white;
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
