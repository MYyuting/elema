<template>
    <!--美食-->
    <div class="meishi">
        <div class="tou-meishi">
            <my-head></my-head>
            <!-- 列表模板-->
            <ul class="lie-fen">
                <li>分类  <i class="el-icon-caret-bottom"></i></li>
                <li>综合排序  <i class="el-icon-caret-bottom"></i></li>
                <li>筛选  <i class="el-icon-printer"></i></li>
            </ul>
        </div>
        <div class="con-lie">
            <my-lie :dian="arr1"></my-lie>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .meishi{
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .con-lie{
        flex-grow: 1;
        height: 600px;
        overflow: hidden;
    }

    .lie-fen{
        display: flex;
        align-items: center;
        border-bottom: 1px solid #eee;
        li{
            color: #666;
            flex-grow: 1;
            text-align: center;
            padding: 10px 0;
        }
    }
</style>
<script >
    import Hade from "@/components/public/header"
    import Dian from "@/components/public/dianlie"
    export default {
        data:function(){
          return{
              arr1:[]
          }
        },
        mounted:function(){
            this.msgdata();
            var isc = new IScroll(".con-lie",{
                scroll:true
            })
            isc.on("beforeScrollStart",function(){
                      isc.refresh();
                  });
        },
        methods:{
            msgdata:function(){
                this.$http({
                    method:"get",
                    url:"http://cangdu.org:8001/shopping/restaurants?latitude=31.22967&longitude=121.4762"
                }).then(respon =>{
                    console.log(respon.data);
                    this.arr1 = respon.data
                },
                respon => {
                    console.log(respon);
                }
                )
            }
        },
        components:{
            "my-head":Hade,
            "my-lie":Dian
        }


    }

</script>