<template>
    <div class="overview">
        <v-base :title="title"></v-base>
        <ul class="list-ul clearfloat">
            <li class="list-item">
                <span class="icon">
                    <i class="iconfont icon-sort"></i>
                </span>
                <span class="text">接入项目数量</span>
                <span class="number">3</span>
            </li>
            <li class="list-item">
                <span class="icon">
                    <i class="iconfont icon-ludeng"></i>
                </span>
                <span class="text">接入路灯数量</span>
                <span class="number">3</span>
            </li>
            <li class="list-item">
                <span class="icon">
                    <i class="iconfont icon-kongzhiqi"></i>
                </span>
                <span class="text">接入控制器数量</span>
                <span class="number">3</span>
            </li>
            <li class="list-item">
                <span class="icon">
                    <i class="iconfont icon-daping"></i>
                </span>
                <span class="text">接入大屏数量</span>
                <span class="number">3</span>
            </li>
            <li class="list-item">
                <span class="icon">
                    <i class="iconfont icon-dianyuan"></i>
                </span>
                <span class="text">接入电源采集设备数量</span>
                <span class="number">3</span>
            </li>
            <li class="list-item">
                <span class="icon">
                    <i class="iconfont icon-qixiang1"></i>
                </span>
                <span class="text">接入气象采集设备数量</span>
                <span class="number">3</span>
            </li>
        </ul>
        <div class="electricity-wrapper">
            <div class="title">耗电量显示(W)</div>
            <v-echart></v-echart>
        </div>
        <div class="alarm-wrapper">
            <div class="title">告警事件</div>
            <div class="map-wrapper">
                <v-map></v-map>
            </div>
            <div class="alarm-list">
                <div class="alarm-item">
                    <div class="icon-box">
                        <i class="iconfont icon-caiji"></i>
                    </div>
                    <div class="alarm-info">
                        <p>编号：75921559512</p>
                        <p>事件：采集通信异常</p>
                        <p>时间：2018/7/25 14:03:23</p>
                    </div>
                    <div class="btn-view">查看</div>
                </div>
                <div class="alarm-item">
                    <div class="icon-box">
                        <i class="iconfont icon-dianyuan"></i>
                    </div>
                    <div class="alarm-info">
                        <p>编号：</p>
                        <p>事件：</p>
                        <p>时间：</p>
                    </div>
                    <div class="btn-view">查看</div>
                </div>
                <div class="alarm-item">
                    <div class="icon-box">
                        <i class="iconfont icon-kongzhiqi"></i>
                    </div>
                    <div class="alarm-info">
                        <p>编号：</p>
                        <p>事件：</p>
                        <p>时间：</p>
                    </div>
                    <div class="btn-view">查看</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import base from 'components/base.vue'
import echart from 'components/echart.vue'
import map from 'components/map.vue'
export default {
    data() {
        return {
            title: 'overview'
        }
    },
    components: {
        'v-base': base,
        'v-echart': echart,
        'v-map': map
    }
}
</script>
<style lang="scss" scoped>
.list-item {
    width: 330px;
    height: 80px;
    background-color: #ffffff;
    border-radius: 6px;
    margin-right: 20px;
    margin-bottom: 20px;
    float: left;
    span {
        display: block;
        float: left;
        &.icon {
            width: 50px;
            height: 50px;
            background-color: #4877f8;
            text-align: center;
            line-height: 50px;
            border-radius: 25px;
            margin-right: 30px;
            margin-top: 15px;
            margin-left: 30px;
            i {
                color: #fff;
                font-size: 24px;
            }
        }
        &.text {
            width: 55%;
            font-size: 16px;
            color: #666;
            line-height: 80px;
        }
        &.number {
            font-size: 30px;
            color: #333;
            line-height: 80px;
        }
    }
}
.electricity-wrapper {
    width: 100%;
    .title {
        width: 100%;
        color: #fff;
        font-size: 16px;
        margin: 10px 0;
    }
}
.alarm-wrapper {
    width: 100%;
    .title {
        width: 100%;
        color: #fff;
        font-size: 16px;
        margin: 10px 0;
    }
    .map-wrapper {
        width: 64%;
        height: 500px;
        background-color: #3b3c5a;
        border: solid 1px #7d7d7d;
        float: left;
        padding: 10px;
        box-sizing: border-box;
    }
    .alarm-list {
        width: 35%;
        min-height: 500px;
        float: right;
        background-color: #3b3c5a;
        border: solid 1px #7d7d7d;
        padding-bottom: 20px;
        .alarm-item {
            width: 100%;
            height: 100px;
            border-bottom: solid 1px #7d7d7d;
            .icon-box {
                width: 60px;
                height: 60px;
                background-color: #4877f8;
                border-radius: 30px;
                text-align: center;
                line-height: 60px;
                float: left;
                margin-left: 30px;
                margin-top: 20px;
                i {
                    color: #fff;
                    font-size: 26px;
                }
            }
            .alarm-info {
                margin-left: 30px;
                float: left;
                padding-top: 20px;
                p {
                    width: 150px;
                    font-size: 14px;
                    color: #fff;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    //   margin-bottom: 10px;
                }
            }
            .btn-view {
                width: 80px;
                height: 30px;
                background-color: #4877f8;
                border-radius: 4px;
                float: right;
                margin-right: 20px;
                color: #fff;
                text-align: center;
                line-height: 30px;
                font-size: 14px;
                margin-top: 35px;
            }
        }
    }
}
</style>
