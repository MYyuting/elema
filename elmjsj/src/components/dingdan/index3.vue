<template>
    <div class="dingdan">
        <my-hed :msg="touTli"></my-hed>

        <!-- 内容-->
        <div class="ddan">
            <router-link to="/ddxq">
                <div class="order">
                    <a href="#">
                        <img src="https://fuss10.elemecdn.com/f/b7/a8d6c61b6f26b0d9dd6c869a22cd9jpeg.jpeg?imageMogr/format/webp/thumbnail/!64x64r/gravity/Center/crop/64x64/" alt=""/>
                    </a>
                    <!-- 标题-->
                    <div class="til">
                        <div class="til-top">
                            <div>
                                <a href="#"><span>麦特派汉堡披萨（吉利大学店) > </span></a>
                                <p>订单已完成</p>
                            </div>
                            <p>6小时34分钟前</p>
                        </div>
                        <div class="til-btom">
                            <span>套餐五-汉堡+香辣鸡翅+薯条+中可</span>
                            <p>￥18.00</p>
                        </div>
                    </div>
                </div>
                <!-- 再来一单-->
                <div class="order-btom">
                    <button>再来一单</button>
                    <button>评价得10金币</button>
                </div>
            </router-link>
            <router-link to="/ddxq">
                <div class="order">
                    <a href="#">
                        <img src="https://fuss10.elemecdn.com/f/b7/a8d6c61b6f26b0d9dd6c869a22cd9jpeg.jpeg?imageMogr/format/webp/thumbnail/!64x64r/gravity/Center/crop/64x64/" alt=""/>
                    </a>
                    <!-- 标题-->
                    <div class="til">
                        <div class="til-top">
                            <div>
                                <a href="#"><span>麦特派汉堡披萨（吉利大学店)</span></a>
                                <p>订单已完成</p>
                            </div>
                            <p>6小时34分钟前</p>
                        </div>
                        <div class="til-btom">
                            <span>套餐五-汉堡+香辣鸡翅+薯条+中可</span>
                            <p>￥18.00</p>
                        </div>
                    </div>
                </div>
                <!-- 再来一单-->
                <div class="order-btom">
                    <button>再来一单</button>
                    <button>评价得10金币</button>
                </div>
            </router-link>
            <router-link to="/ddxq">
                <div class="order">
                    <a href="#">
                        <img src="https://fuss10.elemecdn.com/f/b7/a8d6c61b6f26b0d9dd6c869a22cd9jpeg.jpeg?imageMogr/format/webp/thumbnail/!64x64r/gravity/Center/crop/64x64/" alt=""/>
                    </a>
                    <!-- 标题-->
                    <div class="til">
                        <div class="til-top">
                            <div>
                                <a href="#"><span>麦特派汉堡披萨（吉利大学店)</span></a>
                                <p>订单已完成</p>
                            </div>
                            <p>6小时34分钟前</p>
                        </div>
                        <div class="til-btom">
                            <span>套餐五-汉堡+香辣鸡翅+薯条+中可</span>
                            <p>￥18.00</p>
                        </div>
                    </div>
                </div>
                <!-- 再来一单-->
                <div class="order-btom">
                    <button>再来一单</button>
                    <button>评价得10金币</button>
                </div>
            </router-link>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .dingdan{
        background: #eee;
    }
    .ddan{

    }
    .order-btom{
        background: #fff;
        display: flex;
        padding: 8px 15px;
        justify-content: flex-end;
        button{
            background: #fff;
            outline: none;
            border-radius: 3px;
            padding: 2px 5px;
        }
        button:nth-child(1){
            border: 1px solid #2395ff;
            color: #2395ff;
        }
        button:nth-child(2){
            color: #ff5339;
            margin-left: 8px;
            border: 1px solid #ff5339;
        }

    }
    .order{
        background: #fff;
        margin-top: 10px;
        padding: 10px 15px 0;
        display: flex;
        >a{
            margin-right: 10px;
            img{
                width: 30px;
                height: 30px;
            }
        }
        .til{
            flex-grow: 1;
            .til-top{
                border-bottom: 1px solid #eee;
                padding-bottom: 8px;
                div{
                    display: flex;
                    justify-content: space-between;
                    span{
                        font-size: 0.16rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }

                }
                >p{
                     font-size: 12px;
                     color: #999;
                 }

            }
            .til-btom{
                padding: 10px 0;
                display: flex;
                border-bottom: 1px solid #eee;
                justify-content: space-between;
                span{
                    width: 75%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    color: #666;
                }
                p{
                    font-size: 0.14rem;
                    font-weight: bold;
                }
            }
        }
    }
</style>
<script>
    import Head from "@/components/public/header"
    export default {
        data:function(){
            return {
                touTli:"订单"
            }
        },
        components:{
            "my-hed":Head
        }

    }
</script>