<template>
  <div>
    <v-base :title="title"></v-base>
    <div class="illum-wrapper">
      <div class="illum-content">
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
        <div class="table-wrapper">
          <table class="table" align="center" cellspacing="0" cellpadding="0">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" id="allcheckbox" @click="checkAll">
                  <label for="allcheckbox"></label>
                </th>
                <th>分组编号</th>
                <th>灯具编号</th>
                <th>地理位置</th>
                <th>线路编号</th>
                <th>通信状态</th>
                <th>灯具亮度</th>
                <th>灯具状态</th>
                <th>电源监测</th>
                <th>更新时间</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) of info" :key="item.light_no">
                <td>
                  <input type="checkbox" name="checkbox" :id="getcheckId(index)" @click="selectAll">
                  <label :for="getcheckId(index)"></label>
                </td>
                <td>{{item.sort_no}}</td>
                <td>{{item.light_no}}</td>
                <td>查看</td>
                <td>{{item.line_no}}</td>
                <td>{{item.communication_no}}</td>
                <td>{{item.light}}</td>
                <td>{{item.light_status}}</td>
                <td>查看</td>
                <td>{{item.date}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="operation">
        <div class="title">批量操作</div>
        <div class="operation-card">
          <span class="operation-icon">
            <i class="iconfont icon-kongzhiqi"></i>
          </span>
          <span class="operation-text">测试</span>
        </div>
        <div class="operation-card">
          <span class="operation-icon">
            <i class="iconfont icon-guandeng"></i>
          </span>
          <span class="operation-text">关灯</span>
        </div>
        <div class="operation-card">
          <span class="operation-icon">
            <i class="iconfont icon-shanguang"></i>
          </span>
          <span class="operation-text">连续闪光</span>
        </div>
        <div class="operation-card">
          <span class="operation-icon">
            <i class="iconfont icon-dengguang"></i>
          </span>
          <span class="operation-text">
            <select class="select">
              <option value="10%">10%</option>
            </select>
          </span>
        </div>
        <div class="operation-card">
          <span class="operation-icon">
            <i class="iconfont icon-xiugai"></i>
          </span>
          <span class="operation-text">
            <input type="number" class="input-number" value="10">
          </span>
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
      title: 'Lighting management',
      info: [
        {
          sort_no: 'sdfghjkl;',
          light_no: 'zxcvbnm',
          gps: '',
          line_no: 'qwertyu',
          communication_no: 'sghj',
          light: '100%',
          light_status: '正常',
          power: '',
          date: '2018-7-31 17:37'
        },
        {
          sort_no: 'sdfghjkl;',
          light_no: 'zxcvbnm',
          gps: '',
          line_no: 'qwertyu',
          communication_no: 'sghj',
          light: '100%',
          light_status: '正常',
          power: '',
          date: '2018-7-31 17:37'
        },
        {
          sort_no: 'sdfghjkl;',
          light_no: 'zxcvbnm',
          gps: '',
          line_no: 'qwertyu',
          communication_no: 'sghj',
          light: '100%',
          light_status: '正常',
          power: '',
          date: '2018-7-31 17:37'
        }
      ]
    }
  },
  methods: {
    getcheckId(index) {
      return 'checkbox_' + index
    },
    checkAll(obj) {
      var checkboxs = document.getElementsByName('checkbox')
      for (let i = 0; i < checkboxs.length; i++) {
        checkboxs[i].checked = obj.target.checked
      }
    },
    selectAll() {
      var checkall = document.getElementById('allcheckbox')
      var checkboxs = document.getElementsByName('checkbox')
      var count = 0
      for (let i = 0; i < checkboxs.length; i++) {
        if (checkboxs[i].checked) {
          count++
        }
      }
      if (count === checkboxs.length) {
        checkall.checked = true
      } else {
        checkall.checked = false
      }
    }
  },
  components: {
    'v-base': base
  }
}
</script>
<style lang="scss" scoped>
.illum-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  .illum-content {
    position: absolute;
    right: 260px;
    left: 0;
    top: 0;
    bottom: 0;
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
        margin-right: 50px;
        float: left;
        &:nth-child(3) {
          margin-right: 0;
        }
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
          width: 150px;
          height: 36px;
          margin-top: 12px;
        }
        .input {
          width: 180px;
          padding-left: 10px;
          box-sizing: border-box;
        }
        .btn {
          margin-left: 20px;
        }
      }
    }
    .table-wrapper {
      padding: 20px;
      background-color: rgba(59, 60, 90, 0.5);
      border-radius: 6px;
      box-sizing: border-box;
      margin-top: 10px;
    }
  }
  .operation {
    position: absolute;
    top: 0;
    right: 0;
    width: 240px;
    height: 400px;
    background-color: rgba(59, 60, 90, 0.5);
    border-radius: 6px;
    padding: 10px;
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
      &:hover {
        cursor: pointer;
        background-color: #ffffff;
        border-right-color: #4877f8;
        .operation-text {
          color: #333;
          .select {
            background: #fff;
            border-color: #ccc;
            color: #333;
          }
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
        margin: 9px 30px 9px 30px;
        i {
          color: #fff;
          font-size: 16px;
        }
      }
      .operation-text {
        width: 120px;
        line-height: 50px;
        color: #fff;
        .select,
        .input-number {
          width: 100px;
          padding-left: 10px;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>
