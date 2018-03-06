<template>
    <div class="denglv">
        <div class="tou">
            <img src="../../../static/img1/el.png" alt=""/>
        </div>
        <ul class="tab">
            <li>短信登录</li>
            <li>密码登录</li>
        </ul>
        <div class="form">
            <form>
                <section>
                    <input type="tel" maxlength="11" placeholder="手机号"/>
                    <button class="yzm">获取验证码</button>
                </section>
                <section>
                    <input type="tel" maxlength="8" placeholder="验证码"/>
                </section>
                <section class="text">温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意
                    <router-link to="/xieyi">《用户服务协议》</router-link>
                </section>
                <section>
                    <button class="submit">登录</button>
                </section>
            </form>
            <router-link to="/guanyu" class="guanyu">关于我们</router-link>
        </div>
    </div>
</template>
<script>

    export default {

    }
</script>
<style scoped lang="scss">
    .form{
        .yzm{
            position: absolute;
            right: 10px;
            top:7px;
            border: none;
            background: #fff;
        }
        .guanyu{
            margin-top: 20px;
            color: #666;
            display: block;
        }
        .submit{
            width: 100%;
            height: 40px;
            margin-top: 20px;
            background: #4cd96f;
            color: #fff;
            border: 1px solid #4cd96f;
            border-radius: 4px;
        }
        .text{
            color: #666;
            a{
                color: #2395ff;
            }
        }
        section{
            position: relative;
            margin-top: 15px;
        }
        input{
            width: 100%;
            height: 40px;
            border: 1px solid #eee;
        }
    }
    .denglv{
        width: 300px;
        margin: auto;
        margin-top: 30px;
        text-align: center;
        .tou{
            margin-bottom: 30px;
        }
        ul{
            display: flex;
            justify-content: center;
            li{
                color: #333;
            }
            li:nth-child(2){
                margin-left: 20px;
            }
        }
    }
</style>
