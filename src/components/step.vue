<template>
  <div>
    <div class="step-list">
      <div class="step" :class="[{isColor:item.isColor},{isAn:!isIos},{isIos:isIos}]" v-for="(item, index) in agenda" :key="index">
        <p class="step-time">{{ item.time }}</p>
        <div class="step-center">
          <p class="step-dot">
            <span class="dot2"></span>
          </p>
          <p class="step-line"></p>
        </div>
        <p class="step-info" v-html="item.info"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    agenda: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data(){
    return {
      isIos:!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    }
  }
};
</script>

<style scoped>
.step-list {
  width: 100%;
  height: 100%;
  line-height: 0.36rem;
  box-sizing: border-box;
  color: #fff;
}

.step {
  display: flex;
  /* justify-content: space-between; */
  font-size:0.22rem;
}

.step-time {
  min-height: 0.74rem;
  font-family: PingFang-SC-ExtraLight;
  /* font-weight: bold; */
  color: #ffffff;
  width:1.39rem;
  line-height:.62rem;
  text-align:right;
}

.step-center {
  position: relative;
  margin:0 0.24rem;
}

.step-center .step-dot {
  position: absolute;
  transform: translate(-50%, 100%);
  width: 0.16rem;
  height: 0.16rem;
  border-radius: 50%;
  background-color: rgba(0, 225, 254, 0.2);
  z-index: 2;
  top:0.07rem;
}

.step-center .dot2 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 0.1rem;
  height: 0.1rem;
  border-radius: 50%;
  background-color: #00e1fe;
  z-index: 2;
}

.step-center .step-line {
  position: absolute;
  width: 1px;
  height: 100%;
  top: 0.3rem;
  left: -1px;
  opacity: 0.5;
  background-color: #00e1fe;
}

.step:last-of-type .step-line {
  display: none;
}

.step-info {
  width: 69%;
  /* height: 0.61rem; */
  font-family: PingFang-SC-ExtraLight;
  margin-bottom:0.32rem;
  color: #ffffff;
  line-height:.62rem;
  font-size:0.26rem;
}
.isColor.isAn{
  background: linear-gradient(90deg, #FFE07E 0%, #FF9834 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size:0.24rem;
}
.isColor.isIos{
  font-size:0.24rem;
}
.isColor .step-dot{
  background-color:rgba(255, 223, 126, .2);
}
.isColor .dot2{
  background-color:rgba(255, 223, 126, 1);
}

</style>
<style>
.step-info span{
  display:block;
  margin-bottom:0.26rem;
}
.isColor.isIos .step-time,.isColor.isIos .step-info{
  color:rgba(255, 223, 126, 1);
}
</style>