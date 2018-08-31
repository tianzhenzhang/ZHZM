<template>
    <div>
        <v-base :title="title"></v-base>
        <div class="pole-select">
            <div class="select-item">
                <span class="select-label">选择项目：</span>
                <select class="select">
                    <option value="花城广场1期">花城广场1期</option>
                    <option value="花城广场1期">花城广场1期</option>
                    <option value="花城广场1期">花城广场1期</option>
                </select>
            </div>
            <div class="select-item">
                <span class="select-label">分组筛选：</span>
                <select class="select">
                    <option value="花城广场1期">全部</option>
                    <option value="花城广场1期">全部</option>
                    <option value="花城广场1期">全部</option>
                </select>
            </div>
        </div>
        <div class="pole-list">
            <div class="pole-card">
                <div class="icon-box">
                    <i class="iconfont icon-zhinengludeng"></i>
                </div>
                <div class="pole-row">
                    <span class="pole-label">灯杆编号：</span>
                    <span class="pole-value">西局107</span>
                </div>
                <div class="pole-row">
                    <span class="pole-label">边控编号：</span>
                    <span class="pole-value">S12005635636S12005635636</span>
                </div>
                <div class="pole-row">
                    <span class="pole-label">监控设备：</span>
                    <span class="pole-value">有</span>
                </div>
                <div class="pole-row">
                    <span class="pole-label">气象采集设备：</span>
                    <span class="pole-value">有</span>
                </div>
                <div class="pole-row">
                    <span class="pole-label">户外屏设备：</span>
                    <span class="pole-value">有</span>
                </div>
                <div class="pole-row">
                    <span class="pole-label">灯控控制：</span>
                    <span class="pole-value">
                        <select class="select">
                            <option value="100%亮度">100%亮度</option>
                        </select>
                    </span>
                </div>
                <div class="pole-row">
                    <span class="pole-label">通讯状态：</span>
                    <span class="pole-value">在线</span>
                </div>
                <div class="pole-row">
                    <span class="pole-label">线路控制：</span>
                    <span class="pole-value setting">设置</span>
                </div>
                <div class="pole-row">
                    <span class="pole-label">通讯连接方式：</span>
                    <span class="pole-value">有线</span>
                </div>
                <div class="btn-detail" @click="goDetail">详情</div>
            </div>
            <div class="pole-card">
                <div class="icon-box">
                    <i class="iconfont icon-zhinengludeng"></i>
                </div>
                <div class="pole-row">
                    <span class="pole-label">灯杆编号：</span>
                    <span class="pole-value">西局107</span>
                </div>
                <div class="pole-row">
                    <span class="pole-label">边控编号：</span>
                    <span class="pole-value">S12005635636S12005635636</span>
                </div>
                <div class="pole-row">
                    <span class="pole-label">监控设备：</span>
                    <span class="pole-value">有</span>
                </div>
                <div class="pole-row">
                    <span class="pole-label">气象采集设备：</span>
                    <span class="pole-value">有</span>
                </div>
                <div class="pole-row">
                    <span class="pole-label">户外屏设备：</span>
                    <span class="pole-value">有</span>
                </div>
                <div class="pole-row">
                    <span class="pole-label">灯控控制：</span>
                    <span class="pole-value">
                        <select class="select">
                            <option value="100%亮度">100%亮度</option>
                        </select>
                    </span>
                </div>
                <div class="pole-row">
                    <span class="pole-label">通讯状态：</span>
                    <span class="pole-value">在线</span>
                </div>
                <div class="pole-row">
                    <span class="pole-label">线路控制：</span>
                    <span class="pole-value setting">设置</span>
                </div>
                <div class="pole-row">
                    <span class="pole-label">通讯连接方式：</span>
                    <span class="pole-value">有线</span>
                </div>
                <div class="btn-detail">详情</div>
            </div>
            <div class="pole-card">
                <div class="icon-box">
                    <i class="iconfont icon-zhinengludeng"></i>
                </div>
                <div class="pole-row">
                    <span class="pole-label">灯杆编号：</span>
                    <span class="pole-value">西局107</span>
                </div>
                <div class="pole-row">
                    <span class="pole-label">边控编号：</span>
                    <span class="pole-value">S12005635636S12005635636</span>
                </div>
                <div class="pole-row">
                    <span class="pole-label">监控设备：</span>
                    <span class="pole-value">有</span>
                </div>
                <div class="pole-row">
                    <span class="pole-label">气象采集设备：</span>
                    <span class="pole-value">有</span>
                </div>
                <div class="pole-row">
                    <span class="pole-label">户外屏设备：</span>
                    <span class="pole-value">有</span>
                </div>
                <div class="pole-row">
                    <span class="pole-label">灯控控制：</span>
                    <span class="pole-value">
                        <select class="select">
                            <option value="100%亮度">100%亮度</option>
                        </select>
                    </span>
                </div>
                <div class="pole-row">
                    <span class="pole-label">通讯状态：</span>
                    <span class="pole-value">在线</span>
                </div>
                <div class="pole-row">
                    <span class="pole-label">线路控制：</span>
                    <span class="pole-value setting">设置</span>
                </div>
                <div class="pole-row">
                    <span class="pole-label">通讯连接方式：</span>
                    <span class="pole-value">有线</span>
                </div>
                <div class="btn-detail">详情</div>
            </div>
            <div class="pole-card">
                <div class="icon-box">
                    <i class="iconfont icon-zhinengludeng"></i>
                </div>
                <div class="pole-row">
                    <span class="pole-label">灯杆编号：</span>
                    <span class="pole-value">西局107</span>
                </div>
                <div class="pole-row">
                    <span class="pole-label">边控编号：</span>
                    <span class="pole-value">S12005635636S12005635636</span>
                </div>
                <div class="pole-row">
                    <span class="pole-label">监控设备：</span>
                    <span class="pole-value">有</span>
                </div>
                <div class="pole-row">
                    <span class="pole-label">气象采集设备：</span>
                    <span class="pole-value">有</span>
                </div>
                <div class="pole-row">
                    <span class="pole-label">户外屏设备：</span>
                    <span class="pole-value">有</span>
                </div>
                <div class="pole-row">
                    <span class="pole-label">灯控控制：</span>
                    <span class="pole-value">
                        <select class="select">
                            <option value="100%亮度">100%亮度</option>
                        </select>
                    </span>
                </div>
                <div class="pole-row">
                    <span class="pole-label">通讯状态：</span>
                    <span class="pole-value">在线</span>
                </div>
                <div class="pole-row">
                    <span class="pole-label">线路控制：</span>
                    <span class="pole-value setting">设置</span>
                </div>
                <div class="pole-row">
                    <span class="pole-label">通讯连接方式：</span>
                    <span class="pole-value">有线</span>
                </div>
                <div class="btn-detail">详情</div>
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
  methods: {
    goDetail() {
      this.$router.push('/smartPoledetail')
    }
  },
  components: {
    'v-base': base
  }
}
</script>
<style lang="scss" scoped>
.pole-select {
  width: 100%;
  height: 60px;
  background-color: rgba(59, 60, 90, 0.5);
  border-radius: 4px;
  padding: 0 20px;
  color: #fff;
  font-size: 14px;
  box-sizing: border-box;
  .select-item {
    height: 60px;
    margin-right: 154px;
    float: left;
    &:last-child {
      margin-right: 0;
    }
    .select-label,
    .select {
      display: block;
      float: left;
    }
    .select-label {
      line-height: 60px;
      margin-right: 10px;
    }
    .select {
      width: 300px;
      height: 36px;
      margin-top: 12px;
    }
  }
}
.pole-list {
  width: 100%;
  margin-top: 10px;
  .pole-card {
    width: 306px;
    height: 460px;
    background-color: rgba(59, 60, 90, 0.5);
    border-radius: 4px;
    margin-right: 20px;
    margin-bottom: 10px;
    float: left;
    padding: 20px 30px 30px 30px;
    &:nth-child(3n) {
      margin-right: 0;
    }
    .icon-box {
      margin-bottom: 20px;
      i {
        font-size: 40px;
        color: #6eefd2;
      }
    }
    .pole-row {
      font-size: 14px;
      margin-bottom: 20px;
      .pole-label {
        color: #bfbfbf;
      }
      .pole-value {
        color: #fff;
        .select {
          width: 170px;
          height: 34px;
        }
        &.setting {
          color: #4877f8;
        }
      }
    }
    .btn-detail {
      width: 238px;
      height: 30px;
      background-color: #4877f8;
      border-radius: 4px;
      margin: 0 auto;
      text-align: center;
      line-height: 30px;
      color: #fff;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
