<template>
    <div class="forget">
        <v-progress :step="step"></v-progress>
        <div class="dialog">
            <div class="info">
                请访问邮件中给出的网页链接地址，根据 页面提示完成密码重置
            </div>
            <button class="btn-forget" @click="goNext">找回密码</button>
        </div>
    </div>
</template>
<script>
import progress from './progress.vue'
export default {
    data() {
        return {
            step: 2
        }
    },
    methods: {
        goNext() {
            this.$router.push('/forget3')
        }
    },
    components: {
        'v-progress': progress
    }
}
</script>
<style lang="scss" scoped>
.forget {
    position: relative;
    width: 790px;
    height: 400px;
    background-color: #ffffff;
    margin: 60px auto 100px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    .dialog {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
        width: 500px;
        height: 240px;
        background-color: #ffffff;
        border-radius: 4px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
        .info {
            width: 80%;
            margin: 58px auto 62px;
            font-size: 16px;
            line-height: 25px;
        }
        .btn-forget {
            display: block;
            margin: 30px auto;
            width: 180px;
            height: 44px;
            background-color: #45c8dc;
            border-radius: 4px;
            color: #fff;
            font-size: 16px;
            text-align: center;
            line-height: 44px;
        }
    }
}
</style>
