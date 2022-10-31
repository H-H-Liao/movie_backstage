<template>
    <div class="menu">
        <div class="menu_box">
            <div class="item">
                <a @click="goToUrl('/'+url)" >{{title}}</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            required:true
        },
        addButton:{
            type:Boolean,
            default:true,
            required:false
        },
        url:{
            type:String
        }
    },
    methods:{
        goToUrl:function($url){
            this.$router.push($url);
        }
    }
}
</script>

<style scoped>
    a{
        text-decoration:none;
        color:inherit;
    }
    .menu{
        display: flex;
    }
    .menu_box{
        display: flex;
        padding:  8px 12px;
        padding-left: 48px;
        width: 100%;
    }
    .menu:hover{
        background-color: #6E6D80;
    }
    .item{
        font-size: 20px;
        flex: 0 90%;
    }
    .menu_button{
        flex: 0 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        color:#949494;
    }
    .menu_button a{
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .menu_button:hover{
        display: flex;
        justify-content: center;
        align-items: center;
        color:#FFFFFF;
    }
    a{
        cursor: pointer;
    }
</style>
