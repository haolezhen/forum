<template>
  <div>
    <div class="step-list">
      <div class="step" v-for="(item, index) in agenda" :key="index">
        <p class="step-time">{{ item.time }}</p>
        <div class="step-center">
          <p class="step-dot">
            <span class="dot2"></span>
          </p>
          <p class="step-line"></p>
        </div>
        <p class="step-info">{{ item.info }}</p>
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
};
</script>

<style scoped>
.step-list {
  width: 100%;
  height: 100%;
  line-height: 26px;
  box-sizing: border-box;
  color: #fff;
}

.step {
  display: flex;
  justify-content: space-between;
}

.step-time {
  min-height: 0.74rem;
  font-size: 0.22rem;
  font-family: PingFang SC;
  font-weight: bold;
  color: #ffffff;
}

.step-center {
  position: relative;
}

.step-center .step-dot {
  position: absolute;
  transform: translate(-50%, 100%);
  width: 0.15rem;
  height: 0.15rem;
  border-radius: 50%;
  background-color: rgba(0, 225, 254, 0.2);
  z-index: 2;
}

.step-center .dot2 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 0.09rem;
  height: 0.09rem;
  border-radius: 50%;
  background-color: #00e1fe;
  z-index: 2;
}

.step-center .step-line {
  position: absolute;
  width: 1px;
  height: 100%;
  top: 0.2rem;
  left: -1px;
  opacity: 0.5;
  background-color: #00e1fe;
}

.step:last-of-type .step-line {
  display: none;
}

.step-info {
  width: 60%;
  /* height: 0.61rem; */
  font-size: 0.26rem;
  font-family: PingFang SC;
  font-weight: bold;
  color: #ffffff;
}
</style>