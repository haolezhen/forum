<template>
  <div class="forum-agenda">
    <sys-logo></sys-logo>
    <div class="forum-title">
      <img src="~@/assets/img/forum-agenda.png" alt="" />
    </div>
    <div class="agenda-list" v-for="item in agendaList" :key="item.date">
      <div class="date">{{ item.date }}</div>
      <div class="line"></div>
      <step :agenda="item.agenda"></step>
    </div>
    <div class="summary">
      {{ summary }}
    </div>
  </div>
</template>

<script>
import Step from "../components/step.vue";
import sysLogo from "../components/sys-logo.vue";
export default {
  components: { sysLogo, Step },
  data() {
    return {
      agendaList: agendaList,
      summary: agendataSummary
    };
  },
};
</script>

<style scoped>
.forum-agenda {
  background: url("~@/assets/img/introduction-bg.png") no-repeat center bottom #19278b;
  background-size: contain;
  padding-bottom: 3.28rem;
}

.forum-title {
  text-align: center;
}

.forum-title img {
  width: 4.32rem;
}

.agenda-list {
  padding: 0.5rem;
  padding-bottom: 0;
}

.date {
  font-size: 0.28rem;
  font-family: PingFang SC;
  font-weight: bold;
  color: #00e1fe;
}

.line {
  width: 6.5rem;
  height: 0.02rem;
  margin: 0.24rem 0;
  background: linear-gradient(90deg, #03d9eb, #007eff);
}

.summary {
  margin-top: 0.48rem;
  text-align: center;
  font-size: 0.24rem;
  font-family: PingFang SC;
  /* font-weight: bold; */
  color: #ffffff;
  line-height: 0.42rem;
}
</style>