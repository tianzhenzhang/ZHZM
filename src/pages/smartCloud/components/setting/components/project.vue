<template>
  <div class="table-wrapper">
    <button class="btn" @click="dialogVisible = true">新建工程</button>
    <table class="table" align="center" cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th>序号</th>
          <th>工程名称</th>
          <th>项目负责人</th>
          <th>联系方式</th>
          <th>坐标位置</th>
          <th>配电线路数量</th>
          <th>配电线路名称</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item of info" :key="item.light_no">
          <td>{{item.sort_no}}</td>
          <td>{{item.light_no}}</td>
          <td class="stress">查看</td>
          <td>{{item.line_no}}</td>
          <td>{{item.communication_no}}</td>
          <td>{{item.light}}</td>
          <td>{{item.light_status}}</td>
          <td class="stress">
            <span>修改</span> |
            <span>删除</span>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- modal 新建工程 -->
    <el-dialog :visible.sync="dialogVisible">
      <template slot="title">
        新建工程
      </template>
      <div class="addProject">
        <div class="project-row">
          <div class="project-label">工程名称</div>
          <div class="project-value">
            <input type="text" class="input">
          </div>
        </div>
        <div class="project-row">
          <div class="project-label">负责人姓名</div>
          <div class="project-value">
            <input type="text" class="input">
          </div>
        </div>
        <div class="project-row">
          <div class="project-label">联系方式</div>
          <div class="project-value">
            <input type="text" class="input">
          </div>
        </div>
        <div class="project-row">
          <div class="project-label">位置坐标</div>
          <div class="project-value">
            <input type="text" class="input mini-input" placeholder="经度">
            <input type="text" class="input mini-input" placeholder="纬度">
          </div>
        </div>
        <div class="project-row">
          <div class="project-label">配电线路名称：</div>
          <div class="project-value">
            <input type="text" class="input">
          </div>
        </div>
        <div class="project-row">
          <div class="project-label">配电线路数量：</div>
          <div class="project-value">
            <input type="text" class="input">
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
          light_no: 'zxcvbnm1',
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
          light_no: 'zxcvbnm2',
          gps: '',
          line_no: 'qwertyu',
          communication_no: 'sghj',
          light: '100%',
          light_status: '正常',
          power: '',
          date: '2018-7-31 17:37'
        }
      ],
      dialogVisible: false
    }
  }
}
</script>
<style lang="scss" scoped>
.table-wrapper {
  padding: 20px;
  box-sizing: border-box;
  .btn {
    background-color: #4877f8;
    border-color: #4877f8;
    margin-bottom: 20px;
  }
  .addProject {
    padding-top: 20px;
    .project-row {
      margin-bottom: 20px;
      height: 40px;
      .project-label {
        width: 30%;
        float: left;
        text-align: right;
        line-height: 40px;
      }
      .project-value {
        width: 70%;
        float: left;
        padding-left: 20px;
        box-sizing: border-box;
        .input {
          padding-left: 10px;
          width: 300px;
          height: 32px;
          background: #fff;
          border: solid 1px rgba(125, 129, 128, 0.8);
          box-sizing: border-box;
        }
        .mini-input {
          width: 200px;
        }
      }
    }
  }
}
</style>
