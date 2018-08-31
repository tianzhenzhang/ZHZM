<template>
    <div>
        <v-base :title="title"></v-base>
        <div class="toolbar">
            <router-link to="/smartPoledetail" class="backPole">用电量详情</router-link>
            <router-link class="back" to="/smartPoledetail">
                <i class="iconfont icon-fanhui"></i>
            </router-link>
        </div>
        <div class="screen clearfloat">
            <div class="screen-card">
                <div class="screen-title clearfloat">
                    <div class="device-num">设备编号：4585266</div>
                    <div class="device-sort">分组：
                        <select class="select">
                            <option value="1">1</option>
                        </select>
                    </div>
                </div>
                <div class="screen-list">
                    <div class="screen-view">
                        <input type="text" class="input">
                        <button class="btn">浏览</button>
                        <div class="file-wrapper">
                            <input type="file" id="file">
                            <span class="file">上传文件</span>
                        </div>
                    </div>
                    <table class="table" cellSpacing="0" cellPadding="0">
                        <thead>
                            <tr>
                                <th>播放文件列表</th>
                                <th>播放时长</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>xxxxxx</td>
                                <td>3分钟24秒</td>
                            </tr>
                            <tr>
                                <td>xxxxxx</td>
                                <td>3分钟24秒</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="screen-card">
                <div class="img-wrapper">
                    <img src="" alt="">
                </div>
                <div class="img-controle">
                    <span class="pre">
                        <i class="iconfont icon-houtui"></i>
                    </span>
                    <span class="next">
                        <i class="iconfont icon-qianjin"></i>
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
      title: 'Smart lamp management'
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
.screen {
  width: 100%;
  height: 550px;
  background-color: #252648;
  padding: 20px;
  box-sizing: border-box;
  .screen-card {
    width: -webkit-calc((100% - 30px) / 2);
    width: -moz-calc((100% - 30px) / 2);
    width: calc((100% - 30px) / 2);
    float: left;
    &:first-child {
      margin-right: 30px;
    }
    .screen-title {
      width: 100%;
      color: #fff;
      margin-bottom: 20px;
      .device-num {
        width: 40%;
        float: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .device-sort {
        width: 55%;
        float: right;
        text-align: right;
        .select {
          width: 120px;
        }
      }
    }
    .screen-list {
      height: 460px;
      background-color: rgba(59, 60, 90, 0.5);
      padding: 20px 35px;
      box-sizing: border-box;
      .screen-view {
        position: relative;
        margin-bottom: 20px;
        .file-wrapper {
          position: absolute;
          right: 0;
          top: 0;
          #file {
            position: absolute;
            right: 0;
            top: 0;
            // display: none;
            width: 90px;
            height: 30px;
            z-index: 100;
            opacity: 0;
          }
          .file {
            position: absolute;
            right: 0;
            top: 0;
            display: block;
            width: 90px;
            height: 33px;
            border-radius: 4px;
            border: solid 1px #595959;
            color: #bfbfbf;
            line-height: 33px;
            text-align: center;
          }
        }
        .input {
          width: 60%;
          height: 30px;
        }
        .btn {
          margin-left: 10px;
        }
      }
    }
    .img-wrapper {
      width: 100%;
      height: 450px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .img-controle {
      margin-top: 20px;
      text-align: center;
      .next{
          margin-left: 20px;
      }
      i {
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
}
</style>
