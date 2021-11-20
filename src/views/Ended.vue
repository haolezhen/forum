<template>
  <div class="ended">
    <sys-logo></sys-logo>
    <div class="info">
      <div class="title">
        {{ endedInfo.title }}
      </div>
      <div class="content-list">
        <div
          class="content"
          v-for="(item, index) in endedInfo.content"
          :key="index"
        >
          {{ item }}
        </div>
      </div>
      <div class="sign">
        {{ endedInfo.sign }}
      </div>
    </div>
  </div>
</template>

<script>
import SysLogo from "../components/sys-logo.vue";

export default {
  components: {
    SysLogo,
  },
  data() {
    return {
      // endedInfo: registerEndedInfo,
      endedInfo: registerSuccessInfo,
    };
  },
};
</script>

<style lang="scss" scooped>
.ended {
  background: url(~@/assets/img/home-bg.png);
  background-size: cover;
  padding-bottom: 8.47rem;
}

.info {
  width: 6.37rem;
  margin: 1.16rem auto;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 0.54rem;

  .title {
    font-size: 0.5rem;
    text-align: center;
    color: #00ddfe;
  }

  .content-list {
    margin-top: 0.72rem;
  }

  .content {
    text-indent: 2em;
    font-size: 0.28rem;
    color: #ffffff;
  }

  .sign {
    font-size: 0.28rem;
    color: #ffffff;
    text-align: right;
  }
}
</style>