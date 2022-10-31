<template>
  <div>
      <div class="breadcrumbs">
          <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
              <el-breadcrumb-item><a href="/">庫存</a></el-breadcrumb-item>
          </el-breadcrumb>
      </div>
      <div class="main">
          <div class="product_function_group">
              <div class="product_function">
                  <div>
                    <el-select
                      v-model="value"
                      multiple
                      collapse-tags
                      collapse-tags-tooltip
                      placeholder="Select"
                      style="width: 240px"
                      >
                      <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                      />
                      </el-select>
                    <el-select id="aa1" v-model="value" placeholder="Select" >
                      <el-option
                      v-for="item in displayList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                      />
                  </el-select>
                  </div>

                  <el-button type="info">新增商品</el-button>
                  <el-button type="info">匯入商品</el-button>
                  <!-- <el-button type="info">匯出商品</el-button> -->
              </div>
              <div class="product_function">
                  <el-select id="bb1" v-model="value2" class="m-2" placeholder="Select" >
                      <el-option
                      v-for="item in displayList2"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                      />
                  </el-select>
              </div>
          </div>
          <!-- <el-divider /> -->
          <el-table
              ref="multipleTableRef"
              :data="list"
              stripe
          >
              <el-table-column fixed type="selection" width="55" />
              <el-table-column fixed property="name" label="名稱" width="120" />
              <el-table-column property="status" sortable label="狀態" width="120" />
              <el-table-column  label="圖片" width="120">
                  <template #default="scope">
                      <img class="product_image" :src="scope.row.image_url">
                  </template>
              </el-table-column>
              <el-table-column property="spec" label="規格" width="120" />
              <el-table-column property="price" label="價格" width="120" />
              <el-table-column property="stock" label="庫存"  />
              <el-table-column fixed="right" label="功能" >
                  <template #default>
                      <el-button  size="small"
                      >商品管理</el-button>
                      <el-button size="small">庫存管理</el-button>
                  </template>
              </el-table-column>
          </el-table>
          <div class="flex_cc">
              <el-pagination background layout="prev, pager, next" :total="1000" />
          </div>
          <div>商品數量:0/無限</div>
      </div>
      </div>
  </template>

  <script>

  export default {
    data:function(){
      return {
        options:[
                            {
                            value: 'Option1',
                            label: '已上架',
                            },
                            {
                            value: 'Option2',
                            label: '已下架',
                            }
        ],
      displayList2:[
                            {
                            value: 'aaa',
                            label: '已上架2',
                            },
                            {
                            value: 'bbb',
                            label: '已下架2',
                            }
                        ],
                        value:"Option1",
                        value2:"aaa",
                        list:[
                {
                    id:1,
                    status:"啟用",
                    name:"泡麵",
                    image_url:"https://www.bestbakery.com.tw/upload/20201203092824g4kta1.jpg",
                    price:300,
                    stock:300,
                    spec:'紅色,黃色'

                }
            ]
    }}
  }
  </script>


  <style scoped>
    .product_function_group{
        display: flex;
        padding-bottom: 12px;
        justify-content: space-between;
        width: 100%;
        box-sizing: border-box;
    }
    .product_function{
        display: flex;
    }
    .product_function_item{

    }

    .product_image{
        width: 100px;
        height: 100px;
        background-position: center;
        background-color: aqua;
        background-repeat: no-repeat;
        background-size: 100% 100%;

    }
    .button{
        width: fit-content;
        padding:4px;
        cursor: pointer;
        margin-right: 6px;
        margin-left: 6px;
    }

    .product_image{
        width: 100%;
    }
  </style>
