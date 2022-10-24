<template>
    <div class="setting_list">
        <div class="setting_list-header">
            {{label}}
        </div>
        <div class="row">
            <div class="col_3_1 setting_list-search_item">
                <el-input v-model="value"></el-input>
            </div>
            <div class="col_3_1 setting_list-search_item">
                <el-button @click="addItem()" type="primary">加入</el-button>
            </div>
            <div class="col_3_1">

            </div>
        </div>
        <div>
            <table class="setting_table">
                <thead>
                    <tr>
                        <td>項目</td>
                        <td>功能</td>
                    </tr>
                </thead>
                <tbody>
                     <tr v-for="($item,$key) in list" :key="$key">
                        <td>
                            <div>{{$item.title}}</div>
                        </td>
                        <td  align='center' valign="middle">
                             <div class="setting-delete_button"> <el-button @click="removeItem($item.id)" type="danger">刪除</el-button></div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios  from 'axios'

export default {
    props:{
        label:{
            type:String
        },
        type:{
            type:String
        }
    },
    data:function(){
        return {
            list:[],
            value:"",
        }
    },
    mounted:function(){
        this.getList();
    },
    methods:{
        getList:function(){

        },
        addItem:function(){
            axios.post('/api/setting',{
                type:this.type,
                title:this.value
            })
            .then((res)=>{
                alert('新增成功');
                this.getList();
                this.value = "";
            })
            .catch((error)=>{
                console.log(error)
                alert('新增失敗，請填寫');
            })
        },
        removeItem:function($id){
            if(confirm('您確定要刪除嗎？')){
                axios.delete('/api/setting/'+$id)
                .then((res)=>{
                    alert('刪除成功');
                    this.getList();
                })
                .catch((error)=>{
                    console.log(error)
                })
            }
        },
    }
}
</script>

