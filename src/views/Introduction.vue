<template>
  <div class="introduction">
    <sys-logo></sys-logo>
    <div>
      <div class="forum-list" v-for="(item, index) in forumList" :key="index">
        <div class="title">{{ item.title }}</div>
        <div class="info">{{ item.subtitle }}</div>
        <div class="content" v-html="item.content"></div>
      </div>
    </div>
    <div class="home-link-list">
      <div class="home-link" @click="goToForumGenda">论坛日程</div>
      <a class="home-link" href="http://specials.cfbond.com/2020balt/index.html">上届回顾</a>
    </div>
  </div>
</template>

<script>
import SysLogo from "../components/sys-logo.vue";
export default {
  data() {
    return {
      forumList:forumIntro,
    };
  },
  components: {
    SysLogo,
  },
  created(){
    console.log(forumIntro)
  },
  methods: {
    goToForumGenda() {
      this.$router.push('./forumAgenda')
    }
  }
};
</script>

<style scoped>
.introduction {
  background: url("~@/assets/img/jianjie.jpg") no-repeat center bottom #19278b;;
  background-size: cover;
}

.forum-list {
  font-weight: bold;
  font-family: PingFang SC;
  text-align: center;
  color: #ffffff;
}

.title {
  margin: 0.8rem 0.38rem 0 0.41rem;
  font-size: 0.48rem;
  line-height: 0.64rem;
  font-family: PingFang-SC-Regular;
}

.forum-list:first-child .title {
  margin-top: 0.8rem;
}

.info {
  margin: 0.24rem 0 0.56rem 0;
  font-size: 0.34rem;
  line-height: 0.38rem;
  font-weight:normal;
  font-family: PingFang-SC-ExtraLight;
}

.content {
  text-align: left;
  font-size: 0.28rem;
  line-height: 0.54rem;
  margin: 0 0.38rem 0 0.41rem;
  font-weight:normal;
  font-family: PingFang-SC-ExtraLight;
}
.home-link-list {
  width: 100%;
  padding: 1.24rem 0 2.48rem 0;
}

.home-link {
  display: block;
  width: 4.7rem;
  height: 0.88rem;
  margin: auto;
  font-size: 0.34rem;
  font-family: PingFang SC;
  line-height: 0.88rem;
  text-align: center;
  text-decoration: none;
  border: 1px solid rgba(255,255,255,0.8);
  border-radius: 0.08rem;
  color: #ffffff;
  background: rgba(255, 255, 255, 0);
}

.home-link:last-child {
  margin-top: 0.42rem;
}
</style>
<style>
.content span{
  display:block;
}
</style>