<template>
    <div class="detail">
        <v-base :title="title"></v-base>
        <div class="toolbar">
            <router-link to="/smartPole" class="backPole">智慧灯杆管理</router-link>
            <router-link class="back" to="/smartPole">
                <i class="iconfont icon-fanhui"></i>
            </router-link>
        </div>
        <div class="section clearfloat">
            <div class="controller-card">
                <div class="heading">边缘控制器</div>
                <div class="content">
                    <div class="edge-row">
                        <div class="edge-col">
                            设备编号：7892562566
                            <i class="iconfont icon-xiugai"></i>
                        </div>
                        <div class="edge-col">
                            灯杆编号：7892562566
                            <i class="iconfont icon-xiugai"></i>
                        </div>
                    </div>
                    <div class="edge-row">
                        <div class="edge-col">
                            地理位置：
                            <span class="stress">查看</span>
                        </div>
                        <div class="edge-col">
                            固件版本：7892562566
                        </div>
                    </div>
                    <div class="edge-row">
                        <div class="edge-col">
                            IP地址：10.132.54.109
                        </div>
                        <div class="edge-col">
                            网关地址：10.132.54.109
                        </div>
                    </div>
                    <div class="edge-row">
                        <div class="edge-col">
                            通信状态：在线
                        </div>
                        <div class="edge-col">
                            SIM卡号：7892562566
                            <i class="iconfont icon-xiugai"></i>
                        </div>
                    </div>
                    <div class="edge-row">
                        <div class="edge-col">
                            通讯方式：无线连接
                            <i class="iconfont icon-xiugai"></i>
                        </div>
                        <div class="edge-col">
                            分组设置：组1
                            <i class="iconfont icon-xiugai"></i>
                        </div>
                    </div>
                    <div class="edge-row">
                        <div class="edge-col">
                            累计流量使用：435G
                        </div>
                        <div class="edge-col">
                            每月流量使用：43.5G
                        </div>
                    </div>
                    <div class="edge-row">
                        <div class="edge-col">
                            设备状态：正在使用
                        </div>
                    </div>
                </div>
            </div>
            <div class="controller-card">
                <div class="heading">线路控制</div>
                <div class="content">
                    <table class="table" cellSpacing="0" paddingSpacing="0">
                        <thead>
                            <tr>
                                <th>线路名称</th>
                                <th>当前状态</th>
                                <th>状态修改</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>线路1
                                    <i class="iconfont icon-xiugai"></i>
                                </td>
                                <td>开启</td>
                                <td>
                                    <span>开启</span> |
                                    <span>关闭</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="heading">监控管理</div>
            <div class="monitor-content clearfloat">
                <div class="monitor-col">
                    设备名称：123454
                    <i class="iconfont icon-xiugai"></i>
                </div>
                <div class="monitor-col">
                    监控名称：电源监控
                    <i class="iconfont icon-xiugai"></i>
                </div>
                <div class="monitor-col">
                    设备协议类型：
                    <select class="select">
                        <option value="">ZIGBEE</option>
                    </select>
                </div>
                <div class="monitor-col">
                    通讯状态：在线
                </div>
                <div class="monitor-col">
                    更新时间：2018-8-2 11:07
                </div>
                <div class="monitor-col">
                    设置分组：组1
                    <i class="iconfont icon-xiugai"></i>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="heading">采集管理</div>
            <div class="collect-content">
                <div class="heading">气象采集管理</div>
                <div class="weather-content clearfloat">
                    <div class="collect-col">温度：36.25°C</div>
                    <div class="collect-col">湿度：36.25%</div>
                    <div class="collect-col">大气压力：36.25Kpa</div>
                    <div class="collect-col">光照度：36.25Lux</div>
                    <div class="collect-col">风速：36.25m/s</div>
                    <div class="collect-col">风向：36.25°</div>
                    <div class="collect-col">pm2.5：15µg/m³</div>
                    <div class="collect-col">pm10：15µg/m³</div>
                    <div class="collect-col">天气状态：良</div>
                    <div class="collect-col">设备编号：2345678
                        <i class="iconfont icon-xiugai"></i>
                    </div>
                    <div class="collect-col">设备分组：1
                        <i class="iconfont icon-xiugai"></i>
                    </div>
                </div>
                <div class="heading">电源采集管理</div>
                <div class="clearfloat">
                    <div class="collect-col">输入电压类型：DC</div>
                    <div class="collect-col">输入电压类型：AC</div>
                    <div class="collect-col">功率因子：0.8</div>
                    <div class="collect-col">输入电压值：180V</div>
                    <div class="collect-col">输出电压值：220V</div>
                    <div class="collect-col">有功功率：230W</div>
                    <div class="collect-col">输入电流值：40.238A</div>
                    <div class="collect-col">输出电流值：60.542A</div>
                    <div class="collect-col">电源内温度：42°C</div>
                    <div class="collect-col">设备编号：1
                        <i class="iconfont icon-xiugai"></i>
                    </div>
                    <div class="collect-col">设备分组：1
                        <i class="iconfont icon-xiugai"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="section clearfloat">
            <div class="mannager-card">
                <div class="heading">照明管理</div>
                <div class="content">
                    <div class="manange-row">
                        照明状态：100%
                    </div>
                    <div class="manange-row">
                        照明控制：
                        <select class="select">
                            <option value="">100%</option>
                        </select>
                    </div>
                    <div class="manange-row">
                        通信方式：
                        <select class="select">
                            <option value="">100%</option>
                        </select>
                    </div>
                    <div class="manange-row">
                        型号：
                        <select class="select">
                            <option value="">100%</option>
                        </select>
                    </div>
                    <div class="manange-row">
                        线路编号：dfghjkl
                        <i class="iconfont icon-xiugai"></i>
                    </div>
                    <div class="manange-row">
                        设备编号：dfghjkl
                        <i class="iconfont icon-xiugai"></i>
                    </div>
                    <div class="manange-row">
                        分组设置：1
                        <i class="iconfont icon-xiugai"></i>
                    </div>
                </div>
            </div>
            <div class="mannager-card">
                <div class="heading">
                    <router-link class="stress" to="/screenDetail">大屏信息发布</router-link>
                </div>
                <div class="content">
                    <div class="manange-row">
                        设备名称：admin
                        <i class="iconfont icon-xiugai"></i>
                    </div>
                    <div class="manange-row">
                        设备编号：dfghjkl
                        <i class="iconfont icon-xiugai"></i>
                    </div>
                    <div class="manange-row">
                        当前播放：xxxx宣传片
                    </div>
                    <div class="manange-row">
                        循环设置：15分钟每次
                    </div>
                    <div class="manange-row">
                        设置分组：组1
                        <i class="iconfont icon-xiugai"></i>
                    </div>
                </div>
            </div>
            <div class="mannager-card">
                <div class="heading">用电量</div>
                <div class="content">
                    <div class="manange-row">
                        用电量：3245度
                        <router-link class="stress" to="/powerDetail">查看详情</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import base from 'components/base.vue'
export default {
    data() {
        return {
            title: 'Smart lamp management'
        }
    },
    components: {
        'v-base': base
    }
}
</script>
<style lang="scss" scoped>
.detail {
  .toolbar {
    position: relative;
    width: 100%;
    height: 60px;
    background-color: rgba(59, 60, 90, 0.5);
    border-radius: 4px;
    line-height: 60px;
    padding: 0 20px;
    box-sizing: border-box;
    // margin-bottom: 10px;
    .backPole {
      color: #4877f8;
    }
    .back {
      position: absolute;
      top: 13px;
      right: 20px;
      display: block;
      width: 60px;
      height: 34px;
      border-radius: 4px;
      border: solid 1px #595959;
      text-align: center;
      line-height: 34px;
      i {
        color: #ccc;
      }
    }
  }
  .section {
    width: 100%;
    margin-bottom: 10px;
    .heading {
      padding: 20px 0;
      color: #fff;
      .stress {
        color: #4877f8;
      }
    }
    .controller-card {
      width: -webkit-calc((100% - 20px) / 2);
      width: -moz-calc((100% - 20px) / 2);
      width: calc((100% - 20px) / 2);
      float: left;
      &:first-child {
        margin-right: 20px;
      }
      .content {
        width: 100%;
        height: 390px;
        background-color: rgba(59, 60, 90, 0.5);
        border-radius: 4px;
        padding: 20px;
        box-sizing: border-box;
        color: #fff;
        .edge-row {
          height: 30px;
          line-height: 30px;
          margin-bottom: 20px;
          .edge-col {
            width: 50%;
            float: left;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding-left: 10px;
            box-sizing: border-box;
            .stress {
              color: #4877f8;
            }
            i {
              color: #4877f8;
              font-size: 16px;
              margin-left: 10px;
            }
          }
        }
        td {
          i,
          span {
            color: #4877f8;
          }
        }
      }
    }

    .monitor-content {
      width: 100%;
      padding: 20px;
      color: #fff;
      background-color: rgba(59, 60, 90, 0.5);
      border-radius: 4px;
      box-sizing: border-box;
      .monitor-col {
        height: 30px;
        margin: 0 50px 10px 0;
        float: left;
        line-height: 30px;
        i {
          color: #4877f8;
          margin-left: 10px;
        }
        .select {
          width: 120px;
        }
      }
    }
    .collect-content {
      background-color: rgba(59, 60, 90, 0.5);
      border-radius: 4px;
      padding: 0 20px;
      box-sizing: border-box;
      .collect-col {
        height: 30px;
        margin: 0 50px 20px 0;
        float: left;
        line-height: 30px;
        color: #fff;
        i {
          color: #4877f8;
          margin-left: 10px;
        }
        .select {
          width: 120px;
        }
      }
    }
    .mannager-card {
      width: -webkit-calc((100% - 60px) / 4);
      width: -moz-calc((100% - 60px) / 4);
      width: calc((100% - 60px) / 4);
      margin-right: 20px;
      float: left;
      &:last-child {
        margin-right: 0;
      }
      .content {
        height: 400px;
        padding: 20px;
        box-sizing: border-box;
        background-color: rgba(59, 60, 90, 0.5);
        border-radius: 4px;
        color: #fff;
        .manange-row {
          margin-bottom: 28px;
          .select {
            width: 140px;
          }
          i {
            color: #4877f8;
            margin-left: 10px;
          }
          .stress {
            color: #4877f8;
            margin-left: 20px;
          }
        }
      }
    }
  }
}
</style>
