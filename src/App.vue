<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
export default ({
  data(){
    return {

    }
  },
  created(){
    this.isWxShare()
  },
  methods:{
    isWxShare(){
      var ua = navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        this.wxShare();
      }
    },
    wxShare(){
      var _title = '2021中国财富峰会';
			var link = location.href;
      let desc = '2021年12月2日-4日 我们在博鳌等您';
      var Img = require('../public/icon.png');//实际自己的图片路径地址
      var url = window.location.href;
      var hosts = url.split('#')[0];//获取域名加打包文件夹名称
      var imgUrl = hosts.concat(Img);
      // let imgUrl = 'https://wxtp.cfbond.com/wxtp2021.png'
      let params = {
        "url": link
      }
      axios.get('https://app.cfbond.com/cfbond_app/Wx.getSignature.action',{params}).then(result => {
        let data = result.data;
        wx.config({
						debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来
						appId: data.appId, // 必填，公众号的唯一标识
						timestamp: data.timestamp, // 必填，生成签名的时间戳
						nonceStr: data.nonceStr, // 必填，生成签名的随机串
						signature: data.signature, // 必填，签名，见附录1
						jsApiList: [
							"onMenuShareTimeline",
							"onMenuShareAppMessage"
						] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
					});
					wx.error(function(res) {
						console.log(res)
						//alert(res);
					});
      })
      wx.ready(function(res) {
				wx.onMenuShareAppMessage({
					title:_title,
					desc: desc,
					link: link,
					imgUrl:imgUrl,
					trigger: function(res) {},
					success: function(res) {console.log(res)},
					cancel: function(res) {},
					fail: function(res) {console.log(res)}
				});
				wx.onMenuShareTimeline({
					title:_title ,
					desc: desc,
					link: link,
					imgUrl:imgUrl,
					trigger: function(res) {},
					success: function(res) {console.log(res)},
					cancel: function(res) {},
					fail: function(res) {console.log(res)}
				});
			});
    }
  }
})
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  min-height: 100%;
  background-color: #1d2088;
}

input::placeholder {
  color: #fff;
  opacity: 0.4;
  font-size: 12px;
  font-size: 0.3rem;
  font-family: PingFang SC;
}

input::-webkit-input-placeholder {
  color: #fff;
  opacity: 0.4;
  font-size: 12px;
  font-size: 0.3rem;
  font-family: PingFang SC;
}

.register .el-select ,.select-date{ 
  background: rgba(255,255,255,0.2) !important;
}

.register .el-input__inner {
  height: 0.8rem;
  font-size: 0.3rem;
  font-family: PingFang SC;
  background-color: transparent;
  border: none;
  color: #fff;
}
</style>
