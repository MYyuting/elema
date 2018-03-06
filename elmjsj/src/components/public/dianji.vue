<template>
    <div class="dainji">
        <span>
            <i class="el-icon-remove-outline" @click="jian" v-show="item.num"></i>
        </span>
        <span v-show="item.num">{{ item.num }}</span>
        <span>
            <i class="el-icon-circle-plus" @click="jia"></i>
        </span>
    </div>
</template>

<script>
    import Vue from "vue"
    export default {
        props:["item"],

        methods:{
            jia:function(){
//                this.item.num=10;
                if(!this.item.num){
                    Vue.set(this.item,"num",1)
                }else{
//                    console.log(this.item);
                    this.item.num++
                }
            },
            jian:function(){
                this.item.num--;
            }
        }
    }

</script>
<style lang="scss" >
    .dainji{
        position: absolute;
        right: 0;
        display: flex;
        align-items: center;
        bottom: 0;
        span{
            margin-left: 5px;
        }
        span:nth-child(2){
            color: #666;
        }
        i{
            font-size: 0.2rem;
            color: #2395FF;
        }
    }
</style>
