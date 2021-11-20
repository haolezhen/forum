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
      endedInfo: registerEndedInfo,
      // endedInfo: registerSuccessInfo,
      successInfo: {
        title: "报名注册成功!",
        content: [
          `尊敬的XXX先生/女士,感谢您参与2021中国企业家博鳌论坛·中国财富峰会,我们的工作人员将尽快与您确认相关行程.`,
          `如果您的行程发生变更,请及时联系您的邀请人,以便我们及时调整接待方案,感谢您参与2021年中国企业家博鳌论坛·中国财富峰会,我们在博鳌等您!`,
        ],
        sign: "2021中国企业家博鳌论坛·中国财富峰会",
      },
    };
  },
  created() {
    if (this.$route.query.success) {
      this.endedInfo = registerSuccessInfo;
      let call = this.$route.query.sex === "0" ? "先生" : "女士";
      this.endedInfo.content[0] = `尊敬的${this.$route.query.name}${call},感谢您参与2021中国企业家博鳌论坛·中国财富峰会,我们的工作人员将尽快与您确认相关行程。`;
    }
  },
};
</script>

<style lang="scss" scooped>
.ended {
  min-height:100vh;
  background: url(~@/assets/img/home-bg.png)  no-repeat center bottom #19278b;;
  background-size: cover;
  padding-bottom: 2rem;
}

.info {
  width: 6.37rem;
  margin: 1.16rem auto;
  font-family: PingFang SC;
  line-height: 0.54rem;

  .title {
    font-weight: bold;
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