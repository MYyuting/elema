<template>
    <div class="faxian">
        <my-hed :msg="touTli"></my-hed>
        <!-- 这是内容-->
        <div class="fax-ic" ref="faicon">
            <div class="fa-con">
                <div class="fa-lie">
                    <div class="lie3">
                        <router-link to="/jinbi">
                            <div>
                                <p>必吃爆料</p>
                                <p>最夯外卖指南</p>
                            </div>
                            <img src="https://fuss10.elemecdn.com/2/36/b784087aff96a97f4e5183d0d784fjpeg.jpeg?imageMogr/format/webp/" alt=""/>
                        </router-link>
                        <router-link to="/eat">
                            <div>
                                <p>必吃爆料</p>
                                <p>最夯外卖指南</p>
                            </div>
                            <img src="https://fuss10.elemecdn.com/2/36/b784087aff96a97f4e5183d0d784fjpeg.jpeg?imageMogr/format/webp/" alt=""/>
                        </router-link>
                        <router-link to="/ll">
                            <div>
                                <p>必吃爆料</p>
                                <p>最夯外卖指南</p>
                            </div>
                            <img src="https://fuss10.elemecdn.com/6/76/8d42eef97ff4c1c2b671085358541jpeg.jpeg?imageMogr/format/webp/" alt=""/>
                        </router-link>
                        <router-link to="/ll">
                            <div>
                                <p>必吃爆料</p>
                                <p>最夯外卖指南</p>
                            </div>
                            <img src="https://fuss10.elemecdn.com/6/76/8d42eef97ff4c1c2b671085358541jpeg.jpeg?imageMogr/format/webp/" alt=""/>
                        </router-link>
                        <router-link to="/ll">
                            <div>
                                <p>必吃爆料</p>
                                <p>最夯外卖指南</p>
                            </div>
                            <img src="https://fuss10.elemecdn.com/6/76/8d42eef97ff4c1c2b671085358541jpeg.jpeg?imageMogr/format/webp/" alt=""/>
                        </router-link>
                    </div>
                    <div class="ggtu">
                        <router-link to="/tu">
                            <img src="https://fuss10.elemecdn.com/b/6d/656006edcd86033a1b32b23ddea37jpeg.jpeg?imageMogr/format/webp/" alt=""/>
                        </router-link>
                    </div>
                </div>
                <!-- 限时好礼-->
                <section>
                    <div class="til">
                        <span class="line left"></span>
                        <i class="el-icon-date"></i>
                        <strong>限时好礼</strong>
                        <span class="line left"></span>
                    </div>
                    <p>金币换豪礼</p>

                    <div class="fa-list">
                        <router-link to="/a">
                            <img src="https://fuss10.elemecdn.com/7/c5/f595b52bc6b50c9899398dccffd42jpeg.jpeg?imageMogr/format/webp/" alt=""/>
                            <div class="txt">
                                <p>7元饿了么红包</p>
                                <div>
                                    <span>210金币</span>
                                    <s>￥7</s>
                                </div>
                            </div>
                            <span class="xian">限时优惠</span>
                        </router-link>
                        <router-link to="/a">
                            <img src="https://fuss10.elemecdn.com/0/77/8036918ccd10b9e6ea5064c86781fjpeg.jpeg?imageMogr/format/webp/" alt=""/>
                            <div class="txt">
                                <p>7元饿了么红包</p>
                                <div>
                                    <span>210金币</span>
                                    <s>￥7</s>
                                </div>
                            </div>
                            <span class="xian">限时优惠</span>
                        </router-link>
                        <router-link to="/a">
                            <img src="https://fuss10.elemecdn.com/d/56/8b479231309654bfa07f28999768bjpeg.jpeg?imageMogr/format/webp/" alt=""/>
                            <div class="txt">
                                <p>7元饿了么红包</p>
                                <div>
                                    <span>210金币</span>
                                    <s>￥7</s>
                                </div>
                            </div>
                            <span class="xian">限时优惠</span>
                        </router-link>
                    </div>
                    <p><span>显示更多 <i class="el-icon-arrow-right"></i></span></p>
                </section>
                <!-- 推荐有礼-->
                <section>
                    <div class="til">
                        <span class="line left"></span>
                        <i class="el-icon-date"></i>
                        <strong>限时好礼</strong>
                        <span class="line left"></span>
                    </div>
                    <p>金币换豪礼</p>

                    <div class="fa-list">
                        <router-link to="/a">
                            <img src="https://fuss10.elemecdn.com/7/c5/f595b52bc6b50c9899398dccffd42jpeg.jpeg?imageMogr/format/webp/" alt=""/>
                            <div class="txt">
                                <p>7元饿了么红包</p>
                                <div>
                                    <span>210金币</span>
                                    <s>￥7</s>
                                </div>
                            </div>
                            <span class="xian">限时优惠</span>
                        </router-link>
                        <router-link to="/a">
                            <img src="https://fuss10.elemecdn.com/0/77/8036918ccd10b9e6ea5064c86781fjpeg.jpeg?imageMogr/format/webp/" alt=""/>
                            <div class="txt">
                                <p>7元饿了么红包</p>
                                <div>
                                    <span>210金币</span>
                                    <s>￥7</s>
                                </div>
                            </div>
                            <span class="xian">限时优惠</span>
                        </router-link>
                        <router-link to="/a">
                            <img src="https://fuss10.elemecdn.com/d/56/8b479231309654bfa07f28999768bjpeg.jpeg?imageMogr/format/webp/" alt=""/>
                            <div class="txt">
                                <p>7元饿了么红包</p>
                                <div>
                                    <span>210金币</span>
                                    <s>￥7</s>
                                </div>
                            </div>
                            <span class="xian">限时优惠</span>
                        </router-link>
                    </div>
                    <p><span>显示更多 <i class="el-icon-arrow-right"></i></span></p>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import Head from "@/components/public/header"
    export default {
        data:function(){
            return {
                touTli:"发现"
            }
        },
        mounted:function(){
            this.$nextTick(() =>{
                this.faicon = new BScroll(this.$refs.faicon,{
                    click:true
                })
            })
        },
        components:{
            "my-hed":Head
        }

    }
</script>
<style scoped lang="scss">
    .faxian{
        flex-grow: 1;
        height: 650px;
        display: flex;
        overflow: hidden;
        flex-direction: column;
    }
    .fax-ic{
        flex-grow: 1;
        overflow: hidden;
        height: 600px;
    }
    .ggtu{
        border-bottom: 8px solid #eee;
        img{
            width: 100%;
        }
    }
    .lie3{
        border-bottom: 8px solid #eee;
        display: flex;
        flex-wrap:wrap ;
        position: relative;
        a:nth-child(1){
            position: absolute;
            width: 50%;
            height: 1.6rem;
            top: 0;
            left: 0;
            img{
                width: 0.65rem;
                height: 0.65rem;
                align-self: flex-end;
            }
        }
        a:nth-child(2),a:nth-child(3){
            margin-left: 50%;
        }
        a{
            display: flex;
            height: 0.8rem;
            justify-content: space-between;
            padding: 15px 15px;
            border-bottom: 1px solid #eee;
            width: 50%;
            img{
                width: 0.4rem;
                height: 0.4rem;
            }
            div{
                p:nth-child(1){
                    font-size: 0.15rem;
                    color: rgb(255, 153, 0);
                }
                p:nth-child(2){
                    color: #999;
                }
            }
        }
    }
    .fa-list{
        padding: 15px;
        display: flex;
        a{
            position: relative;
            width: 33%;
            img{
                width: 100%;
            }
            .xian{
               position: absolute;
                top: 0;
                font-size: 12px;
                left: 5px;
                background: #333;
                color: #fff;
            }
            .txt{
                div{
                    span{
                        color: #ff5339;
                    }
                    s{
                        font-size: 12px;
                        color: #aaa;
                    }
                }
            }
        }
    }
    .fa-con{
        section{
            padding-bottom: 10px;
            border-bottom: 8px solid #eee;
        }
        section>p{
            line-height: 1.5;
            text-align: center;
            font-size: 12px;
            color: #999;
         }
        .til{
            margin-top: 16px;
            text-align: center;
            strong{
                font-size: 18px;
                color: #333;
            }
        }
    }
</style>
