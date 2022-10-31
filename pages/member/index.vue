<template>
    <div class="main">
        <h1>
            人員資料列表
        </h1>
        <div class="main_content">
            <div class=" flex">
                <div class="flex">
                    <div class="header_option">
                    <el-select v-model="value"  placeholder="請選擇">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    </div>
                    <div class="header_option header_option-input">
                        <el-input v-model="search_input" placeholder="請輸入內容"></el-input>
                    </div>
                    <div class="header_option header_option-button">
                        <el-button @click="search()" type="primary">查詢</el-button>
                    </div>
                </div>
                <div>
                    <el-button @click="createIsShow = true" type="primary">新增人員</el-button>
                </div>
            </div>
            <el-table
            :data="list"
            :cell-class-name="addCellName"
            stripe
            >
            <el-table-column
                prop="id"
                label="編號"
                fixed
                width="140">
            </el-table-column>
            <el-table-column
                label="姓名"
                fixed
                width="180">
                <template slot-scope="scope">
                    <router-link :to="'/member/show?id='+scope.row.id">{{scope.row.name || '-'}}</router-link>
                </template>
            </el-table-column>
            <el-table-column
                prop="sex"
                label="性別"
                width="90">
                <template slot-scope="scope">
                    <router-link :to="'/member/show?id='+scope.row.id">{{scope.row.sex || '-'}}</router-link>
                </template>
            </el-table-column>
            <el-table-column
                prop="phone"
                label="手機"
                width="200">
                <template slot-scope="scope">
                    <router-link :to="'/member/show?id='+scope.row.id">{{scope.row.mobile_phone || '-' }}</router-link>
                </template>
            </el-table-column>
            <el-table-column
                prop="birthday"
                label="生日(國)"
                width="180">
                <template slot-scope="scope">
                    <router-link :to="'/member/show?id='+scope.row.id">{{getBirthday(scope.row.birthday) || '-'}}</router-link>
                </template>
            </el-table-column>
            <el-table-column
                prop="birthday_t"
                label="生日(農)"
                width="180">
                <template slot-scope="scope">
                    <router-link :to="'/member/show?id='+scope.row.id">{{transformBirthday2TraditionBirthday(scope.row.birthday) || '-'}}</router-link>
                </template>
            </el-table-column>
            <el-table-column
                prop="year"
                label="歲次"
                width="100">
                <template slot-scope="scope">
                    <router-link :to="'/member/show?id='+scope.row.id">{{transformBirthday2Year(scope.row.birthday) || '-'}}</router-link>
                </template>
            </el-table-column>
            <el-table-column
                prop="birth"
                label="生辰"
                width="100">
                <template slot-scope="scope">
                    <router-link :to="'/member/show?id='+scope.row.id">{{scope.row.birth || '-'}}</router-link>
                </template>
            </el-table-column>
            <el-table-column
                prop="famliy"
                label="家庭"
                width="100">
                <template slot-scope="scope">
                    <router-link :to="'/member/show?id='+scope.row.id">{{scope.row.famliy || '-'}}</router-link>
                </template>
            </el-table-column>
            <el-table-column
                prop="memo"
                label="備註"
                width="160">
                <template slot-scope="scope">
                    <router-link :to="'/member/show?id='+scope.row.id">{{scope.row.memo || '-'}}</router-link>
                </template>
            </el-table-column>
            </el-table>
            <div class="flex_cc footer">
                <el-pagination
                background
                @current-change="handleCurrentChange"
                layout="prev, pager, next"
                :current-page="current_page"
                :hide-on-single-page="true"
                :page-count="last_page">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Dialog from '/components/Dialog'
// import AddMemberView from '/components/AddMemberView'
import {
        getBirthday,
        transformBirthday2TraditionBirthday,
        transformTraditionBirthday2Birthday,
        transformBirthday2Year,
        transformYear2Birthday
        } from '/modules/Bitrhday.js';

export default {
    components:{
        Dialog,
        // AddMemberView
    },
    data() {
        return {
            createIsShow:false,
            search_input: '',
            value:"id",
            options: [
                        {
                            value: 'id',
                            label: '編號'
                        },
                        {
                            value: 'name',
                            label: '姓名'
                        },
                        {
                            value: 'sex',
                            label: '性別'
                        },
                        {
                            value: 'mobile_phone',
                            label: '手機'
                        },
                        {
                            value: 'birthday',
                            label: '生日(國)'
                        },
                        {
                            value: 'birthday_t',
                            label: '生日(農)'
                        },
                        {
                            value: 'famliy',
                            label: '家庭'
                        },
                        {
                            value: 'memo',
                            label: '備註'
                        }
                    ],
            list: [],
            page:null,
            current_page:1,
        }
    },
    mounted:function(){
        if(this.$route.query.method == 'create'){
            this.createIsShow = true;
        }
        this.getList();
    },
    methods:{
        getBirthday,
        transformBirthday2TraditionBirthday,
        transformTraditionBirthday2Birthday,
        transformBirthday2Year,
        transformYear2Birthday,
        addMmeber:function(){
            this.createIsShow = false;
            this.getList();
        },
        search:function(){//搜尋
            this.current_page = 1;
            this.getList();
        },
        getFilter:function(){
            var $filterString = "";
            switch(this.value){
                case 'id':
                case 'name':
                case 'sex':
                case 'birthday':
                case 'famliy':
                case 'memo':
                case 'birth':
                case 'year':
                case 'mobile_phone':
                    $filterString =  "filter["+this.value+"]="+this.search_input;
                    break;
                case 'birthday_t':
                    $filterString =  "filter[birthday]="+transformTraditionBirthday2Birthday(this.search_input);
                    break;
            }
            $filterString += "&page="+this.current_page;
            return $filterString;
        },
        getList:function(){
            // axios.get('/api/member?'+this.getFilter())
            // .then((res)=>{
            //     this.list = res.data.data
            //     this.page = res.data;
            //     this.current_page = this.page.current_page;
            // })
            // .catch((error) => {
            //     console.log(error)
            // })
        },
        handleCurrentChange(val) {
            this.current_page = val;
            this.getList();
        },
        addCellName:function({columnIndex}){
            if(columnIndex == 9){
                return "memo_cell";
            }
        }
    }
}
</script>
