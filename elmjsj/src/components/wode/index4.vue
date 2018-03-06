<template>
    <div class="wode">
        <my-tou :msg="touTli"></my-tou>
        <section>
            <router-link to="/denglv">
                <div class="denlv">
                    <div>
                        <img src="../../../static/img1/index1_07.png" alt=""/>
                    </div>
                    <div>
                        <p>登录/注册</p>
                        <p><i class="el-icon-mobile-phone"></i> <span>等率后享受更多特权</span></p>
                    </div>
                    <div>
                        <span class="el-icon-arrow-right"></span>
                    </div>
                </div>
            </router-link>
        </section>
        <div class="index-lie">
            <router-link to="/hong">
                <p><span><i class="el-icon-message"></i></span></p>
                <p>红包</p>
            </router-link>
            <router-link to="/jin">
                <p><span><i class="el-icon-tickets"></i></span></p>
                <p>金币</p>
            </router-link>
        </div>


        <my-list :msg="arr"></my-list>

    </div>
</template>

<script>
    import Head from "@/components/public/header"
    import List from "@/components/wode/woList"
    export default {
        data:function(){
            return {
                touTli:"我的",
                arr:[
                    {
                        icon:"el-icon-location",
                        url:"/addres",
                        til:"我的地址"
                    },
                    {
                        icon:"el-icon-goods",
                        url:"/jinbi",
                        til:"金币商城"
                    },
                    {
                        icon:"el-icon-menu",
                        url:"/fenx",
                        til:"分享拿5元现金"
                    },
                    {
                        icon:"el-icon-service",
                        url:"/kefu",
                        til:"我的客服"
                    },
                    {
                        icon:"el-icon-star-off",
                        url:"/xiazai",
                        til:"下载饿了么app"
                    }
                ]
            }
        },
        components:{
            "my-tou":Head,
            "my-list":List
        }

    }
</script>
<style scoped lang="scss">
    .border{
        border-bottom: 8px solid #eee;
    }
    .wode{
        background: #eee;
        height: 100%;
    }
    .index-lie{
        background: #fff;
        display: flex;
        border-bottom: 8px solid #eee;
        a{
            flex-grow: 1;
            padding: 15px;
            text-align: center;
            p{
                span{
                    margin: auto;
                    display: block;
                    text-align: center;
                    line-height: 30px;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    background: #FF5F3E;
                }
                i{
                    color: #fff;
                }
            }
            p:nth-child(1){
                margin-bottom: 6px;
            }
        }
        a:nth-child(2){
            border-left: 1px solid #ccc;
            span{
                background: #6AC20B;
            }
        }
    }
    .denlv{
        display: flex;
        align-items: center;
        padding: 20px 15px;
        background:#0090FF;
        div:nth-child(1){
            width: 20%;
            border-radius:50% ;
            text-align: center;
            img{
                width: 50px;
                height: 50px;
            }
        }
        div:nth-child(2){
            flex-grow: 1;
            margin-left: 15px;
            p:nth-child(1){
                font-size: 20px;
                font-weight: 600;
            }
            p{
                color: #fff;
            }
        }
        div:nth-child(3){
            width: 10%;
            color: #fff;
            font-size: 22px;
            text-align: right;
        }
    }
</style>
