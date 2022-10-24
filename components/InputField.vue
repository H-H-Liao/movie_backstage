<template>
    <div class="row_item">
        <div class="col_label">
            {{label}}
        </div>
        <div class="col_input">
           <slot></slot>
        </div>
         <div v-if="append" class="col_back" >
            {{append}}
        </div>
    </div>
</template>

<script>
export default {
    props:{
        label:{
            type:String
        },
        append:{
            type:String
        }
    }
}
</script>


<style>
    .row .col_3_1:not(:first-child) .row_item{
         padding-left: 20px;
    }
    .row .col_2_1:not(:first-child) .row_item{
         padding-left: 20px;
    }
    .row .col_4_1:not(:first-child) .row_item{
         padding-left: 20px;
    }
    .row .col_6_1:not(:first-child) .row_item{
         padding-left: 20px;
    }
    .row_item{
        display: flex;
    }
    .col_label{
        flex:0 0 120px;
        display: flex;
        align-items:center;
        font-size: 20px;
    }
    .col_input{
        flex:1 0;
        padding-left: 8px;
    }
    .col_back{
        flex:0 0 60px;
        padding-left: 8px;
    }
</style>
