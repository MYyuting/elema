<template>
    <div class="jinBi">
        <!-- 轮播-->
        <div class="swiper-container banner">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <router-link to="/a">
                        <img src="//yun.duiba.com.cn/images/201801/g97o78yu0x.jpg?x-oss-process=image/format,webp" alt=""/>
                    </router-link>
                </div>
                <div class="swiper-slide">
                    <router-link to="/a">
                        <img src="//yun.duiba.com.cn/images/201801/z9wk93hci4.jpg?x-oss-process=image/format,webp" alt=""/>
                    </router-link>
                </div>
                <div class="swiper-slide">
                    <router-link to="/a">
                        <img src="//yun.duiba.com.cn/images/201801/n7m312sked.jpg?x-oss-process=image/format,webp" alt=""/>
                    </router-link>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>

        <section>
            <div class="jb-top">
                <a href="#">
                    <i class="iconfont icon-diamond"></i>
                    <span>金币 <span class="jbNum">50</span></span>
                </a>
                <a href="#">
                    <i class="el-icon-tickets"></i>
                    <span>兑换记录<span class="jbNum"></span></span>
                </a>
            </div>
        </section>
        <section>
            <div class="foor-list">
                <a href="#" v-for="item in arr">
                    <img :src="item.img" alt=""/>
                    <p>{{ item.til }}</p>
                </a>
            </div>
        </section>

        <section>
            <div class="foor-list2">
                <a href="#">
                    <img src="//yun.duiba.com.cn/images/201801/f11xtg5yfg.png" alt=""/>
                </a>
                <div>
                    <a href="#">
                        <img src="//yun.duiba.com.cn/images/201712/0v2am11vsq.jpeg" alt=""/>
                    </a>
                    <a href="#">
                        <img src="//yun.duiba.com.cn/images/201711/8llje5i25r.jpg" alt=""/>
                    </a>
                </div>
            </div>
        </section>

        <section>
            <div class="foor-list3">
                <div class="list-til">大家都在说</div>
                <div class="list-lie">
                    <a href="#">
                        <h3>3元饿了么红包－鲜果超市红包</h3>
                        <p>90 <span> 金币</span>  <span>222</span></p>
                        <img src="//yun.duiba.com.cn/images/201706/foo1frf1ov.png" alt=""/>
                    </a>
                    <a href="#">
                        <h3>3元饿了么红包－鲜果超市红包</h3>
                        <p>90 <span> 金币</span></p>
                        <img src="//yun.duiba.com.cn/images/201706/foo1frf1ov.png" alt=""/>
                    </a>
                    <a href="#">
                        <h3>3元饿了么红包－鲜果超市红包</h3>
                        <p>90 <span> 金币</span></p>
                        <img src="//yun.duiba.com.cn/images/201706/foo1frf1ov.png" alt=""/>
                    </a>
                    <a href="#">
                        <h3>3元饿了么红包－鲜果超市红包</h3>
                        <p>90 <span> 金币</span></p>
                        <img src="//yun.duiba.com.cn/images/201706/foo1frf1ov.png" alt=""/>
                    </a>
                </div>
            </div>
        </section>
        <!-- 底部-->
        <section class="bodi">
            <p>*兑换项和活动皆与设备生产商Apple Inc.无关</p>
            <p>合作请联系：ejifen@ele.me</p>
        </section>
    </div>
</template>
<style scoped lang="scss">
    section{
        border-bottom: 8px solid #eee;
    }
    .bodi{
        text-align: center;
        background: #eee;
        p{
            color: #333;
        }
        p:nth-child(1){
            padding-top: 15px;
        }
    }
    .foor-list3{
        .list-til{
            padding: 5px 15px;
            line-height: 2;
            border-bottom: 1px solid #eee;
        }
        .list-lie{
            display: flex;
            flex-wrap: wrap;
            h3{
                font-weight: 500;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            a:not(odd){
                border-right: 1px solid #eee;
            }
            a{
                border-bottom: 1px solid #eee;
                padding: 10px;
                width: 50%;
                p{
                    color: #ff6000 !important;
                    span:nth-of-type(1){
                        color: #666;
                    }
                    span:nth-of-type(2){
                        color: #fff;
                        font-size: 0.1rem;
                        background: red;
                        border-radius: 3px;
                    }
                }
                img{
                    width: 100%;
                }
            }

        }
    }
    .foor-list2{
        display: flex;
        >a{
            width: 50%;
            img{
                width: 100%;
            }
        }
        div{
            border-left: 1px solid #eee;
            width: 50%;
            a{
                img{
                    width: 100%;
                }
            }
        }
    }
    .foor-list{
        display: flex;
        flex-wrap: wrap;
        padding: 5px 10px;
        a{
            padding: 6px 0;
            text-align: center;
            width: 25%;
            img{
                width: 40px;
                height: 40px;
                margin-bottom: 5px;
                border-radius: 50%;
            }
            p{
                color: #666;
            }
        }
    }
    .jb-top{
        display: flex;
        justify-content: center;
        padding: 12px 0;
        a{
            width: 50%;
            text-align: center;
            i{
                color: #aaa;
            }
            .jbNum{
                color: #ff6000 !important;
            }
        }
        a:nth-child(1){
            border-right: 1px solid #ccc;
        }
    }
    .banner{
        img{
            width: 100%;
        }
        .swiper-pagination-bullet-active{
            background: #fff;
        }
    }
</style>
<script>

    export default {
        data:function(){
          return{
              arr:[
                  {
                      img:"//yun.duiba.com.cn/developer/img/custom_default_icon.png",
                      til:"0元兑好礼",
                      url:""
                  },
                  {
                      img:"//yun.duiba.com.cn/images/201707/gawmi0zjp2.jpg",
                      til:"红包专区",
                      url:""
                  },
                  {
                      img:"//yun.duiba.com.cn/images/201611/q4eion0i4l.png",
                      til:"0元兑好礼",
                      url:""
                  },
                  {
                      img:"//yun.duiba.com.cn/images/201611/yrvj0axxff.png",
                      til:"0元兑好礼",
                      url:""
                  },
                  {
                      img:"//yun.duiba.com.cn/images/201611/5glf4cj3io.png",
                      til:"0元兑好礼",
                      url:""
                  },
                  {
                      img:"//yun.duiba.com.cn/images/201611/by82zpc962.png",
                      til:"0元兑好礼",
                      url:""
                  },
                  {
                      img:"//yun.duiba.com.cn/images/201611/e2gpweapqd.png",
                      til:"0元兑好礼",
                      url:""
                  },
                  {
                      img:"//yun.duiba.com.cn/img/icon_all.png",
                      til:"所有商品",
                      url:""
                  }
              ]
          }
        },
        mounted:function(){
            var swiper = new Swiper(".banner",{
                loop:true,
                pagination:".swiper-pagination"
            })
        }
    }
</script>