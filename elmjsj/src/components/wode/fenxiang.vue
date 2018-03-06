<template>
    <div class="fenxiang">
        <my-head :msg="oul"></my-head>
        
        <div class="fenX">
            <div class="tu">
                <img src="https://fuss10.elemecdn.com/6/33/1b7d02185816cb1a6e079acc779c3png.png	" alt=""/>
                <router-link to="/gui" class="tu-pos">
                    规则>
                </router-link>
            </div>
            <section class="fen-Yq">
                <div>
                    在邀请 <span>2人</span>，得额外奖励 <span>5元</span>
                </div>
                <div>
                    <img src="../../../static/img1/wd.png" alt=""/>
                </div>
                <button>
                    立即邀请
                </button>
            </section>

            <!-- 我的收益-->
            <div class="shouyi">
                <h3>我的收益</h3>
                <div class="sy-list">
                    <div>
                        <p><span>0</span>元</p>
                        <div>预计收益</div>
                    </div>
                    <div>
                        <p><span>0</span>元</p>
                        <div>预计收益</div>
                    </div>
                    <div>
                        <p><span>0</span>元</p>
                        <div>预计收益</div>
                    </div>
                </div>
            </div>
            
            
        </div>
    </div>
</template>
<style lang="scss">
    .fenxiang{
        header{
            background: rgb(163, 41, 42);
        }
    }
</style>
<style scoped lang="scss">
    .shouyi{
        h3{
            font-weight: 500;
            font-size: 0.16rem;
            border-left: 5px solid red;
        }
        .sy-list{
            padding: 10px 0;
            display: flex;
            >div{
                width: 34%;
                text-align: center;
                span{
                    color: red;
                }
                div{
                    font-size: 0.1rem;
                    color: #666;
                }
            }
        }
    }

    .fenX{
        .fen-Yq{
            margin-top: -8px;
            padding-bottom: 20px;
            background-color: rgb(255, 243, 228);
            text-align: center;
            div{
                font-size: 0.16rem;
                color: #666;
            }
            span{
                color: #d83937;
                font-size: 0.16rem;
            }
            img{
                margin: 15px 0;
            }
            button{
                width: 80%;
                height: 40px;
                outline: none;
                border: none;
                border-radius: 40px;
                font-size: 0.18rem;
                background-image: linear-gradient(180deg,#d83937,#ac1411);
                color: #fdde95;
            }
        }
        .tu{
            position: relative;
            img{
                width: 100%;
            }
            .tu-pos{
                padding: 0 5px 0 10px;
                position: absolute;
                right: 0;
                top: 50px;
                background: rgba(0,0,0,.3);
                color: #fff;
                border-bottom-left-radius: 20px;
                border-top-left-radius: 20px
            }
        }
    }
</style>
<script>

    import head from "@/components/public/header"
    export default {
        data:function(){
          return{
              oul:"推荐有奖"
          }
        },
        components:{
            "my-head":head
        }
    }
</script>