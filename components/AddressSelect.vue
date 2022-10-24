<template>
    <div class="address_row">
        <div class="address_row-item0">
            <el-input
                placeholder=""
                :value="getPostCode(city,town)"
                 :disabled="disable">
            </el-input>
        </div>
        <div class="address_row-item1">
            <el-select @change="changeCity()" v-model="city" placeholder=""   :disabled="disable">
                <el-option
                v-for="item in cityOptions"
                :key="item.name"
                :label="item.name"
                :value="item.name">
                </el-option>
            </el-select>
        </div>
        <div class="address_row-item1">
            <el-select @change="changeTown()" v-model="town" placeholder=""   :disabled="disable">
                <el-option
                v-for="item in getTownList(city)"
                :key="item.name"
                :label="item.name"
                :value="item.name">
                </el-option>
            </el-select>
        </div>
        <div class="address_row-item3">
            <el-input
                 @change="changeStreet()"
                placeholder=""
                 :disabled="disable"
                v-model="street">
            </el-input>
        </div>
    </div>
</template>

<script>
import address from '/assets/taiwan_districts.json'

export default {
    props:{
        initCity:{
            type: String
        },
        initTown:{
            type: String
        },
        initStreet:{
            type: String
        },
        disable:{
            type: Boolean,
            default:false
        }
    },
    data:function(){
        return {
            city:"",
            town:"",
            street:"",
            cityOptions:[],
            townOptions:[]
        }
    },
    mounted:function(){
        this.cityOptions = address;
        this.city = this.initCity;
        this.town = this.initTown;
        this.street = this.initStreet;
        if(this.city != null){
             this.townOptions = this.getTownList();
        }
    },
    methods:{
        getTownList:function($city){
            if($city){
                var $obj = null;
                address.forEach(($item)=>{
                    if($obj == null && $item.name == $city){
                        $obj = $item;
                    }
                })

                return $obj.districts;
            }else{
                return [];
            }
        },
        getPostCode:function($city, $town){
             if($city && $town){
                var $obj = null;
                address.forEach(($item)=>{
                    if($obj == null && $item.name == $city){
                        $obj = $item;
                    }
                })
                var $townObj = null;
                $obj.districts.forEach(($item)=>{
                if($townObj == null && $item.name == $town){
                        $townObj = $item;
                    }
                })

                return $townObj.zip || '';
             }else{
                 return "";
             }
        },
        changeCity:function(){
            this.$emit('city',this.city);
            this.town = "";
            this.townOptions = this.getTownList();
        },
        changeTown:function(){
            this.$emit('town',this.town);
        },
        changeStreet:function(){
            this.$emit('street',this.street);
        },
    }
}
</script>


<style scoped>
    .address_row{
        display: flex;
    }
    .address_row-item0{
        flex:0 calc(100% / 20 *2);
        padding-right: 12px;
    }
    .address_row-item1{
        flex:0 calc(100% / 20 *3);
        padding-right: 12px;
    }
    .address_row-item3{
        flex:0 calc(100% / 20 * 12);
        padding-right: 0px;
    }
</style>
