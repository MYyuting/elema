<template>
  <div class="hello">
    <router-view></router-view>

    <!-- 底部-->
    <my-foot></my-foot>

    <div class="input1 position" style="display: none">
      <el-input
              placeholder="搜索商家、商品名称"
              prefix-icon="el-icon-search"
              >
      </el-input>
    </div>
  </div>
</template>

<script>
  import Footer from "@/components/public/footer"

  export default {
    components:{
      "my-foot":Footer
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .hello{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .position{
    position: fixed;
    height: 50px;
    top:0;
    left: 0;

  }

  .input1{
    width: 100%;
    background: #0090FF;
    display: flex;
    justify-content: center;
    padding: 0px 15px 0;
    height: 50px;
    line-height: 50px;

  .el-input__prefix{
    left:25%;
  }
  .el-input__inner{
    height: 35px;
  }
  input::-webkit-input-placeholder{
    color: #333;
    text-indent: 6em;
  }
  }
</style>
