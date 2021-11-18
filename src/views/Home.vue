<template>
  <div class="home">
    <sys-logo></sys-logo>

    <div class="title">
      <img src="" alt="" />
    </div>

    <div class="home-link-list">
      <div class="home-link" @click="goToIntroduction">论坛简介</div>
      <div class="home-link">会议议程</div>
      <div class="home-link">报名注册</div>
      <div class="home-link">图片直播</div>
      <div class="home-link">联系我们</div>
    </div>

    <div class="time-address">2021年12月2日-4日 | 中国·博鳌</div>
    <div class="footer">
      <img src="" alt="" />
    </div>
  </div>
</template>

<script>
import sysLogo from "../components/sys-logo.vue";

export default {
  components: { sysLogo },
  name: "Home",
  methods: {
    goToIntroduction() {
      this.$router.push('./Introduction')
    }
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  background: #1d2088;
}

.title {
  width: 100%;
  background-color: antiquewhite;
}

.title img {
  width: 100%;
  height: 200px;
}

.home-link-list {
  width: 100%;
  padding: 0.79rem 1.4rem;
  margin: auto;
}

.home-link {
  width: 4.7rem;
  height: 0.88rem;
  margin-top: 0.16rem;
  font-size: 0.34rem;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 0.88rem;
  text-align: center;
  border: 1px solid #ffffff;
  border-radius: 0.08rem;
  opacity: 0.8;
  color: #ffffff;
  background: rgba(255, 255, 255, 0);
}

.time-address {
  /* width: 4.01rem;
  height: 0.28rem; */
  width: 100%;
  text-align: center;
  font-size: 0.26rem;
  font-family: PingFang SC;
  font-weight: bold;
  color: #ffffff;
  line-height: 0.4rem;
}

.footer {
  width: 100%;
  background-color: aquamarine;
}

.footer img {
  width: 100%;
  height: 100px;
}
</style>
