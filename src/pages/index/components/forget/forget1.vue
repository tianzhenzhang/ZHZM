<template>
    <div class="forget">
        <v-progress :step="step"></v-progress>
        <div class="input-row">
            <span class="label">企业名称</span>
            <input class="input" type="text">
        </div>
        <div class="input-row">
            <span class="label">企业邮箱</span>
            <input class="input" type="text">
        </div>
        <button class="btn-forget" @click="goNext">找回密码</button>
    </div>
</template>
<script>
import progress from './progress.vue'
export default {
    data() {
        return {
            step: 1
        }
    },
    methods: {
        goNext() {
            this.$router.push('/forget2')
        }
    },
    components: {
        'v-progress': progress
    }
}
</script>
<style lang="scss" scoped>
.forget {
    width: 790px;
    height: 400px;
    background-color: #ffffff;
    margin: 60px auto 100px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    .input-row {
        width: 60%;
        height: 34px;
        margin: 0 auto 20px;
        .label,
        .input {
            display: inline-block;
        }
        .label {
            width: 100px;
            font-size: 16px;
            color: #666;
            line-height: 34px;
            margin-right: 10px;
            text-align: right;
        }
        .input {
            width: 345px;
            height: 34px;
            border-radius: 2px;
            border: solid 1px rgba(69, 200, 220, 0.3);
            padding: 0 10px;
            box-sizing: border-box;
        }
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
</style>
