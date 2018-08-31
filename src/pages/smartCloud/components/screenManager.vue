<template>
  <div>
    <v-base :title="title"></v-base>
    <div class="screen-select">
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
    <div class="screen-content">
      <div class="screen-device">
        接入设备总数：56
      </div>
      <div class="screen-list clearfloat">
        <div class="screen-item">
          <div class="screen-toolbar">
            <span class="device-no">设备编号：2345678</span>
            <span>分组：1</span>
            <i class="iconfont icon-xiugai"></i>
          </div>
          <div class="screen-info clearfloat">
            <div class="current-video">
              <img class="current-img" src="static/screen.png" alt="">
              <!-- <p class="desc">当前播放：xxx宣传片</p> -->
            </div>
            <div class="file-manager">
              <div class="file-title">
                文件管理
                <span class="add-file">上传</span>
                <span class="add-file release">发布</span>
              </div>
              <ul class="video-list">
                <li class="video-item" draggable="true" v-for="list in data1" :key="list.id" :data-id="list.id" @dragstart="dragstartEvent" @dragend="dragendEvent" @dragenter="dragenterEvent" @dragleave="dragleaveEvent" @dragover="dragoverEvent">
                  <div class="video-img">
                    <img src="static/screen.png" alt="">
                    <i class="iconfont icon-bofang"></i>
                  </div>
                  <div class="video-info">
                    {{list.title}}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="screen-item">
          <div class="screen-toolbar">
            <span class="device-no">设备编号：2345678</span>
            <span>分组：1</span>
            <i class="iconfont icon-xiugai"></i>
          </div>
          <div class="screen-info clearfloat">
            <div class="current-video">
              <img class="current-img" src="static/screen.png" alt="">
              <!-- <p class="desc">当前播放：xxx宣传片</p> -->
            </div>
            <div class="file-manager">
              <div class="file-title">
                文件管理
                <span class="add-file">
                  <input type="file" class="file">
                  <span class="file-text">上传</span>
                </span>
                <span class="add-file release">发布</span>
              </div>
              <ul class="video-list">
                <li class="video-item" draggable="true" v-for="list in data1" :key="list.id" :data-id="list.id" @dragstart="dragstartEvent" @dragend="dragendEvent" @dragenter="dragenterEvent" @dragleave="dragleaveEvent" @dragover="dragoverEvent">
                  <div class="video-img">
                    <img src="static/screen.png" alt="">
                    <i class="iconfont icon-bofang"></i>
                  </div>
                  <div class="video-info">
                    {{list.title}}
                  </div>
                </li>
              </ul>
            </div>
          </div>
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
      title: 'Monitoring management',
      dragElement: null,
      lock: true,
      data1: [
        { id: 1, title: '这里是宣传片1' },
        { id: 2, title: '这里是宣传片2' },
        { id: 3, title: '这里是宣传片3' },
        { id: 4, title: '这里是宣传片4' },
        { id: 5, title: '这里是宣传片5' },
        { id: 6, title: '这里是宣传片6' },
        { id: 7, title: '这里是宣传片7' }
      ]
    }
  },
  methods: {
    dragstartEvent(ev) {
      const self = this
      self.dragElement = ev.target
      console.log(self.dragElement)
      //   ev.target.style.backgroundColor = '#f8f8f8'
    },
    dragendEvent(ev) {
      //   ev.target.style.backgroundColor = '#fff'
      ev.preventDefault()
    },
    dragenterEvent(ev) {
      const self = this
      console.log(ev.target)
      if (self.dragElement !== ev.target) {
        ev.target.parentNode.insertBefore(self.dragElement, ev.target)
        console.log(ev.target.parentNode)
      }
    },
    dragleaveEvent(ev) {
      const self = this
      console.log(ev.target)
      if (self.dragElement !== ev.target) {
        if (
          self.lock &&
          (ev.target === ev.target.parentNode.lastElementChild ||
            ev.target === ev.target.parentNode.lastChild)
        ) {
          ev.target.parentNode.appendChild(self.dragElement)
          self.lock = false
        } else {
          self.lock = true
        }
      }
    },
    dragoverEvent(ev) {
      ev.preventDefault()
    }
  },
  components: {
    'v-base': base
  }
}
</script>
<style lang="scss" scoped>
.screen-select {
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
      width: 180px;
      height: 36px;
      margin-top: 12px;
    }
    .input {
      width: 250px;
      padding-left: 10px;
      box-sizing: border-box;
    }
    .btn {
      margin-left: 20px;
    }
  }
}
.screen-content {
  margin-top: 20px;
  background-color: rgba(59, 60, 90, 0.2);
  border-radius: 4px;
  color: #fff;
  padding: 0 20px;
  box-sizing: border-box;
  .screen-device {
    padding: 20px 0;
  }
  .screen-list {
    width: 100%;
    padding-bottom: 50px;
    .screen-item {
      width: -webkit-calc((100% - 40px) / 2);
      width: -moz-calc((100% - 40px) / 2);
      width: calc((100% - 40px) / 2);
      height: 350px;
      background-color: rgba(59, 60, 90, 0.3);
      box-shadow: 14px 14px 20px 0px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      float: left;
      padding: 20px;
      margin-right: 20px;
      margin-bottom: 20px;
      box-sizing: border-box;
      &:nth-child(2n) {
        margin-right: 0;
      }
      .screen-toolbar {
        position: relative;
        padding-bottom: 10px;
        border-bottom: solid 1px rgba(89, 89, 89, 0.5);
        font-size: 0;
        span {
          display: inline-block;
          font-size: 14px;
          vertical-align: top;
          &.device-no {
            width: 50%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        i {
          position: absolute;
          right: 0;
          top: 0;
          color: #4877f8;
        }
      }
      .screen-info {
        width: 100%;
        .current-video,
        .file-manager {
          width: 50%;
          float: left;
        }
        .current-video {
          height: 290px;
          padding: 10px 0;
          box-sizing: border-box;
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
          // .desc {
          //   margin-top: 10px;
          //   text-align: center;
          // }
        }
        .file-manager {
          padding-left: 20px;
          box-sizing: border-box;
          .file-title {
            padding: 10px 0;
            position: relative;
            .add-file {
              position: absolute;
              right: 0;
              top: 10px;
              color: #4877f8;
              &:hover {
                cursor: pointer;
              }
              &.release {
                right: 60px;
              }
              .file {
                position: absolute;
                right: 0;
                width: 50px;
                z-index: 10;
                opacity: 0;
              }
              .file-text {
                position: absolute;
                right: 0;
                width: 50px;
                text-align: center;
              }
            }
          }
          .video-list {
            width: 100%;
            height: 240px;
            overflow: auto;
            .video-item {
              width: 100%;
              height: 50px;
              //   border: 1px solid #ddd;
              background-color: rgba(0, 0, 0, 0.3);
              margin-bottom: 20px;
              //   transition: border 0.3s;
              //   box-sizing: border-box;
              .video-img {
                width: 50px;
                height: 50px;
                float: left;
                position: relative;
                img {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 50px;
                  height: 50px;
                }
                i {
                  position: absolute;
                  left: 10px;
                  top: 10px;
                  color: #fff;
                  z-index: 12;
                  font-size: 30px;
                }
              }
              .video-info {
                padding-left: 10px;
                box-sizing: border-box;
                line-height: 50px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
              //   &:hover {
              //     border: 1px solid #20a0ff;
              //   }
            }
          }
        }
      }
    }
  }
}
</style>
