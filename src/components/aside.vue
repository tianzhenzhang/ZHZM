<template>
    <div class="aside">
        <ul>
            <router-link tag="li" to="/" exact>
                <i class="iconfont icon-gailan"></i>
                <span class="title">概览</span>
            </router-link>
            <router-link tag="li" to="/smartPole">
                <i class="iconfont icon-zhihui"></i>
                <span class="title">智能灯杆管理</span>
            </router-link>
            <router-link tag="li" to="/illumination">
                <i class="iconfont icon-dengguang"></i>
                <span class="title">照明管理</span>
            </router-link>
            <router-link tag="li" to="/monitor">
                <i class="iconfont icon-jiankong"></i>
                <span class="title">监控管理</span>
            </router-link>
            <router-link tag="li" to="/Meteorological">
                <i class="iconfont icon-qixiang"></i>
                <span class="title">气象采集管理</span>
            </router-link>
            <router-link tag="li" to="/wifiShare">
                <i class="iconfont icon-wifi"></i>
                <span class="title">WI-FI共享管理</span>
            </router-link>
            <router-link tag="li" to="/screenManager">
                <i class="iconfont icon-dapingmu"></i>
                <span class="title">大屏信息发布管理</span>
            </router-link>
            <router-link tag="li" to="/mapView">
                <i class="iconfont icon-ditu"></i>
                <span class="title">地图查看</span>
            </router-link>
            <router-link tag="li" to="/alarmManager">
                <i class="iconfont icon-jinggao"></i>
                <span class="title">告警管理</span>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.aside {
  position: absolute;
  left: 0;
  top: 0;
  width: 240px;
  height: 100vh;
  background-color: #303151;
//   float: left;
  margin-top: 10px;
  ul {
    margin-top: 20px;
    li {
      height: 50px;
      line-height: 50px;
      &:hover{
          cursor: pointer;
      }
      &.active {
        background: #3b3c5a;
        .iconfont {
          color: #fff;
        }
        .title {
          color: #fff;
        }
      }
      .iconfont {
        font-size: 20px;
        color: #999;
        margin: 0 31px;
      }
      .title {
        color: #999;
        line-height: 50px;
        font-size: 14px;
      }
    }
  }
}
</style>
