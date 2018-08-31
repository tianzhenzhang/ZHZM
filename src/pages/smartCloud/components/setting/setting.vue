<template>
  <div>
    <v-base :title="title"></v-base>
    <div class="setting-wrapper">
      <div class="setting-content">
        <ul class="setting-ul clearfloat">
          <router-link tag="li" to="/setting" exact>工程管理</router-link>
          <router-link tag="li" to="/setting/EdgeController">边缘控制器</router-link>
          <router-link tag="li" to="/setting/LightController">照明控制器</router-link>
          <router-link tag="li" to="/setting/AcquisitionModule">采集模块</router-link>
          <router-link tag="li" to="/setting/monitorMoudule">监控设备</router-link>
          <router-link tag="li" to="/setting/screenMoudule">大屏设备</router-link>
          <!-- <router-link tag="li" to="">Wi-Fi设备</router-link> -->
        </ul>
        <router-view class="setting-children"></router-view>
      </div>
      <div class="operation">
        <div class="title">
          <i class="iconfont icon-gongxiang-"></i>添加设备</div>
        <router-link tag="div" class="operation-card" to="/setting/EdgeController">
          <span class="operation-icon">
            <i class="iconfont icon-kongzhiqi"></i>
          </span>
          <span class="operation-text">边缘控制器</span>
        </router-link>
        <router-link tag="div" class="operation-card" to="/setting/LightController">
          <span class="operation-icon">
            <i class="iconfont icon-guandeng"></i>
          </span>
          <span class="operation-text">照明控制器</span>
        </router-link>
        <router-link tag="div" class="operation-card" to="/setting/AcquisitionModule">
          <span class="operation-icon">
            <i class="iconfont icon-caiji"></i>
          </span>
          <span class="operation-text">采集模块</span>
        </router-link>
        <router-link tag="div" class="operation-card" to="/setting/monitorMoudule">
          <span class="operation-icon">
            <i class="iconfont icon-jiankong-copy"></i>
          </span>
          <span class="operation-text">监控设备</span>
        </router-link>
        <router-link tag="div" class="operation-card" to="/setting/screenMoudule">
          <span class="operation-icon">
            <i class="iconfont icon-daping"></i>
          </span>
          <span class="operation-text">大屏设备</span>
        </router-link>
        <!-- <router-link tag="div" class="operation-card">
                    <span class="operation-icon">
                        <i class="iconfont icon-wifi-copy"></i>
                    </span>
                    <span class="operation-text">Wi-Fi设备</span>
                </router-link> -->
      </div>
    </div>
  </div>
</template>
<script>
import base from 'components/base.vue'
export default {
  data() {
    return {
      title: 'set up'
    }
  },
  components: {
    'v-base': base
  }
}
</script>
<style lang="scss" scoped>
.setting-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  .setting-content {
    position: absolute;
    right: 260px;
    left: 0;
    top: 0;
    bottom: 0;
    .setting-ul {
      padding-bottom: 10px;
      li {
        display: block;
        width: 120px;
        height: 34px;
        float: left;
        background-color: #ffffff;
        border-radius: 17px;
        font-size: 16px;
        color: #333;
        text-align: center;
        line-height: 34px;
        margin-right: 10px;
        margin-bottom: 10px;
        &:hover {
          cursor: pointer;
          background: #4877f8;
          color: #fff;
        }
        &.active {
          background: #4877f8;
          color: #fff;
        }
      }
    }
    .setting-children {
      background-color: rgba(59, 60, 90, 0.5);
      border-radius: 6px;
      margin-top: 10px;
    }
  }
  .operation {
    position: absolute;
    top: 0;
    right: 0;
    width: 240px;
    min-height: 400px;
    background-color: rgba(59, 60, 90, 0.5);
    border-radius: 6px;
    padding: 10px 10px 50px;
    box-sizing: border-box;
    .title {
      width: 100%;
      height: 40px;
      background-color: #3b3c5a;
      border-radius: 6px;
      text-align: center;
      line-height: 40px;
      color: #bfbfbf;
      font-size: 16px;
    }
    .operation-card {
      margin-top: 10px;
      width: 100%;
      height: 50px;
      background-color: #3b3c5a;
      border-right: solid 6px #7d7d7d;
      border-radius: 6px;
      box-sizing: border-box;
      &:hover,
      &.active {
        cursor: pointer;
        background-color: #ffffff;
        border-right-color: #4877f8;
        .operation-text {
          color: #333;
        }
      }
      span {
        display: block;
        float: left;
      }
      .operation-icon {
        width: 32px;
        height: 32px;
        background-color: #4877f8;
        border-radius: 18px;
        text-align: center;
        line-height: 32px;
        margin: 9px 40px 9px 30px;
        i {
          color: #fff;
          font-size: 16px;
        }
      }
      .operation-text {
        line-height: 50px;
        color: #fff;
      }
    }
  }
}
</style>
