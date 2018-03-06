<template>
    <div class="gouwu">
        <div class="dibu">
            <el-badge :value="getgwc.length" class="item">
                <span class="el-icon-sold-out span" :class="{'ic_active':getgwc.length>0}"></span>
            </el-badge>
            <div class="pei">
                <strong>￥{{ zj }}</strong>
                <p>配送费￥9</p>
            </div>
            <button class="gwc_js">
                <span >{{ qs }}</span>
            </button>
        </div>
    </div>
</template>
<script>

    export default {
        props:["getgwc"],
        data:function(){
          return{
              nn:0,
              aa:[]
          }
        },
        computed:{
           zj:function(){
               if(this.getgwc.length>0){
                   var num =0;
                   for(var i of this.getgwc){
                       num += i.num* i.specfoods[0].price;
//                        this.aa.push(i.num)
                   }
                   return num
               }else{
                   return 0
               }
           },

            qs:function(){
                if(this.zj==0){
                    return "起送非是88"
                }else if(this.zj>=88){
                    return "结算"
                }else{
                    return "还差" +(88-this.zj)+"起送"
                }
            }
        }
    }
</script>
<style scoped lang="scss">

    .gouwu{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background: rgba(61,61,63,.9);
    }
    .dibu{
        display: flex;
        align-items: center;
        .span{
            padding: 10px;
            color: #ccc;
            position: relative;
            top: -10px;
            left: 15px;
            text-align: center;
            font-size: 0.3rem;
            background: #333;
            border-radius: 50%;
        }
        .span.ic_active{
            background: green;
            color:#ff6600;
        }
         .pei{
             flex-grow:1;
             margin-left: 30px;
             strong{
                 color: #fff;
                 font-size: 0.16rem;
             }
             p{
                 color: #aaa;
             }
         }
        button{
            border: none;
            color: #fff;
            outline: none;
            background: #535356;
            width: 25%;
            height: 50px;
        }
        .gwc_js{
            width:100px;
            background: yellow;
            text-align: center;

        }
    }
</style>
