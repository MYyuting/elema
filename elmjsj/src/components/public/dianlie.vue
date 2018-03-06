<template>
    <div class="dian">
        <div v-for="(item,index) in dian" class="scti">
            <router-link :to="'/xiang/'+item.id">
                <section >
                    <div class="dian-info">
                        <div class="dian-log">
                            <img :src="'http://cangdu.org:8001/img/'+item.image_path"
                                 alt=""/>
                        </div>
                        <div class="dian-main">
                            <section>
                                <h3>
                                    <a>品牌</a>
                                    <span>{{ item.name }}</span>
                                </h3>
                            </section>
                            <section>
                                <div class="dian-pin">
                                    <div class="block">
                                        <el-rate
                                                v-model="item.rating"
                                                disabled
                                                show-score
                                                text-color="#666"
                                                score-template="{value}">
                                        </el-rate>
                                    </div>
                                    <span>月售<i>{{ item.rating_count }}</i>单</span>
                                </div>
                        <span class="dian-kuaidi">
                            蜂鸟专送
                        </span>
                            </section>
                            <section>
                                <div class="qisong"><span>￥{{ item.float_minimum_order_amount }}起送</span> <span>{{ item.piecewise_agent_fee.tips }}</span> </div>
                                <div class="juli"><span class="">{{ item.distance }}</span> <span>{{ item.order_lead_time }}</span></div>
                            </section>
                        </div>
                    </div>
                    <div class="dian-text">
                        <div class="koubei">
                            <img :src="'http://cangdu.org:8001/img/'+item.license.catering_service_license_image"
                                 alt=""/>
                            <span>{{ item.promotion_info }}</span>
                        </div>
                        <span class="her"></span>

                    </div>
                </section>
            </router-link>
            <section class="section">
                <div class="dian-list">
                    <div class="list-act" v-for="temp in item.activities">
                        <span style="">{{ temp.icon_name }}</span>
                        <span>{{ temp.description }}</span>
                    </div>
                </div>
                <div class="dian-list-r">
                    {{ item.activities.length }}个活动
                    <i class="el-icon-caret-bottom"></i>
                </div>
            </section>

        </div>

    </div>
</template>

<script>
    export default {
        props:["dian"],
        data:function(){
            return{
//                value1:4.5
            }
        }
    }

</script>
<style scoped lang="scss">
    .scti{
        padding: 10px 0;
        border-bottom: 1px solid #ccc;
    }
    .dian{
        padding: 10px 0;

    }
    .dian-list{
        width: 76%;
    .list-act{
        overflow: hidden;
        height: 20px;
        line-height: 1.5;
    span{
        font-size: 0.1rem;
    }
    span:nth-child(1){
        background: #70BC46;
        color: #fff;
    }
    }
    }
    .section{
        padding: 5px 15px;
        margin-left: 21%;
        display: flex;
        .dian-list-r{
            color: #666;
            font-size: 12px;
            display: flex;
        }
    }
    .dian-text{
        padding: 0 15px;
        margin-left: 21%;
        .koubei{
            img{
                width: 10px;
                height: 10px;
            }
            >span{
                color:#E9480C;
                font-size: 0.12rem;
            }
        }
        .her{
            overflow: hidden;
            width: 100%;
            display: block;
            position: relative;
            height: 0.2rem;
        }
        .her:after{
            content: '';
            width: 100%;
            height: 0;
            position: absolute;
            top:10px;
            border-left: 10px solid #ccc;
            border-right: 10px solid #ccc;
            border-top: 1px solid #ccc;
        }

    }


    .dian-info{
        display: flex;
        padding: 0px 15px;
        .dian-log{
            width: 23%;
            img{
                width: 90%;
                height: 0.7rem;
            }
        }
        .dian-main{
            flex-grow: 1;
            section{
                padding: 0px 0 7px;
                display: flex;
                justify-content: space-between;
            }
            h3{
                overflow: hidden;
                font-size: 0.16rem;
                a{
                    background: #fff100;
                    color: #6f3f15;
                    font-size: 12px;
                }
                span{
                    font-weight: 700;
                    font-size: 0.15rem;
                }
            }
            .dian-pin{
                display: flex;
                justify-content: space-between;
                span,i{
                    font-style: normal ;
                    color: #666;
                    font-size: 0.1rem;
                }
            }
            .dian-kuaidi{
                color: #fff;
                font-size: 0.1rem;
                background: #008DFF;
            }
            .qisong{
                span{
                    color: #666;
                    font-size: 0.08rem;
                }
            }
            .juli{
                span{
                    font-size: 0.08rem;
                    color: #666;
                }
            }
        }
    }
</style>
