<template>
    <div class="ss">
        <div class="head1">
            <span class="el-icon-arrow-left"></span>

            <el-input
                    placeholder="输入商家、商品名称"
                    prefix-icon="el-icon-search"
                    v-model="input2">
            </el-input>

            <button>
                搜索
            </button>
        </div>
        <div class="lis"><span>历史搜索</span> <span class="el-icon-delete"></span></div>
    </div>
</template>
<style scoped lang="scss">
    .head1{
        padding: 10px 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        >div{
            width: 80%;
        }
         .el-input__inner{
             height: 20px;
             background: #eee;
         }
         button{
             border: none;
             background: #fff;
             font-size: 0.16rem;
         }
    }
    .lis{
        display: flex;
        padding: 0  15px;
        justify-content: space-between;
    }
</style>
<script>
    export default {
        data:function(){
            return{
                input2:""
            }
        }
    }

</script>