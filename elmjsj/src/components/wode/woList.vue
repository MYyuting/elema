<template>
    <div class="list">
        <router-link v-for="item in msg" :to="item.url" >
            <div>
                <span :class="item.icon"></span>
                <div>
                    {{ item.til }}
                </div>
            </div>
            <div>
                <span class="el-icon-arrow-right"></span>
            </div>
        </router-link>
    </div>
</template>
<style scoped lang="scss">
    .list{
        a:nth-child(1),a:nth-child(3){
            margin-bottom: 8px;
        }
        a{
            display: flex;

            justify-content: space-between;
            padding: 5px 15px;
            background: #fff;
        }
        div{
            line-height: 2.2;
            font-size: 16px;
        }

        div:nth-child(1){
            width: 80%;
            display: flex;
            align-items: center;
            color: #1571FA;
            span{
                padding-right: 10px;
            }
            div{
                width: 75%;
                color: #333;
            }
        }

        >div:nth-child(2){
            width: 10%;
            color: #666;
            text-align: end;
        }
    }
</style>
<script>

    export default {
        props:["msg"]
    }
</script>