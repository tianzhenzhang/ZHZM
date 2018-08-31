<template>
    <div>
        <v-base :title="title"></v-base>
        <div class="illum-select">
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
            <div class="select-item">
                <input type="text" class="input" placeholder="请输入要搜索的灯杆编号">
                <button class="btn">查询</button>
            </div>
        </div>
        <div class="meteoro-list">
            <div class="meteoro-card">
                <div class="title">
                    <span class="device_num">设备编号：01</span>
                    <span>分组：1</span>
                </div>
                <div class="meteoro-row">
                    <span class="meteoro-label">温度：</span>
                    <span class="meteoro-value">36.45°C</span>
                </div>
                <div class="meteoro-row">
                    <span class="meteoro-label">湿度：</span>
                    <span class="meteoro-value">36.45%</span>
                </div>
                <div class="meteoro-row">
                    <span class="meteoro-label">大气压：</span>
                    <span class="meteoro-value">36.45Kpa</span>
                </div>
                <div class="meteoro-row">
                    <span class="meteoro-label">光照度：</span>
                    <span class="meteoro-value">36.45Lux</span>
                </div>
                <div class="meteoro-row">
                    <span class="meteoro-label">风向：</span>
                    <span class="meteoro-value">36.45°</span>
                </div>
                <div class="meteoro-row">
                    <span class="meteoro-label">PM2.5：</span>
                    <span class="meteoro-value">36.45µg/m³</span>
                </div>
                <div class="meteoro-row">
                    <span class="meteoro-label">PM10：</span>
                    <span class="meteoro-value">36.45µg/m³</span>
                </div>
                <div class="meteoro-row">
                    <span class="meteoro-label">天气状态：</span>
                    <span class="meteoro-value">大雨</span>
                </div>
                <div class="meteoro-row">
                    <span class="meteoro-label">降雨量：</span>
                    <span class="meteoro-value">125ml</span>
                </div>
            </div>
            <div class="meteoro-card">
                <div class="title">
                    <span class="device_num">设备编号：01</span>
                    <span>分组：1</span>
                </div>
                <div class="meteoro-row">
                    <span class="meteoro-label">温度：</span>
                    <span class="meteoro-value">36.45°C</span>
                </div>
                <div class="meteoro-row">
                    <span class="meteoro-label">湿度：</span>
                    <span class="meteoro-value">36.45%</span>
                </div>
                <div class="meteoro-row">
                    <span class="meteoro-label">大气压：</span>
                    <span class="meteoro-value">36.45Kpa</span>
                </div>
                <div class="meteoro-row">
                    <span class="meteoro-label">光照度：</span>
                    <span class="meteoro-value">36.45Lux</span>
                </div>
                <div class="meteoro-row">
                    <span class="meteoro-label">风向：</span>
                    <span class="meteoro-value">36.45°</span>
                </div>
                <div class="meteoro-row">
                    <span class="meteoro-label">PM2.5：</span>
                    <span class="meteoro-value">36.45µg/m³</span>
                </div>
                <div class="meteoro-row">
                    <span class="meteoro-label">PM10：</span>
                    <span class="meteoro-value">36.45µg/m³</span>
                </div>
                <div class="meteoro-row">
                    <span class="meteoro-label">天气状态：</span>
                    <span class="meteoro-value">大雨</span>
                </div>
                <div class="meteoro-row">
                    <span class="meteoro-label">降雨量：</span>
                    <span class="meteoro-value">125ml</span>
                </div>
            </div>
            <div class="meteoro-card">
                <div class="title">
                    <span class="device_num">设备编号：01</span>
                    <span>分组：1</span>
                </div>
                <div class="meteoro-row">
                    <span class="meteoro-label">温度：</span>
                    <span class="meteoro-value">36.45°C</span>
                </div>
                <div class="meteoro-row">
                    <span class="meteoro-label">湿度：</span>
                    <span class="meteoro-value">36.45%</span>
                </div>
                <div class="meteoro-row">
                    <span class="meteoro-label">大气压：</span>
                    <span class="meteoro-value">36.45Kpa</span>
                </div>
                <div class="meteoro-row">
                    <span class="meteoro-label">光照度：</span>
                    <span class="meteoro-value">36.45Lux</span>
                </div>
                <div class="meteoro-row">
                    <span class="meteoro-label">风向：</span>
                    <span class="meteoro-value">36.45°</span>
                </div>
                <div class="meteoro-row">
                    <span class="meteoro-label">PM2.5：</span>
                    <span class="meteoro-value">36.45µg/m³</span>
                </div>
                <div class="meteoro-row">
                    <span class="meteoro-label">PM10：</span>
                    <span class="meteoro-value">36.45µg/m³</span>
                </div>
                <div class="meteoro-row">
                    <span class="meteoro-label">天气状态：</span>
                    <span class="meteoro-value">大雨</span>
                </div>
                <div class="meteoro-row">
                    <span class="meteoro-label">降雨量：</span>
                    <span class="meteoro-value">125ml</span>
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
      title: 'Monitoring management'
    }
  },
  components: {
    'v-base': base
  }
}
</script>
<style lang="scss" scoped>
.illum-select {
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
    margin-right: 80px;
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
    .select,
    .input {
      width: 220px;
      height: 36px;
      margin-top: 12px;
    }
    .input {
      width: 240px;
      padding-left: 10px;
      box-sizing: border-box;
    }
    .btn {
      margin-left: 20px;
    }
  }
}
.meteoro-list {
  width: 100%;
  margin-top: 10px;
  .meteoro-card {
    width: 306px;
    height: 500px;
    background-color: rgba(59, 60, 90, 0.5);
    box-shadow: 14px 14px 20px 0px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    margin-right: 20px;
    margin-bottom: 10px;
    float: left;
    padding: 20px 30px 30px 30px;
    &:nth-child(3n) {
      margin-right: 0;
    }
    .title {
      border-bottom: solid 1px rgba(89, 89, 89, 0.5);
      padding-bottom: 10px;
      color: #fff;
      font-size: 12px;
      margin-bottom: 30px;
      .device_num {
        margin-right: 70px;
      }
    }
    .meteoro-row {
      font-size: 14px;
      margin-bottom: 30px;
      color: #fff;
      padding-left: 100px;
      box-sizing: border-box;
    }
  }
}
</style>
