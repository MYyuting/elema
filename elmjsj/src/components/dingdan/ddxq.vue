<template>
    <div class="ddxq">
        <my-hed :msg="touTli"></my-hed>

        <!-- 内容-->
        <div class="dd-con">
            <div class="dd-con1">
                <div>
                    <img src="https://fuss10.elemecdn.com/f/b7/a8d6c61b6f26b0d9dd6c869a22cd9jpeg.jpeg?imageMogr/format/webp/thumbnail/!160x160r/gravity/Center/crop/160x160/" alt=""/>
                </div>
                <h1>订单已完成 <span class="el-icon-arrow-right"></span></h1>
                <p>感谢你对饿了么的信任，期待再次光临</p>
                <div class="btn">
                    <router-link to="/btn" tag="button">申请售后</router-link>
                    <router-link to="/btn" tag="button">再来一单</router-link>
                    <router-link to="/btn" tag="button">评价得金币</router-link>
                </div>
            </div>
            <div class="dd-list">
                <div class="list1">
                    <div>
                        <router-link to="/xiang">
                            <img src="https://fuss10.elemecdn.com/f/b7/a8d6c61b6f26b0d9dd6c869a22cd9jpeg.jpeg?imageMogr/format/webp/thumbnail/!160x160r/gravity/Center/crop/160x160/" alt=""/>
                            <span>麦特派汉堡披萨（吉利大学店)</span>
                        </router-link>
                        <span class="el-icon-arrow-right"></span>
                    </div>
                </div>
                <div class="list2">
                    <div>
                        <div>宫保鸡丁盖浇饭</div>
                        <div>
                            <span><span>x</span>1</span>
                            <span><span>￥</span>10</span>
                        </div>
                    </div>
                </div>
                <ul class="list3">
                    <li>
                        <span>餐盒费</span>
                        <div>
                            <span>x1</span>
                            <span><span>￥</span>1</span>
                        </div>
                    </li>
                    <li>
                        <span>配送费</span>
                        <div>
                            <span><span>￥</span>1</span>
                        </div>
                    </li>
                </ul>
                <p class="list4">
                    <span class="sp1"> <span>  红 </span> <span>外卖节限时特惠</span></span>
                    <span class="sp2"> <span>- ￥</span> <span>4</span></span>
                </p>
                <div class="list5">
                    <p>
                        <span>实付</span> ￥8
                    </p>
                </div>
            </div>
            <!-- 配送信息-->
            <div class="peiso">
                <router-link to="pinjia">
                    <span>我的评价</span>
                    <span class="el-icon-arrow-right"></span>
                </router-link>
                <div class="pei-list">
                    <p class="til">配置信息</p>
                    <ul>
                        <li>
                            <span>送达时间：</span>尽快送达
                        </li>
                        <li>
                            <span>送货地址：</span>
                            <div>
                                <p>禹(先生)</p>
                                <p>18735514693</p>
                                <p>北京吉利大学学生公寓俊5号625室</p>
                            </div>
                        </li>
                        <li>
                            <span>配送方式：</span>商家配送
                        </li>
                    </ul>
                    <p class="til">订单信息</p>
                    <ul>
                        <li>
                            <span>订单号：</span>3018289798093100066
                        </li>
                        <li>
                            <span>支付方式：</span>在线支付
                        </li>
                        <li>
                            <span>下单时间：</span>2018-01-14 13:36
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .ddxq{
        background: #eee;
    }
    .dd-con{
        background: #fff;
        margin: 0 10px;
    }
    .peiso{
        a{
            padding: 0 10px;
            height: 46px;
            border-bottom: 8px solid #eee;
            display: flex;
            align-items: center;
            justify-content: space-between;
            span{
                color: #333;
            }
        }
        .pei-list{
            .til{
                padding: 0 10px;
                font-size: 0.15rem;
                line-height: 38px;
                border-bottom: 1px solid #eee;
            }
            ul{
                border-bottom: 8px solid #eee;
                padding: 0 10px;
                li{
                    color: #666;
                    display: flex;
                    padding: 10px 0;
                    border-bottom: 1px solid #eee;
                    span, p{
                        color: #666;
                    }
                }

            }

        }
    }
    .dd-list{
        padding: 0px 15px;
        .list1{
            border-bottom: 2px solid #ccc;
            padding: 10px 0;
            div{
                display: flex;
                justify-content: space-between;
            }
            img{
                width: 20px;
                height: 20px;
                vertical-align: middle;
            }
            span{
                color: #4d4d4d;
            }
        }
        .list2{
            border-bottom: 1px solid #eee;
            >div{
                display: flex;
                height: 38px;
                align-items: center;
                justify-content: space-between;
                span:nth-child(2){
                    margin-left: 10px;
                }
             }
        }
        .list3{
            li{
                height: 38px;
                display: flex;
                border-bottom: 1px solid #eee;
                justify-content: space-between;
                align-items: center;
                span:nth-child(2){
                    margin-left: 20px;
                }
            }
        }
        .list4{
            display: flex;
            line-height: 38px;
            border-bottom: 2px solid #ccc;
            justify-content: space-between;
            .sp1{
                span:nth-child(1){
                    /*padding: 0% 2px;*/
                    background: rgb(255, 114, 57);
                    color: #fff;
                }
            }
            .sp2{
                color: rgb(255, 114, 57);
            }
        }
        .list5{
            padding: 20px 0;
            border-bottom: 1px solid #eee;
            p{
                text-align: end;
                font-size: 0.16rem;
            }
        }
    }
    .dd-con1{
        border-bottom: 1px solid #eee;
        text-align: center;
        img{
            width: 80px;
            height: 80px;
        }
        h1{
            font-size: 0.2rem;
            margin-bottom: 5px;
        }
        p{
            color: #999;
            font-size: 12px;
        }
        .btn{
            padding: 10px 0;
            button{
                padding: 5px 10px;
                background: #fff;
                border-radius: 5px;
                outline: none;
                border: 1px solid #eee;
            }
            button:nth-of-type(2){
                background: #2395ff;
                border: none;
                color: #fff;
            }
            button:nth-of-type(3){
                background: #ff5339;
                border: none;
                color: #fff;
            }
        }
    }
</style>
<script>
    import Head from "@/components/public/header"
    export default {
        data:function(){
            return {
                touTli:"订单详情"
            }
        },
        components:{
            "my-hed":Head
        }

    }
</script>