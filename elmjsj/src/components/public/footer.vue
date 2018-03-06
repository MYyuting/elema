<template>
    <div class="footer">

        <footer>
            <router-link to="/index1" active-class="bg">
                <span class="iconfont icon-house"></span>
                <p>外卖</p>
            </router-link>
            <router-link to="/index2" active-class="bg">
                <span class="iconfont icon-house"></span>
                <p>发现</p>
            </router-link>
            <router-link to="/index3" active-class="bg">
                <span class="iconfont icon-house"></span>
                <p>订单</p>
            </router-link>
            <router-link to="/index4" active-class="bg">
                <span class="iconfont icon-house"></span>
                <p>我的</p>
            </router-link>
        </footer>
    </div>
</template>
<style lang="scss">
    footer{
        /*position: fixed;*/
        background: #fff;
        /*bottom: 0;*/
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        a{
            width: 25%;
            text-align: center;
            .iconfont{
                font-size: 0.22rem;
            }
        }
        a.bg{
            color: #1CA4FF;
            span{
                font-weight:700 ;
                color: #1CA4FF;
            }
        }
    }
</style>
<script>

</script>