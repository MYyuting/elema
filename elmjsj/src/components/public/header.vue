<template>
    <div class="tou">
        <header>
            <a href="javascript:history.back(true)"><span class="el-icon-arrow-left"></span></a>
            <h3>{{ msg }}</h3>
            <div><span class=""></span></div>
        </header>
    </div>
</template>
<style lang="scss">
    header{
        background: #0090FF;
        display: flex;
        padding: 0% 15px;
        height: 50px;
        align-items: center;
        justify-content: space-between;
        span{
            font-size: 0.2rem;
            color: #fff;
        }
        h3{
            font-size: 0.18rem;
            font-weight: 600;
            color: #fff;
        }
    }

</style>
<script>
    export default {
        props:["msg"]

    }
</script>