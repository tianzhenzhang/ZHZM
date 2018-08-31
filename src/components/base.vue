<template>
    <div class="title">{{title}}</div>
</template>
<script>
export default {
  props: {
    title: String
  }
}
</script>
<style lang="scss" scoped>
.title {
  height: 40px;
  color: #9ba9c9;
  font-size: 26px;
  line-height: 40px;
  margin-bottom: 10px;
}
</style>
