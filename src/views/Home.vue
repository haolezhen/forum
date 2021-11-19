<template>
  <div class="home">
    <sys-logo></sys-logo>
    <div class="title">
      <img src="~@/assets/img/home-2021.png" alt="" />
    </div>
    <div class="home-link-list">
      <div class="home-link" @click="goToIntroduction">论坛简介</div>
      <div class="home-link" @click="goToMeetingAgenda">会议议程</div>
      <div class="home-link">报名注册</div>
      <div class="home-link">图片直播</div>
      <div class="home-link">联系我们</div>
    </div>
    <div class="time-address">2021年12月2日-4日 | 中国·博鳌</div>
  </div>
</template>

<script>
import sysLogo from "../components/sys-logo.vue";

export default {
  components: { sysLogo },
  name: "Home",
  methods: {
    goToIntroduction() {
      this.$router.push("./Introduction");
    },
    goToMeetingAgenda() {
      this.$router.push("./meetingAgenda");
    },
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  background: url("~@/assets/img/home-bg.png");
  background-size: cover;
}

.title {
  width: 100%;
  margin-top: 0.9rem;
  text-align: center;
}

.title img {
  width: 6.67rem;
}

.home-link-list {
  width: 100%;
  padding: 0.79rem 0;
}

.home-link {
  width: 4.7rem;
  height: 0.88rem;
  margin: auto;
  margin-top: 0.32rem;
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
  width: 100%;
  text-align: center;
  padding-bottom: 2.47rem;
  font-size: 0.26rem;
  font-family: PingFang SC;
  font-weight: bold;
  color: #ffffff;
  line-height: 0.4rem;
}
</style>
