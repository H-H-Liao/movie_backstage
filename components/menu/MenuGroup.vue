<template>
    <div class="group">
        <div class="group_title_group" >
            <div class="group_title">
                <div class="item">{{title}} </div>
            </div>
        </div>
        <div v-if="open" class="group_content">
            <slot></slot>
        </div>
    </div>
</template>

<script>

export default {
    props:{
        title:{
            type:String,
            require:true
        },
        icon:{
            type:String,
            required:false
        },
    },
    data:function(){
        return {
            open: true
        }
    },
    mounted:function(){

    },
    methods:{
        switchGroup:function(){
            this.open=!this.open;
        }
    }

}
</script>

<style scoped>
    .group{
        margin:24px;
        margin-left: 0px;
        margin-right: 0px;
    }
    .group_title_group{
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        padding-left: 24px;

    }
    .group_title{
        display: flex;
        font-size: 20px;
        font-weight: bold;
    }
    .item{
        padding-left: 12px;
    }
    .group_content{

    }
</style>
