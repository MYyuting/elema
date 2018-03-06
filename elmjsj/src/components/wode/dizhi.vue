<template>
    <div class="wddz">
        <my-head :msg="tou"></my-head>

        <div class="addre">
            <div class="dzList">
                <div>
                    <p><span>禹亭</span> <span>先生</span> <span>1873514693</span></p>
                    <p><span>学校</span> <span>北京吉利大学学生公寓俊5号625室</span></p>
                </div>
                <div>
                    <span class="el-icon-edit-outline"></span>
                </div>
            </div>
            <div class="dzList">
                <div>
                    <p><span>禹亭</span> <span>先生</span> <span>1873514693</span></p>
                    <p><span>学校</span> <span>北京吉利大学学生公寓俊5号625室</span></p>
                </div>
                <div>
                    <span class="el-icon-edit-outline"></span>
                </div>
            </div>
        </div>
        <!-- 底部-->
        <router-link to="/4" class="dz-btm" tag="div">
            <span class="el-icon-circle-plus-outline"></span>
            <div>新增收货地址</div>
        </router-link>
    </div>
</template>
<style scoped lang="scss">
    .dz-btm{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 50px;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #3190e8;
        span{
            font-size: 0.18rem;
        }
        div{
            font-size: 0.15rem;
            margin-left: 5px;
        }
    }
    .wddz{
        height: 100%;
        background: #eee;
    }
    .dzList{
        background: #fff;
        border-bottom: 1px solid #eee;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 15px;
        div:nth-child(2){
            span{
                font-size: 0.18rem;
                color: #aaa;
            }
        }
        div{
            p:nth-child(1){
                span{
                    color: #666;
                    font-size: 0.16rem;
                }
                span:nth-child(1){
                    color: #333;
                    font-weight: 600;
                    font-size: 0.16rem;
                }
            }
            p:nth-child(2){
                color: #666;
                span:nth-child(1){
                    font-size: 0.08rem;
                    border: 1px solid #00d762;
                    color: #00d762;
                }
            }
        }
    }

</style>
<script>
    import Head from "@/components/public/header"
    export default {
        data:function(){
          return{
              tou:"我的地址"
          }
        },
        components:{
            "my-head":Head
        }
    }
</script>