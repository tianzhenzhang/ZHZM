<template>
    <div>
        <v-base :title="title"></v-base>
        <div class="toolbar">
            <router-link to="/smartPoledetail" class="backPole">用电量详情</router-link>
            <router-link class="back" to="/smartPoledetail">
                <i class="iconfont icon-fanhui"></i>
            </router-link>
        </div>
        <div class="heading">耗电量显示(W)</div>
        <div class="power-echart" id="power-echart">
        </div>
        <div class="heading">历史用电量详情</div>
        <div class="power-record">
            <table class="table" cellSpacing="0" cellPadding="0">
                <thead>
                    <tr>
                        <th>日期</th>
                        <th>运行时间</th>
                        <th>耗电量(度)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>7月1日</td>
                        <td>8小时</td>
                        <td>300</td>
                    </tr>
                    <tr>
                        <td>7月1日</td>
                        <td>8小时</td>
                        <td>300</td>
                    </tr>
                    <tr>
                        <td>7月1日</td>
                        <td>8小时</td>
                        <td>300</td>
                    </tr>
                </tbody>
            </table>
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
    mounted() {
        this.initEchart()
    },
    methods: {
        initEchart() {
        let powerEchart = this.$echarts.init(
            document.getElementById('power-echart')
        )
        let option = {
            grid: {
                top: '5%',
                left: '3%',
                right: '3%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
            type: 'category',
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#3b3c5a'
                }
            },
            data: [
                '7月1日',
                '7月1日',
                '7月1日',
                '7月1日',
                '7月1日',
                '7月1日',
                '7月1日',
                '7月1日',
                '7月1日',
                '7月1日',
                '7月1日',
                '7月1日',
                '7月1日',
                '7月1日',
                '7月1日',
                '7月16日',
                '7月17日',
                '7月18日',
                '7月19日',
                '7月20日',
                '7月21日',
                '7月22日',
                '7月22日',
                '7月22日',
                '7月22日',
                '7月22日',
                '7月22日',
                '7月22日',
                '7月22日',
                '7月22日',
                '7月22日'
            ]
            },
            yAxis: {
            type: 'value',
            axisLabel: {
                textStyle: {
                color: '#999',
                fontSize: 14
                }
            },
            axisLine: {
                lineStyle: {
                color: '#3b3c5a'
                }
            },
            splitLine: {
                show: false
            }
            },
            series: [
            {
                type: 'line',
                stack: '用电量',
                itemStyle: {
                normal: {
                    color: '#4877f8',
                    lineStyle: {
                    color: '#4877f8'
                    }
                }
                },
                data: [
                220,
                132,
                601,
                314,
                890,
                230,
                510,
                220,
                132,
                601,
                314,
                890,
                230,
                510,
                220,
                132,
                601,
                314,
                890,
                230,
                510,
                220,
                132,
                601,
                314,
                890,
                230,
                510,
                110,
                230,
                100,
                230,
                450
                ]
            }
            ]
        }
        powerEchart.setOption(option)
        }
    },
    components: {
        'v-base': base
    }
}
</script>
<style lang="scss" scoped>
.toolbar {
  position: relative;
  width: 100%;
  height: 60px;
  background-color: rgba(59, 60, 90, 0.5);
  border-radius: 4px;
  line-height: 60px;
  padding: 0 20px;
  box-sizing: border-box;
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
.heading {
  padding: 20px 0;
  color: #fff;
}
.power-echart {
  width: 100%;
  height: 460px;
  background: rgba(59, 60, 90, 0.3);
}
.power-record {
  min-height: 265px;
  background-color: #252648;
  padding: 20px;
  box-sizing: border-box;
}
</style>
