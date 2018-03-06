<template>
    <div class="content">
        <div>
            <!-- 头部-->
            <div class="head">
                <div class="address"><span class="el-icon-location"></span><h3>东城区北京市政府</h3><i class="el-icon-caret-bottom"></i></div>
                <router-link to="/ss" tag=""div class="input">
                    <el-input
                            placeholder="搜索商家、商品名称"
                            prefix-icon="el-icon-search">
                    </el-input>
                </router-link>
            </div>

            <div class="main-con">

                <!-- swiper-->
                <div class="swiper-container liebiao">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="item in arr">
                            <div class="lie">
                                <router-link  v-for="(temp,index) in item" :key="index" to="/nav1">
                                    <img src="../../../static/img1/index1_07.png" alt=""/>
                                    <p>{{ temp.title }}</p>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>

                <!-- 图礼包-->

                <div class="libao">
                    <router-link to="/libao">
                        <img src="https://fuss10.elemecdn.com/3/c8/45b2ec2855ed55d90c45bf9b07abbpng.png?imageMogr/format/webp/thumbnail/!710x178r/gravity/Center/crop/710x178/"
                             alt=""/>
                    </router-link>
                </div>


                <!-- 推荐商家-->
                <div class="tuijian">
                    <div class="til">
                        <i></i>
                        <span>推荐商家</span>
                        <i></i>
                    </div>

                    <my-dian :dian="dianpu"></my-dian>
                </div>
            </div>
        </div>
        <my-fan></my-fan>
    </div>
</template>

<script>
    import Head from "@/components/public/header"
    import Dianlie from "@/components/public/dianlie"
    import Fanhui from "@/components/public/fanhui"
    export default {
        data:function(){
          return{
              dianpu:[],
              arr:[]
          }
        },
        mounted:function(){
            $(".input").click(function(){

            })
            this.msgdata();
            this.msginfo();
            var myswi = new Swiper(".liebiao",{
                pagination:".swiper-pagination",
                observer:true,
                observeParents:true
            });


                var iscr = new IScroll(".content",{
                    scroll:true,
                    probeType:3
                });

                iscr.on("beforeScrollStart",function(){
                    iscr.refresh();
                });

                //    滚动中
                iscr.on("scroll",function(){
                    console.log(this.y);
                    if(this.y<-40){
                        $(".input1").css("display","block");
                        $(".ding").show()
                    }else{
                        $(".input1").css("display","none");
                        $(".ding").hide()
                    }
                });

            $(".ding").click(function(){
                iscr.scrollTo(0,0,500,IScroll.utils.ease.quadratic)
            })

        },
        methods:{
            msgdata:function(){
                this.$http({
                    method:"get",
                    url:"http://cangdu.org:8001/shopping/restaurants?latitude=31.22967&longitude=121.4762"
                }).then(respon =>{
//                    console.log(respon.data);
                    this.dianpu = respon.data
                },
                respon => {
                    console.log(respon);
                }
                )
            },
            msginfo:function(){
                this.$http({
                    method:"get",
                    url:"http://cangdu.org:8001/v2/index_entry"
                }).then(respon =>{
                    console.log(respon.data);
                    this.arr.push(respon.data.slice(0,8));
                    this.arr.push(respon.data.slice(8,16));
                    console.log(this.arr);
                    console.log(this.arr.length);
                },
                respon => {
                    console.log(respon);
                }
                )
            }
        },
        components:{
            "my-head":Head,
            "my-dian":Dianlie,
            "my-fan":Fanhui
        }
    }
</script>
<style lang="scss">

    .content{
        flex-grow: 1;
        height: 600px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
    .tuijian{
        .til{
            padding: 10px 0;
            display: flex;
            justify-content: center;
            i{
                width: 25px;
                position: relative;
            }
            i::after{
                content: '';
                width: 0;
                height: 0;
                position: absolute;
                top:10px;
                border-left: 10px solid #aaa;
                border-right: 10px solid #aaa;
                border-top: 1px solid #aaa;
            }
            span{
                font-size: 0.15rem;
                padding: 0px 10px;
            }
        }
    }
    .libao{
        border-bottom: 8px solid #eee;
        padding: 10px 15px;
        img{
            width: 100%;
        }
    }

    .liebiao{
        .swiper-pagination{
            bottom: 0;
        }
        .swiper-pagination-bullet{
            width: 5px;
            height: 5px;
        }
    }
    .lie{
        padding: 8px 0;
        display: flex;
        flex-wrap: wrap;
        a{
            width: 25%;
            padding: 5px 0;
            text-align: center;
            img{
               width: 0.4rem;
               height: 0.4rem;
            }
            p{
                font-size: 12px;
                color: #666;
            }
        }
    }

    .head{
        width: 100%;
        background: #0090FF;
        padding: 10px 15px;
    }
    .input{
        height: 35px;
        .el-input__prefix{
        left:25%;
    }
    input::-webkit-input-placeholder{
        color: #333;
        text-indent: 6em;
    }
    }

    .address{
        padding: 10px 0;
        display: flex;
        align-items: center;
        h3{
            color: #fff;
            font-size: 0.16rem;
            font-weight: 600;
            margin: 0 5px;
        }
        span{
            font-size: 0.2rem;
            color: #fff;
        }
        i{
            color: #fff;
            margin-top: -5px;
        }
    }
</style>
