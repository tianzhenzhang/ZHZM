<template>
  <div class="header">
    <div class="logo">智慧照明云平台</div>
    <div class="title">2018-7-24 星期二 10:26:33</div>
    <ul class="header-right">
      <li class="user-info" @click="showDrop">
        <img class="avatar" src="../common/images/avatar.png" alt="">
        <span class="name">admin</span>
        <i class="iconfont icon-xiangxia"></i>
      </li>
      <router-link class="setting-box" tag="li" to="/setting">
        <i class="iconfont icon-shezhi"></i>
      </router-link>
      <li>
        <i class="iconfont icon-xiaoxi1"></i>
      </li>
    </ul>
    <div class="dropDown" v-show="show">
      <div class="drop-item">修改密码</div>
      <div class="drop-item">退出</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    showDrop() {
      this.show = !this.show
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60px;
  background-color: #303151;
  line-height: 60px;
  color: #fff;
  z-index: 1000;
  .logo {
    width: 240px;
    float: left;
    font-size: 26px;
    text-align: right;
  }
  .title {
    width: -moz-calc(100% - 590px);
    width: -webkit-calc(100% - 590px);
    width: calc(100% - 590px);
    float: left;
    text-align: center;
    font-size: 16px;
  }
  .header-right {
    width: 350px;
    height: 60px;
    float: right;
    &:hover {
      cursor: pointer;
    }
    li {
      padding: 0 20px;
      display: block;
      float: right;
      .icon-xiaoxi1,
      .icon-shezhi {
        font-size: 24px;
      }
      .avatar {
        vertical-align: middle;
      }
      .name {
        padding: 0 10px;
      }
      .icon-xiangxia {
        font-size: 13px;
      }
      &:hover{
        i{
          color: #4877f8;
        }
      }
    }
  }
  .dropDown {
    position: absolute;
    top: 75px;
    right: 20px;
    width: 100px;
    background: #303151;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.5);
    &::before {
      content: '';
      display: block;
      width: 0;
      border-top: solid 15px transparent;
      border-right: solid 15px transparent;
      border-bottom: solid 15px #303151;
      border-left: solid 15px transparent;
      position: absolute;
      top: -30px;
      left: 25px;
      transform: skewX(20deg);
    }
    .drop-item {
      height: 40px;
      line-height: 40px;
      color: #fff;
      text-align: center;
      &:hover {
        cursor: pointer;
        background: rgba(59, 60, 90, 0.5);
      }
    }
  }
}
</style>
