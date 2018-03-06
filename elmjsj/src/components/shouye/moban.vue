<template>
    <div class="moban">
        <div class="mo-con">
            <h2><span>品牌</span>{{ msgdata.name }}</h2>
            <ul>
                <li>
                    <h3>{{ msgdata.rating }}</h3>
                    <p>评分</p>
                </li>
                <li>
                    <h3>{{ msgdata.recent_order_num }}单</h3>
                    <p>月售</p>
                </li>
                <li>
                    <h3>商家配送</h3>
                    <p>约30分钟</p>
                </li>
                <li>
                    <h3>9元</h3>
                    <p>配送费</p>
                </li>
                <li>
                    <h3>1.1km</h3>
                    <p>距离</p>
                </li>
            </ul>
            <div class="gg">
                <span>
                    公告
                </span>
            </div>
            <div class="mo1">
                欢迎光临，用餐高峰期请提前下单，谢谢。
            </div>
        </div>
        <div class="btn-x">
            <span class="el-icon-circle-close-outline"></span>
        </div>
    </div>
</template>
<script>
    export default {
        props:["msgdata"],
        mounted:function(){
            $(".btn-x").click(function(){
                $(".moban").hide();
            })
        }
    }
</script>
<style scoped lang="scss">
    .btn-x{
        width: 20%;
        margin: 30px auto 0;
        text-align: center;
        span{
            font-size: 0.3rem;
            color: #aaa;
        }
    }
    .moban {
        display: none;
        padding: 50% 15px 0;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.5);
    }
    .mo-con{
        background: #fff;
        text-align: center;
        h2{
            font-size: 0.2rem;
            color: #333;
            line-height: 3;
            span{
                font-weight: 400;
                background: linear-gradient(90deg,#fff100,#ffe339);
                color: #6a3709;
            }
        }
        ul{
            display: flex;
            justify-content: space-between;
            li{
                flex-grow: 1;
                p{
                    color: #666;
                    line-height: 2;
                }
            }
        }
        .gg{
            span{
                color: #666;
                line-height: 3;
                position: relative;
            }
            span::after{
                content: "";
                position: absolute;
                top: 10px;
                left: 30px;
                width: 20px;
                border-bottom: 1px solid #666;
            }
            span::before{
                content: "";
                position: absolute;
                top: 10px;
                left: -24px;
                width: 20px;
                border-bottom: 1px solid #666;
            }
        }
        .mo1{
            color: #666;
            padding-bottom: 20px;
        }
    }
</style>
