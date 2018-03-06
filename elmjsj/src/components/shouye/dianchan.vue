<template>
    <div class="dianchan">
        <div class="dianchan_con">
            <!-- 左-->
            <div class="con_left" ref="con_left">
                <div>
                    <ul v-for="(item,index) in dcdata">
                        <li :class="{'color':getIndex==index}" @click="clickscroll(index)">
                            <span>{{ item.name }}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 右-->
            <div class="con_right" ref="con_right">
                <div>
                    <div class="con_list" v-for="item in dcdata">
                        <h4>{{ item.name }}<span>{{ item.description }}</span></h4>
                        <div v-for="item1 in item.foods">
                            <!-- 左边图片-->
                            <div class="list-img">
                                <img :src="'http://cangdu.org:8001/img/'+item1.image_path" alt=""/>
                            </div>
                            <!-- 右边内容-->
                            <section>
                                <p>{{ item1.name }}</p>
                                <p>{{ item1.description }}</p>
                                <p>边缘</p>
                                <div class="zhegou">
                                    <!--<span>5折</span>-->
                                    <!--<span>限量抢购</span>-->
                                </div>
                                <strong>￥{{ item1.specfoods[0].price }}</strong>
                                <div class="dainji">
                                    <span>
                                        <a class="el-icon-remove-outline"></a>
                                    </span>
                                        <span>1</span>
                                    <span>
                                        <a class="el-icon-circle-plus"></a>
                                    </span>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import BScroll from 'better-scroll'
    export default {
        props:["dcdata"],
        data:function(){
          return {
              //              滚动距离
              scrollCount:0,
              heightArr:[0]
          }
        },
        mounted:function(){
            this.$nextTick(() => {
                //调用函数
                this.bscroll();
                //获取高度数组方法
                this.getHeight()
            })
        },
        methods:{
            bscroll(){
                //初始化 con_right    容器
                this.con_right = new BScroll(this.$refs.con_right,{
            //     设置滚动监听
                    probeType:3,
                });
                //初始化  con_left   容器
                this.con_left = new BScroll(this.$refs.con_left,{
//                    开启点击事件
                    click:true
                });

                this.con_right.on("scroll",(obj) => {

                    this.scrollCount = -Math.round(obj.y);
                    console.log(this.scrollCount);
                    if(this.scrollCount>0){
                        $(document).scrollTop(this.scrollCount);
                    }
                })
            },
//            获取每个高度
            getHeight(){
                var heiht = document.getElementsByClassName("con_list");
                var n = 0;
                for(var i=0 ; i<heiht.length; i ++){
                    n += heiht[i].clientHeight;
                    //存到数组里面
                    this.heightArr.push(n)
                    console.log(this.heightArr);
                }
            },
////            点击
            clickscroll (index) {
                var lis = document.getElementsByClassName("con_list");
                this.con_right.scrollToElement(lis[index],400)
            }
        },
        computed:{
//            实时计算
            getIndex(){
                // 遍历数组
                // 判断滚动告诉在  那个范围内
                for(var i= 0; i<this.heightArr.length-1;i++){
                    if(this.scrollCount>=this.heightArr[i] && this.scrollCount<this.heightArr[i+1]){
                        return i
                    }
                }
                return 0
            }
        }
    }
</script>
<style scoped lang="scss">
    .dianchan{
        height: 100%;
    }
    .con_list{
        h4{
            font-weight: 500;
            color: #444;
            span{
                margin-left: 10px;
                color: #999;
            }
        }
        >div{
            padding: 15px 0;
             position: relative;
            display: flex;
            justify-content: space-between;
        }
         .list-img{
             width: 0.8rem;
             height: 0.8rem;
             margin-right: 10px;
             img{
                 margin-top: 5px;
                 width: 100%;
                 height: 95%;
             }
         }
         section{
             position: relative;
             padding-bottom: 0.17rem;
             flex-grow: 1;
             line-height: 1.5;
             width: 70%;
            p:nth-child(1){
                font-size: 0.15rem;
                font-weight: 600;
                color: #333;
            }
            p:nth-child(2){
                font-size: 0.08rem;
                color: #666;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            p:nth-child(3){
                color: #111;
                font-size: 0.08rem;
            }
            .zhegou{
                span:nth-child(1){
                    font-size: 0.08rem;
                    color: #fff;
                    background-image: linear-gradient(90deg,#ff7416,#ff3c15 98%);
                }
                span:nth-child(2){
                    font-size: 0.08rem;
                    color: #f07373;
                    border: 1px solid pink;
                }
            }
            strong{
                color:#ff3c15 ;
                position: absolute;
                left: 0;
                font-size: 0.15rem;
                bottom: 0;

            }
            .dainji{
                position: absolute;
                right: 0;
                display: flex;
                align-items: center;
                bottom: 0;
                span{
                    margin-left: 5px;
                }
                span:nth-child(2){
                    color: #666;
                }
                a{
                    font-size: 0.18rem;
                    color: #2395FF;
                }
            }
         }
    }
    .dianchan_con{
        height: 100%;
        display: flex;
        .con_left{
            height: 100%;
            background: #f8f8f8;
            width: 21%;
            li{
                padding: 13px 0;
                text-align: center;
                color: #666;
            }
            li.color{
                background: #fff;
                color: #333;
                border-left: 2px solid #2395FF;
            }
        }
        .con_right{
            height: 100%;
            width: 80%;
            padding:0  13px 0 10px;
            flex-grow: 1;
        }
    }

</style>
