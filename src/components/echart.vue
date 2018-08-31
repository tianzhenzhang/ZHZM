<template>
  <div id="myChart"></div>
</template>
<script>
export default {
  name: 'echart',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      let echarts = this.$echarts
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        grid: {
          top: '5%',
          left: '3%',
          right: '3%',
          bottom: '3%',
          containLabel: true
        },
        tooltip: {},
        xAxis: {
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
            '7月16日',
            '7月17日',
            '7月18日',
            '7月19日',
            '7月20日',
            '7月21日',
            '7月22日'
          ]
        },
        yAxis: {
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
            // name: '数量',
            type: 'bar',
            barWidth: 40,
            data: [260, 190, 280, 330, 150, 210, 270],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#1bfff2' },
                  { offset: 1, color: '#4877f8' }
                ])
              },
              emphasis: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#1bfff2' },
                  { offset: 1, color: '#4877f8' }
                ])
              }
            }
          }
        ]
      })
    }
  }
}
</script>
<style lang="scss" scoped>
#myChart {
  width: 100%;
  height: 400px;
  background: rgba(59, 60, 90, 0.3);
}
</style>
