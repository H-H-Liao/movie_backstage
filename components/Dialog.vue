<template>
    <div v-if="isShow" class="dialog" >
        <div class="dialog_box" :style="'width:'+width">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        isShow:{
            type: Boolean,
            default: false
        },
        width:{
            type: String,
            default:'1440px'
        }
    },
    data:function(){
        return {
            
        }
    },
    methods:{
        closeDialog:function(){
            this.$emit('closeDialog');
        }
    }
}
</script>

<style scoped>
    .dialog{
        position: fixed;
        top:0px;
        left: 0px;
        width: 100vw;
        height: calc( 100vh);
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items:flex-start;
        padding-top: 80px;
        overflow-y: auto;
        padding-left: 15px;
        padding-right: 15px;
        padding-bottom: 15px;;
        box-sizing: border-box;
    }
    .dialog_box{
        background-color: white;
        border-radius: 10px;
        padding:24px;
        max-width: 100vw;
    }
</style>