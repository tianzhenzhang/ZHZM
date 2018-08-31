<template>
    <div>
        <v-base :title="title"></v-base>
        <div class="map-select">
            <div class="select-item">
                <span class="select-label">选择项目：</span>
                <select class="select">
                    <option value="花城广场1期">花城广场1期</option>
                    <option value="花城广场1期">花城广场1期</option>
                    <option value="花城广场1期">花城广场1期</option>
                </select>
            </div>
            <div class="select-item">
                <span class="select-label">灯杆编号：</span>
                <input type="text" class="input">
                <button class="btn">查询</button>
            </div>
        </div>
        <div class="map-content">
            <div class="map-title">
                <span class="light-total">接入路灯总数：56</span>
                <span class="light-num">亮灯数量：56</span>
            </div>
            <div class="map-wrapper">
                <v-map></v-map>
            </div>
            <div class="device-list">
                <div class="heading">通信异常列表</div>
                <div class="device-content">
                    <table class="table" cellSpacing="0" cellPadding="0">
                        <thead>
                            <tr>
                                <th>事件</th>
                                <th>设备编号</th>
                                <th>发生时间</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>采集通信异常</td>
                                <td>8856362</td>
                                <td>2018-7-31 12:32:44</td>
                                <td class="stress">查看</td>
                            </tr>
                            <tr>
                                <td>采集通信异常</td>
                                <td>8856362</td>
                                <td>2018-7-31 12:32:44</td>
                                <td class="stress">查看</td>
                            </tr>

                            <tr>
                                <td>采集通信异常</td>
                                <td>8856362</td>
                                <td>2018-7-31 12:32:44</td>
                                <td class="stress">查看</td>
                            </tr>
                            <tr>
                                <td>采集通信异常</td>
                                <td>8856362</td>
                                <td>2018-7-31 12:32:44</td>
                                <td class="stress">查看</td>
                            </tr>
                            <tr>
                                <td>采集通信异常</td>
                                <td>8856362</td>
                                <td>2018-7-31 12:32:44</td>
                                <td class="stress">查看</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="heading">告警事件列表</div>
                <div class="device-content">
                    <table class="table" cellSpacing="0" cellPadding="0">
                        <thead>
                            <tr>
                                <th>事件</th>
                                <th>设备编号</th>
                                <th>发生时间</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>采集通信异常</td>
                                <td>8856362</td>
                                <td>2018-7-31 12:32:44</td>
                                <td class="stress">查看</td>
                            </tr>
                            <tr>
                                <td>采集通信异常</td>
                                <td>8856362</td>
                                <td>2018-7-31 12:32:44</td>
                                <td class="stress">查看</td>
                            </tr>

                            <tr>
                                <td>采集通信异常</td>
                                <td>8856362</td>
                                <td>2018-7-31 12:32:44</td>
                                <td class="stress">查看</td>
                            </tr>
                            <tr>
                                <td>采集通信异常</td>
                                <td>8856362</td>
                                <td>2018-7-31 12:32:44</td>
                                <td class="stress">查看</td>
                            </tr>
                            <tr>
                                <td>采集通信异常</td>
                                <td>8856362</td>
                                <td>2018-7-31 12:32:44</td>
                                <td class="stress">查看</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import base from 'components/base.vue'
import map from 'components/map.vue'
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
    'v-base': base,
    'v-map': map
  }
}
</script>
<style lang="scss" scoped>
.map-select {
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
    .select,
    .input {
      width: 300px;
      height: 36px;
      margin-top: 12px;
      box-sizing: border-box;
    }
    .btn {
      margin-top: 12px;
      margin-left: 10px;
      background: #4877f8;
      border-color: #4877f8;
      color: #fff;
    }
  }
}
.map-content {
  width: 100%;
  .map-title {
    width: 100%;
    color: #fff;
    font-size: 14px;
    margin: 20px 0;
    .light-total {
      margin-right: 30px;
    }
  }
  .map-wrapper {
    width: 64%;
    height: 630px;
    background-color: #3b3c5a;
    border: solid 1px #7d7d7d;
    float: left;
    padding: 10px;
    box-sizing: border-box;
  }
  .device-list {
    width: 35%;
    min-height: 500px;
    float: right;
    padding-bottom: 20px;
    .heading {
      margin-bottom: 10px;
      color: #fff;
    }
    .device-content {
      padding: 20px 10px;
      height: 275px;
      background-color: rgba(59, 60, 90, 0.5);
      box-sizing: border-box;
      overflow: auto;
      margin-bottom: 20px;
      th,
      td {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
