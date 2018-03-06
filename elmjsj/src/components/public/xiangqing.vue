<template>
    <div class="xiangqing" >
            <div class="navs">
                <a href="javascript:history.back();">
                    <i class="el-icon-arrow-left preBtn"></i>
                </a>
            </div>
            <div>
                <div class="titCont">
                    <img :src="'http://cangdu.org:8001/img/'+arr.image_path" alt="">
                    <div class="tit">
                        <span>品牌</span>
                        <span class="mb">{{arr.name}}</span>
                        <span class="el-icon-caret-right"></span>
                    </div>
                    <p>{{arr.rating}} 月售137单 蜂鸟专送 约50分钟 距离1.6km</p>
                    <p>欢迎光临，用餐高峰请提前下单，谢谢。</p>
                    <div class="youhui">
                        <p><span>首单</span> 新用户下单立减17元（不与其他活动同享）</p>
                        <span>3个优惠 <i class="el-icon-caret-bottom"></i></span>
                    </div>
                    <div class="bj">
                      <span class="hongbao">
                        <span class="el-icon-circle-check-outline"></span> 6元无门槛红包 <button>领取 </button>
                      </span>
                    </div>
                </div>
            </div>


            <!-- tab切换-->
            <div class="tab-con">
                <!-- 切换部分-->
                <ul class="tabList">
                    <li class="bodr"><span>点餐</span></li>
                    <li><span>评价</span></li>
                    <li><span>商家</span></li>
                </ul>
                <div class="tab-c">
                    <!-- 点餐-->
                    <div class="order tab-1" style="display: block">

                        <div class="dianchan_con">
                            <!-- 左-->
                            <div class="con_left" ref="con_left">
                                <div>
                                    <ul v-for="(item,index) in dcdata">
                                        <li :class="{'color':getIndex==index}" @click="clickScroll(index)">
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
                                                <my-dianji :item="item1"></my-dianji>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 评价-->
                    <div class="pingjia tab-1 order1" ref="order1">
                        <div>
                            <div class="pingfen">
                                <div class="pfLeft">
                                    <p>4.9</p>
                                    <p>综合评价</p>
                                    <p>高于周边商家83.7%</p>
                                </div>
                                <div class="pjRight">
                                    <p>服务态度
                                        <el-rate
                                                v-model="value5"
                                                disabled
                                                show-score
                                                text-color="#ff9900"
                                                score-template="{value}">
                                        </el-rate>
                                    </p>
                                    <p>菜品评价
                                        <el-rate
                                                v-model="value4"
                                                disabled
                                                show-score
                                                text-color="#ff9900"
                                                score-template="{value}">
                                        </el-rate>
                                    </p>
                                    <p>送达时间 &nbsp&nbsp32分钟</p>
                                </div>
                            </div>
                            <!--全部评价信息-->
                            <div class="pingfenTab">
                                <div class="btnPf">
                                    <button>全部(1047)</button>
                                    <button>满意(1035)</button>
                                    <button>不满意(12)</button>
                                    <button>有图(13)</button>
                                </div>
                                <div class="pj_info">
                                    <!--全部-->
                                    <div class="BtnPJcont">
                                        <ul class="userInfo">
                                            <li>
                                                <img src="https://fuss10.elemecdn.com/c/f5/d0b0f2fc83f3ac3e4a0cfae891256png.png?imageMogr/format/webp/thumbnail/!60x60r/gravity/Center/crop/60x60/" alt="">
                                                <div>
                                                    <p class="pf_titile">匿名用户 <span>2.18-01-05</span></p>
                                                    <el-rate
                                                            v-model="value5"
                                                            disabled
                                                            show-score
                                                            text-color="#ff9900"
                                                            score-template="{value}">
                                                    </el-rate>
                                                    <p>服务还好，送餐有块...</p>
                                                    <ul class="userImg">
                                                        <li>
                                                            <img src="https://fuss10.elemecdn.com/6/8e/809a11903cd2ac97e9fe92a0bb6fajpeg.jpeg?imageMogr/format/webp/thumbnail/!142x142r/gravity/Center/crop/142x142/" alt="">
                                                        </li>
                                                    </ul>
                                                    <ul class="userShop">
                                                        <li>麦乐鸡5块-例</li>
                                                        <li>经典麦辣鸡腿汉堡小玉套餐</li>
                                                        <li>巨无霸大薯套餐</li>
                                                        <li>麦辣鸡翅2块-例</li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>

                                    </div>
                                    <!--满意-->
                                    <div class="BtnPJcont">aadfsdf</div>
                                    <!--不满意-->
                                    <div class="BtnPJcont">asadfadfsdf</div>
                                    <!--有图-->
                                    <div class="BtnPJcont">asdadsff</div>
                                </div>
                                <div class="pj_info">
                                    <!--全部-->
                                    <div class="BtnPJcont">
                                        <ul class="userInfo">
                                            <li>
                                                <img src="https://fuss10.elemecdn.com/c/f5/d0b0f2fc83f3ac3e4a0cfae891256png.png?imageMogr/format/webp/thumbnail/!60x60r/gravity/Center/crop/60x60/" alt="">
                                                <div>
                                                    <p class="pf_titile">匿名用户 <span>2.18-01-05</span></p>
                                                    <el-rate
                                                            v-model="value5"
                                                            disabled
                                                            show-score
                                                            text-color="#ff9900"
                                                            score-template="{value}">
                                                    </el-rate>
                                                    <p>服务还好，送餐有块...</p>
                                                    <ul class="userImg">
                                                        <li>
                                                            <img src="https://fuss10.elemecdn.com/6/8e/809a11903cd2ac97e9fe92a0bb6fajpeg.jpeg?imageMogr/format/webp/thumbnail/!142x142r/gravity/Center/crop/142x142/" alt="">
                                                        </li>
                                                    </ul>
                                                    <ul class="userShop">
                                                        <li>麦乐鸡5块-例</li>
                                                        <li>经典麦辣鸡腿汉堡小玉套餐</li>
                                                        <li>巨无霸大薯套餐</li>
                                                        <li>麦辣鸡翅2块-例</li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>

                                    </div>
                                    <!--满意-->
                                    <div class="BtnPJcont">aadfsdf</div>
                                    <!--不满意-->
                                    <div class="BtnPJcont">asadfadfsdf</div>
                                    <!--有图-->
                                    <div class="BtnPJcont">asdadsff</div>
                                </div>
                                <div class="pj_info">
                                    <!--全部-->
                                    <div class="BtnPJcont">
                                        <ul class="userInfo">
                                            <li>
                                                <img src="https://fuss10.elemecdn.com/c/f5/d0b0f2fc83f3ac3e4a0cfae891256png.png?imageMogr/format/webp/thumbnail/!60x60r/gravity/Center/crop/60x60/" alt="">
                                                <div>
                                                    <p class="pf_titile">匿名用户 <span>2.18-01-05</span></p>
                                                    <el-rate
                                                            v-model="value5"
                                                            disabled
                                                            show-score
                                                            text-color="#ff9900"
                                                            score-template="{value}">
                                                    </el-rate>
                                                    <p>服务还好，送餐有块...</p>
                                                    <ul class="userImg">
                                                        <li>
                                                            <img src="https://fuss10.elemecdn.com/6/8e/809a11903cd2ac97e9fe92a0bb6fajpeg.jpeg?imageMogr/format/webp/thumbnail/!142x142r/gravity/Center/crop/142x142/" alt="">
                                                        </li>
                                                    </ul>
                                                    <ul class="userShop">
                                                        <li>麦乐鸡5块-例</li>
                                                        <li>经典麦辣鸡腿汉堡小玉套餐</li>
                                                        <li>巨无霸大薯套餐</li>
                                                        <li>麦辣鸡翅2块-例</li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>

                                    </div>
                                    <!--满意-->
                                    <div class="BtnPJcont">aadfsdf</div>
                                    <!--不满意-->
                                    <div class="BtnPJcont">asadfadfsdf</div>
                                    <!--有图-->
                                    <div class="BtnPJcont">asdadsff</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 商家-->
                    <div class="shangjia tab-1 order2" ref="order2">
                        <div>
                            <section>
                                <h3>配送信息</h3>
                                <div class="psxx">
                                    <div>
                                        <p>由商家配送提供配送，约30分钟送达，距离1.1km</p>
                                    </div>
                                    <div>
                                        配送费￥9
                                    </div>
                                </div>
                            </section>
                            <section>
                                <h3>活动与服务</h3>
                                <div class="psxx">
                                    <div>
                                        <span>首单</span>
                                        <span>新用户下单立减17元(不与其它活动同享)</span>
                                    </div>
                                    <div>
                                        <span>票</span>
                                        <span>该商家支持开发票，请在下单时填写好发票抬头</span>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <h3>商家信息</h3>
                                <div class="psxx">
                                    <ul>
                                        <li>站务简介</li>
                                        <li>
                                            <span>商家电话</span>
                                            <span>551215451</span>
                                        </li>
                                        <li>
                                            <span>地址</span>
                                            <span>北京市东城区打磨厂街7号010340A商铺</span>
                                        </li>
                                        <li>
                                            <span>营业时间</span>
                                            <span>00:00-04:45,05:15-10:15,10:30-23:55</span>
                                        </li>
                                        <router-link to="/44" tag="li">
                                            <span>营业资质</span>
                                            <span></span>
                                        </router-link>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            <my-gwc :getgwc="getgwc"></my-gwc>

        <!-- 标题模板-->
            <my-moban :msgdata="arr"></my-moban>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import gwc from "@/components/shouye/gwcdi"
    import moban from "@/components/shouye/moban"
    import Dianji from "@/components/public/dianji"
    export default {
        data: function () {
            return {
                arr: {},
                dcdata: [],
                value5: 4.9,
                value4: 4.9,
                //              滚动距离
                scrollCount: 0,
                heightArr: [0]
            }
        },
        mounted: function () {

//            点击显示模板
            $(".mb").click(function(){
                $(".moban").show()
            })
//            点击切换
            $(".tabList").on("click","li",function(){
                var index = $(this).index();
                $(this).addClass('bodr').siblings().removeClass('bodr');
                $(".tab-1").eq(index).show().siblings().hide()
            });
//            评价里切换
            $(".btnPf > button").on("click",function () {
                var index = $(this).index();
//        alert(index);
                $(".BtnPJcont").eq(index).show().siblings().hide()
            })

//            数据
            this.msgshu();
            this.diancan();

        },
        computed:{
//            获取购物车信息
            getgwc: function(){
                //创建一个空数组
                var arr=[];
                        //
                for(var items of this.dcdata){
                    for(var food of items.foods){
                        if(food.num > 0){
                            arr.push(food)
                        }
                    }
                }
                console.log(arr);
                return arr;
            },

            //   实时计算
            getIndex: function(){
                // 遍历数组
                // 判断滚动告诉在  那个范围内
                for (var i = 0; i < this.heightArr.length - 1; i++) {
                    if (this.scrollCount >= this.heightArr[i] && this.scrollCount < this.heightArr[i + 1]) {
                        return i
                    }
                }
                return 0
            }
        },
        methods: {

            msgshu: function () {
                this.$http({
                    method: "get",
                    url: "http://cangdu.org:8001/shopping/restaurant/" + this.$route.params.id
                }).then(respon => {
                    //                  console.log(respon.data)
                    this.arr = respon.data;

                    console.log(this.arr);
                },
                respon =>
                {
                    console.log(respon + "获取失败");
                }
                )
            },

//            下面列表的数据
            diancan: function () {
                this.$http({
                    method: "get",
                    url: "http://cangdu.org:8001/shopping/v2/menu?restaurant_id=" + this.$route.params.id
                }).then(res => {
//                    console.log(res.data);
                    this.dcdata = res.data;
                    this.$nextTick(() =>{
                        //调用函数
                        this.bscroll();
                        //获取高度数组方法
                        this.getHeight()
                    })
                },
                res => {
                    console.log(res);
                })
            },
            bscroll(){
                //初始化 con_right    容器
                this.con_right = new BScroll(this.$refs.con_right, {
                    click: true,
                    //     设置滚动监听
                    probeType: 3
                });
                //初始化  con_left   容器
                this.con_left = new BScroll(this.$refs.con_left, {
                    //   开启点击事件
                    click: true
                });


                this.con_right.on("scroll", (obj) =>{

                    this.scrollCount = -Math.round(obj.y);
//                    console.log(this.scrollCount);

                    if (this.scrollCount > 0) {
                        $(document).scrollTop(this.scrollCount);
                    }
                    if(this.scrollCount >= 200){
                        $(".qiehuan").addClass("postion")
                    }else{
                        $(".qiehuan").removeClass("postion")
                    }
                })
            },
            //            获取每个高度
            getHeight:function(){
                var heiht = document.getElementsByClassName("con_list");
                var n = 0;
                for (var i = 0; i < heiht.length; i++) {
                    n += heiht[i].clientHeight;
                    //存到数组里面
                    this.heightArr.push(n);
//                    console.log(this.heightArr);
                }
            },
            //            点击
            clickScroll(index){
                var lis = document.getElementsByClassName("con_list");
                this.con_right.scrollToElement(lis[index],400)
            },

        },
        components:{
            "my-gwc":gwc,
            "my-dianji":Dianji,
                    "my-moban":moban
        }
    }
</script>

<style scoped lang="scss">
    .navs{
        width: 100%;
        height: 50px;
        background-color: rgba(119,103,137,.43);
    }
    .navs .preBtn{
        font-size: 25px;
        position: absolute;
        top:12px;
        left: 10px;
        color: #ffffff;
    }
    .titCont{
        position: relative;
        padding: 30px 10px 0 10px;
    }
    .titCont>img{
        width: 60px;
        height: 55px;
        position: absolute;
        top:-25px;
        left: 40%;
    }
    .titCont>p{
        text-align: center;
    }
    .tit{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .tit>span{
        margin: 7px;
    }
    .tit>span:nth-child(1){
        background: #ffe339;
        font-size: 12px;
        padding: 2px;
    }
    .tit>span:nth-child(2){
        font-size: 20px;
        font-weight: 600;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space:nowrap;

    }
    .tit>span:nth-child(3){
        color: #333;
    }
    .titCont p:nth-of-type(1){
        font-size: 12px;
        color: #333;
    }
    .titCont p:nth-of-type(2){
        font-size: 12px;
        color: #999;
        margin-top: 5px;
    }
    .youhui{
        display: flex;
        align-items: center;
        justify-content: center;
        color: #333;
        margin-top: 10px;
        font-size: 11px;
    }
    .youhui>p{
        font-size: 10px;
    }
    .youhui>p>span{
        background: rgb(112, 188, 70);
        color: #ffffff;
        font-size: 9px;
        padding: 0 2px;
    }
    .youhui>span{
        padding-left: 20px;
        font-size: 11px;
    }
    .bj{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .hongbao{
        text-align: center;
        font-size: 12px;
        font-weight: 600;
        background: #f7eebb;
        color: #5c1704;
        padding:3px 5px;
        margin-top: 10px;
    }
    .hongbao>button{
        border:none;
        background: none;
        font-size: 12px;
        color: #5c1704;
        font-weight: 600;
    }
/*评论*/
    .pingfen{
        display: flex;
        padding: 20px 15px 25px;
        position: relative;
    }
    .pingfen::before{
        content: "";
        position: absolute;
        bottom:0;
        left: 0;
        width: 100%;
        border-top: 10px solid #f8f8f8;
    }
    .pfLeft{
        width: 30%;
        text-align: center;
        padding-right: 20px;
        position: relative;
    }
    .pfLeft::before{
        content: "";
        border-right: 1px solid #f3f3f3;
        position: absolute;
        right: -1px;
        top:5px;
        height: 54px;
    }
    .pfLeft p:nth-of-type(1){
        font-size: 22px;
        font-weight: 600;
        color: #ff6000;
    }
    .pfLeft p:nth-of-type(2){
        font-size: 13px;
        color: #666;
        line-height: 22px;

    }
    .pfLeft p:nth-of-type(3){
        font-size: 0.08rem;
        color: #999;
    }
    .pjRight{
        flex-grow: 1;
        padding-left: 20px;
    }
    .pjRight>p{
        font-size: 13px;
        color: #666;
        display: flex;
        line-height: 22px;
    }

    .diancanClass>li.active>span{
        padding: 9px 0;
        border-bottom: 2px solid #2395ff;
        font-weight: 600;
    }
    .dLeft>li{
        border-bottom: 1px solid #eee;
        font-size: 14.5px;
    }
    .tjbtn{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    /*评价样式*/
    .btnPf{
        padding: 15px;
        button{
            padding: 3px 4px;
            color: #6d7885;
            outline: none;
            background: #ebf5ff;
            border: none;
        }
    }
    .pj_info .BtnPJcont:not(:first-child){
        display: none;
    }
    .userInfo{
        padding: 0 15px;
    }
    .userInfo>li{
        display: flex;
        border-top:1px solid #ccc;
        padding: 10px 0;
    }
    .userInfo>li>div{
        margin-left: 15px;
    }
    .userInfo>li>div>p{
        color: #333;
        line-height: 20px;
    }
    .userInfo>li>div>p:nth-of-type(2){
        line-height: 35px;
    }
    .userInfo>li>img{
        width: 35px;
        height: 35px;
    }
    .userImg{
        img{
            width: 60px;
            height: 60px;
        }
    }
    .pf_titile{
        font-size: 15px;
        color: #333;
    }
    .pf_titile>span{
        color: #999;
        font-size: 10px;
    }
    .userShop{
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
    }
    .userShop>li{
        width: 33.33%;
        /*display: inline-block;*/
        margin: 0 10px 10px 0;
        font-size: 12px;
        color: #6d7885;
        max-width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space:nowrap;
        border:1px solid #eee;
        padding: 2px 5px;
    }
</style>
<style scoped lang="scss">
    /* 商家*/
    .shangjia{
    section{
        padding: 15px;
        border-bottom: 8px solid #eee;
    }
    .psxx{
        margin-top: 15px;
    p,div{
        color: #666;
    }
    p{
        margin-bottom: 5px;
    }
    div:nth-child(1){
    span:nth-child(1){
        background: #4ed150;
        color: #fff;
    }
    }
    ul{
    li{
        line-height: 3;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
    span:nth-child(1){
        font-weight: 600;
    }
    }
    }
    }
    }

    .tab-1{
        display: none;
        height: 100%;
    }
    .xiangqing{
        height: 100%;
        position: relative;
    }
    .tab-con{
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    /*.qiehuan.postion{*/
    /*position: fixed;*/
    /*z-index: 55;*/
    /*background: #fff;*/
    /*top: 0;*/
    /*left: 0;*/
    /*}*/
    .tabList{
        width: 100%;
        height: 0.42rem;
        display: flex;
        border-bottom: 1px solid #ccc;
        box-sizing: border-box;
        align-items: center;
    li{
        flex-grow: 1;
        line-height: 2.8;
        text-align: center;
    }
    li.bodr{
    span{
        border-bottom: 1px solid #2395FF;
        color: #333;
    }
    }
    span{
        font-size: 0.15rem;
        color: #666;
        padding-bottom: 9px;
    }
    }
    .tab-c{
        flex-grow: 1;
        height: 660px;
        overflow: hidden;
    }


    .con_list{
    h4{
        font-weight: 500;
        color: #444;
        margin-top: 10px;
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

