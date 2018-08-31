<template>
    <div class="progress clearfix">
        <ol class="ui-step ui-step-4 clearfix">
            <li :class="firstClass">
                <div class="ui-step-line"></div>
                <div class="ui-step-cont">
                    <span class="ui-step-cont-number">1</span>
                    <span class="ui-step-cont-text">填写账号信息</span>
                </div>
            </li>
            <li :class="secondClass">
                <div class="ui-step-line"></div>
                <div class="ui-step-cont">
                    <span class="ui-step-cont-number">2</span>
                    <span class="ui-step-cont-text">邮箱找回密码</span>
                </div>
            </li>
            <li :class="thirdClass">
                <div class="ui-step-line"></div>
                <div class="ui-step-cont">
                    <span class="ui-step-cont-number">3</span>
                    <span class="ui-step-cont-text">更新设置密码</span>
                </div>
            </li>
            <li class="step-end" :class="fourClass">
                <div class="ui-step-line"></div>
                <div class="ui-step-cont">
                    <span class="ui-step-cont-number">4</span>
                    <span class="ui-step-cont-text">重设成功</span>
                </div>
            </li>
        </ol>
    </div>
</template>
<script>
export default {
    props: {
        step: Number
    },
    data() {
        return {
        //   step: this.step
        }
    },
    computed: {
        firstClass() {
            if (this.step === 1) {
                return 'step-start'
            }
            if (this.step === 2 || this.step === 3 || this.step === 4) {
                return 'step-start step-done'
            }
        },
        secondClass() {
            if (this.step === 1) {
                return ''
            }
            if (this.step === 2) {
                return 'step-start'
            }
            if (this.step === 3 || this.step === 4) {
                return 'step-done'
            }
        },
        thirdClass() {
            if (this.step === 1 || this.step === 2) {
                return ''
            }
            if (this.step === 3) {
                return 'step-active'
            }
            if (this.step === 4) {
                return 'step-done'
            }
        },
        fourClass() {
            if (this.step === 4) {
                return 'step-active'
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.progress {
    width: 90%;
    padding: 30px 0;
    margin: 0 auto;
    .ui-step {
        color: #bfbfbf;
        padding: 0 60px;
        margin-bottom: 35px;
        position: relative;
        &.ui-step-4 {
            li {
            width: 33%;
            }
        }
        li {
            float: left;
            position: relative;
            .ui-step-line {
                height: 4px;
                background-color: #eee;
                margin-top: 10px;
            }
            .ui-step-cont {
                width: 120px;
                position: absolute;
                top: 0;
                left: -15px;
                text-align: center;
                .ui-step-cont-number {
                    display: inline-block;
                    *zoom: 1;
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 24px;
                    height: 24px;
                    line-height: 24px;
                    color: #999;
                    border-radius: 50%;
                    font-size: 14px;
                    background-color: #eee;
                }
                .ui-step-cont-text {
                    position: relative;
                    top: 34px;
                    left: -42px;
                    font-size: 12px;
                }
            }
            &.step-start {
                .ui-step-cont-number {
                    background-color: #45c8dc;
                    color: #fff;
                }
                .ui-step-cont-text {
                    color: #333;
                }
            }
            /* Active */
            &.step-active {
                .ui-step-cont-number {
                    background-color: #45c8dc;
                    color: #fff;
                }
                .ui-step-cont-text {
                    color: #333;
                }
                .ui-step-line {
                    background-color: #eee;
                }
            }
            /** The default style (默认风格) **/
            /* Done */
            &.step-done {
                .ui-step-cont-number {
                    background-color: #45c8dc;
                    color: #fff;
                }
                .ui-step-cont-text {
                    color: #333;
                }
                .ui-step-line {
                    background-color: #45c8dc;
                }
            }
            &.step-end {
                width: 120px;
                position: absolute;
                top: 0;
                right: -60px;
                .ui-step-line {
                    display: none;
                }
            }
        }
    }
}
</style>
