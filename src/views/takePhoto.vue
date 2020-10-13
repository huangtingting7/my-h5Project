<template>
<div>
  <van-nav-bar
    :title="$router.currentRoute.meta.title"
    left-text="返回"
    right-text="打开相册"
    left-arrow
    @click-left="onClickLeft"
    @click-right="scanPicture"
  />
  <div id="bcid" :style='{zIndex:zIndex}'></div>
  <div class="title" v-if="codeUrl && zIndex == '-1'">
    扫描内容是：{{ codeUrl}}
  </div>
  <van-button type="primary" @click='startRecognize' block style="position: absolute;bottom: 0rem;">点击扫码</van-button>
</div>

</template>
<script>
export default{
  data () {
    return {
      text: '',
      codeUrl: '',
      scan: '',
      zIndex: -1
    }
  },
  mounted () {
    console.log(window)
    console.log(this.$router)
  },
  /* eslint-disable */
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    // 从相册中选择二维码图片
    scanPicture () { // 可以直接识别二维码图片
      plus.gallery.pick(function (path) {
        plus.barcode.scan(path, onmarked, function (error) {
          plus.nativeUI.alert('无法识别此图片')
        })
      }, function (err) {
        plus.nativeUI.alert('Failed: ' + err.message)
      })
    },
    // onClickRight () {
    //   Toast('按钮')
    // },
    // 初始化扫描控件
    startRecognize () {
      this.zIndex = 9999
      let that = this
      if (!window.plus) { return };
      // 初始化扫描控件
      that.scan = new plus.barcode.Barcode('bcid')
      that.scan.onmarked = onmarked
      // 调用开始扫描
      that.startScan()
      // 扫描后回调
      function onmarked (type, result, file) {
        switch (type) {
          case plus.barcode.QR:
            type = 'QR'
            break
          case plus.barcode.EAN13:
            type = 'EAN13'
            break
          case plus.barcode.EAN8:
            type = 'EAN8'
            break
          default:
            type = '其它' + type
            break
        }
        result = result.replace(/\n/g, '')
        that.codeUrl = result
        // 返回值
        // Toast(result);
        that.zIndex = -1
        that.closeScan()
      }
    },
    // 开始扫描
    startScan () {
      if (!window.plus) return
      this.scan.start()
    },
    // 关闭扫描
    cancelScan () {
      if (!window.plus) return
      this.zIndex = -1
      this.scan.cancel()
    },
    // 关闭条码识别控件
    closeScan () {
      if (!window.plus) return
      this.scan.close()
    }
  }
}
</script>

<style >
    #bcid {
      width: 100%;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom:3rem;
      text-align: center;
      color: #fff;
    }
</style>
