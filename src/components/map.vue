<template>
  <div id="map"></div>
</template>
<script>
export default {
  props: {
    // 经度
    longitude: {
      type: Number,
      default: 116.404
    },
    // 纬度
    latitude: {
      type: Number,
      default: 39.915
    }
  },
  mounted() {
    this.getMap()
  },
  methods: {
    getMap() {
      var map = new BMap.Map('map')
      var point = new BMap.Point(this.longitude, this.latitude)
      map.centerAndZoom(point, 15) // 编写自定义函数，创建标注
      function addMarker(point, index) {
        // 创建图标对象
        var myIcon = new BMap.Icon('static/markes.png', new BMap.Size(23, 25), {
          // 指定定位位置。
          // 当标注显示在地图上时，其所指向的地理位置距离图标左上
          // 角各偏移10像素和25像素。您可以看到在本例中该位置即是
          // 图标中央下端的尖角位置。
          anchor: new BMap.Size(10, 25)
          // 设置图片偏移。
          // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您
          // 需要指定大图的偏移位置，此做法与css sprites技术类似。
          // imageOffset: new BMap.Size(0, 0 - index * 25) // 设置图片偏移
        })
        // 创建标注对象并添加到地图
        var marker = new BMap.Marker(point, { icon: myIcon })
        map.addOverlay(marker)
      }
      // 随机向地图添加10个标注
      var bounds = map.getBounds()
      var lngSpan = bounds.He - bounds.Le
      var latSpan = bounds.Vd - bounds.Xd
      for (var i = 0; i < 10; i++) {
        var points = new BMap.Point(
          bounds.Le + lngSpan * (Math.random() * 0.7 + 0.15),
          bounds.Xd + latSpan * (Math.random() * 0.7 + 0.15)
        )
        addMarker(points, i)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
