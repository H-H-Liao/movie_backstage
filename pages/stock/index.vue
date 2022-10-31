<template>
  <div>
    <div class="breadcrumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">庫存</a></el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="main">
      <div class="stock_header">
          <div class="flex_image">
              圖片
          </div>
          <div class="flex_id">貨品編號</div>
          <div class="flex_title">
              標題
          </div>
          <div class="flex_status">
              狀態
          </div>
          <div class="flex_stock">
              庫存
          </div>
          <div class="flex_button">
              動作
          </div>
      </div>
      <div v-for="($product_item,$product_key) in product_list" :key="$product_key" class="product_item">
          <div class="product-item_header">
              <div class="flex_image">
                  <div class="product_image"></div>
              </div>
              <div class="flex_id">{{$product_item.sku}}</div>
              <div class="flex_title">
                  {{$product_item.name}}
              </div>
              <div class="flex_status">
                  開啟
              </div>
              <div class="flex_stock">
                  {{$product_item.stock}}
              </div>
               <div class="flex_button">
                    <el-button>增加</el-button>
                    <div class="stock_input">
                      <el-input type="number" value="0"></el-input>
                    </div>
                    <el-button>減少</el-button>
                </div>
          </div>
          <div v-if="$product_item.has_spec">
            <div  v-for="($spec_item,$spec_key) in $product_item.spec_list" :key="$spec_key" class="product-item_spec">
                <div class="product-item_spec-item">
                    <div class="flex_image"></div>
                    <div class="flex_id">{{$spec_item.sku}}</div>
                    <div class="flex_spec">{{$spec_item.spec1}}</div>
                    <div class="flex_spec">{{$spec_item.spec2}}</div>
                    <div class="flex_status">
                        開啟
                    </div>
                    <div class="flex_stock">50</div>
                    <div class="flex_button">
                      <el-button>增加</el-button>
                      <div class="stock_input">
                        <el-input type="number" value="0"></el-input>
                      </div>
                      <el-button>減少</el-button>
                    </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data:function(){
        return {
          product_list:[
            {
              sku:"123",
              name:"造型口罩",
              status:true,
              stock:1,
              has_spec:true,
              spec_list:[
                {
                  "sku":"R1",
                  "spec1":"紅色",
                  "spec2":"小孩",
                },
                {
                  "sku":"G1",
                  "spec1":"綠色",
                  "spec2":"小孩",
                },
                {
                  "sku":"R2",
                  "spec1":"紅色",
                  "spec2":"大人",
                },
                {
                  "sku":"G2",
                  "spec1":"綠色",
                  "spec2":"大人",
                }
              ]
            },
            {
              sku:"123",
              name:"口罩",
              status:true,
              stock:1,
              has_spec:false,
              spec_list:[
                {
                  "sku":"K123",
                  "spec1":"紅色",
                  "spec2":"XL",
                }
              ]
            },
            {
              sku:"123",
              name:"造型口罩",
              status:true,
              stock:1,
              has_spec:true,
              spec_list:[
                {
                  "sku":"R1",
                  "spec1":"紅色",
                  "spec2":"小孩",
                },
                {
                  "sku":"G1",
                  "spec1":"綠色",
                  "spec2":"小孩",
                },
                {
                  "sku":"R2",
                  "spec1":"紅色",
                  "spec2":"大人",
                },
                {
                  "sku":"G2",
                  "spec1":"綠色",
                  "spec2":"大人",
                }
              ]
            },
          ],

        }
    }

}
</script>

<style scoped>
    .stock_header{
        display: flex;
        background-color: white;
        border:1px solid rgb(231, 231, 231);
        border-bottom: 0px;
    }
    .product_item{
        border:1px solid rgb(231, 231, 231);
        background-color: white;
        border-top: 0px;
    }
    .product-item_header{
        display: flex;
    }
    .product_image{
        width: 60px;
        height: 60px;
        background-color: gray;
    }

    .product-item_spec-item{
        display: flex;
    }
    .flex_select{
        flex: 0 0 60px;
        padding:12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .flex_image{
        flex: 0 0 84px;
        padding:12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .flex_id{
        flex: 0 0 10%;
        padding:12px;
        display: flex;
        align-items: center;
    }
    .flex_title{
        flex: 0 0 20%;
        padding:12px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
    }
    .flex_spec{
        flex: 0 0 10%;
        padding:12px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
    }
    .flex_status{
        flex: 0 0 10%;
        padding:12px;
        display: flex;
        align-items: center;
    }
    .flex_stock{
        flex: 0 0 10%;
        padding:12px;
        display: flex;
        align-items: center;
    }
    .flex_button{
        flex:0 0 20%;
        padding:12px;
        display: flex;
        align-items: center;
    }
    .stock_input{
        margin-left: 12px;
        margin-right: 12px;
        height: fit-content;
        width: 50px;
        padding-top:-24px;
        text-align: center;
    }
    .stock_input:focus{
        outline:none;
    }

</style>
