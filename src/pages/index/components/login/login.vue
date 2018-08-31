<template>
    <div class="login">
        <div class="login-wrapper">
            <div class="info">
                <h3>Efficient lighting, build smart city</h3>
                <p>Make the lighting more reliable, make the lighting management easier, and make the lighting benefit more economical.</p>
            </div>
            <div class="form-info">
                <h4 class="title">用户登录</h4>
                <input type="text" class="login-input" placeholder="请输入用户名">
                <input type="password" class="login-input" placeholder="请输入密码">
                <router-link class="forget-a" to="/forget1">忘记密码?</router-link>
                <button class="login-btn" type="button">登录</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.login {
    width: 100%;
    height: 592px;
    background: url('./bg.png') no-repeat center;
    background-size: cover;
    .login-wrapper {
        width: 1280px;
        margin: 0 auto;
        position: relative;
        .info {
            width: 55%;
            position: absolute;
            left: 0;
            top: 134px;
            h3 {
                font-size: 56px;
                line-height: 66px;
                color: #fff;
            }
            p {
                color: #dfdfdf;
                font-size: 28px;
                margin-top: 75px;
            }
        }
        .form-info {
            position: absolute;
            top: 66px;
            right: 0;
            width: 340px;
            height: 460px;
            background: #fff;
            border-radius: 4px;
            padding: 0 30px;
            box-sizing: border-box;
            .title {
                font-size: 20px;
                color: #333;
                margin: 44px 0 30px 0;
            }
            .login-input {
                width: 280px;
                height: 40px;
                border-radius: 4px;
                border: solid 1px #45c8dc;
                margin-top: 30px;
                padding: 0 10px;
                box-sizing: border-box;
            }
            .forget-a {
                display: block;
                margin-top: 15px;
                font-size: 12px;
                color: #333;
            }
            .login-btn {
                width: 280px;
                height: 44px;
                background-color: #45c8dc;
                box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
                margin-top: 60px;
                color: #fff;
                font-size: 18px;
            }
        }
    }
}
</style>
