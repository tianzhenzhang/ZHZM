<template>
    <div class="footer">
        <ul class="footer-link">
            <li>股票代码：002364</li>
            <li>公司邮箱</li>
            <li>隐私政策</li>
            <li>常见问题</li>
        </ul>
        <p class="desc">
            <span class="addr">版权所有©2016 杭州中恒派威电源有限公司 All Rights Reserved </span>
            <img class="logo" src="./logo.png" alt="">
        </p>
    </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.footer{
    margin-top: 200px;
    height: 175px;
    text-align: center;
    .footer-link{
        list-style: none;
        li{
            display: inline-block;
            color: #333333;
            font-size: 12px;
            height: 40px;
            line-height: 40px;
            padding: 0 10px;
        }
    }
    .desc{
        margin-top: 30px;
        height: 30px;
        font-size: 0;
        .addr,.logo{
            display: inline-block;
        }
        .addr{
            font-size: 12px;
            color: #666;
            line-height: 30px;
        }
        .logo{
            margin-left: 22px;
            vertical-align: top;
        }
    }
}
</style>
