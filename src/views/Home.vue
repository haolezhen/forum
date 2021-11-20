<template>
  <div class="home">
    <sys-logo></sys-logo>
    <div class="title animate__fadeIn">
      <img src="~@/assets/img/home-2021.png" alt="" />
    </div>
    <div class="home-link-list">
      <div class="home-link animate__fadeInLeft" @click="goToIntroduction">
        论坛简介
      </div>
      <div class="home-link animate__fadeInLeft" @click="goToMeetingAgenda">
        会议议程
      </div>
      <div class="home-link animate__fadeInLeft" @click="goToRegister">
        报名注册
      </div>
      <div class="home-link animate__fadeInLeft" @click="gotoLive">
        图片直播
      </div>
      <div class="home-link animate__fadeInLeft" @click="goToContact">
        联系我们
      </div>
    </div>
    <div class="time-address">2021年12月2日-4日 | 中国·博鳌</div>
  </div>
</template>

<script>
import sysLogo from "../components/sys-logo.vue";

export default {
  components: { sysLogo },
  name: "Home",
  data() {
    return {
      ended: true,
    };
  },
  methods: {
    goToIntroduction() {
      this.$router.push("./introduction");
    },
    goToMeetingAgenda() {
      this.$router.push("./meetingAgenda");
    },
    gotoLive() {
      window.location.href = "https://live.photoplus.cn/live/82456016";
    },
    goToContact() {
      this.$router.push("./contactUs");
    },
    goToRegister() {
      if (this.ended) {
        this.$router.push("./ended");
      } else {
        this.$router.push("./register");
      }
    },
  },
};
</script>

<style scoped>
.animate__fadeInLeft {
  animation: fadeInLeft 1s;
}
.animate__fadeIn {
  animation: fadeIn 1s;
}
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
  transform: translate(-1.5rem, 0);
  animation-fill-mode: forwards;
}
.home-link:nth-child(2) {
  animation-delay: 0.1s;
}
.home-link:nth-child(3) {
  animation-delay: 0.2s;
}
.home-link:nth-child(4) {
  animation-delay: 0.3s;
}
.home-link:nth-child(5) {
  animation-delay: 0.4s;
}
@keyframes fadeInLeft {
  0% {
    transform: translate(-1.5rem, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
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
