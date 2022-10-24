<template>
      <div class="main">
        <div v-if="model" class="main_content_small">
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import AddressSelect from '/components/AddressSelect.vue';
import InputField from '/components/InputField.vue';
import moment from 'moment';
import {
        getBirthday,
        transformBirthday2TraditionBirthday,
        transformTraditionBirthday2Birthday,
        transformBirthday2Year,
        transformYear2Birthday
        } from '/modules/Bitrhday.js'

export default {
    components:{
        InputField,
        AddressSelect
    },
    mounted:function(){
        this.id = this.$route.query.id;
        this.getValue();
    },
    data:function(){
        return{
            id:"",
            model:null
        }
    },
    methods:{
        transformBirthday2TraditionBirthday,
        transformBirthday2Year,
        getSeachText:function(){
            if(this.model.mobile_phone){
                return "?mobile_phone=" +this.model.mobile_phone;
            }else{
                return "?name=" +this.model.name;
            }
        },
        getValue:function(){
            axios.get('/api/member/'+this.id)
            .then((res) => {
                this.model = res.data;
            })
            .catch((error)=>{
                console.log(error)
            })
        },
         formateData:function($model){
            if($model.birthday){
                $model.birthday = moment($model.birthday).format('YYYY-MM-DD');
            }

            $model.year = transformBirthday2Year($model.birthday);

             return $model;
        },
        saveItem:function(){
            axios.put('/api/member/'+this.id,this.formateData(this.model))
            .then((res) => {
                this.model = res.data;
                this.getValue();
                alert('更新成功');
            })
            .catch((error)=>{
                console.log(error)
                alert('更新失敗');
            })
        },
        removeItem:function(){
            if(confirm('您確定要刪除嗎？')){
                axios.delete('/api/member/'+this.id)
                .then((res)=>{
                    console.log(res)
                    alert('刪除成功');
                    location.href = "/app/#/member";
                })
                .catch((error)=>{
                    console.log(error)
                })
            }
        },
        changeHomeCity:function($value){
            console.log('change city');
            this.model.house_address_city = $value;
        },
        changeHomeTown:function($value){
            console.log('change city');
            this.model.house_address_town = $value;
        },
        changeHomeStreet:function($value){
            console.log('change city');
            this.model.house_address_other = $value;
        },
        changeCity:function($value){
            console.log('change city');
            this.model.address_city = $value;
        },
        changeTown:function($value){
            console.log('change city');
            this.model.address_town = $value;
        },
        changeStreet:function($value){
            console.log('change city');
            this.model.address_other = $value;
        }
    }
}
</script>

<style scoped>
    .main{
        max-width: 1280px;
        margin-left: auto;
        margin-right: auto;
    }

</style>
