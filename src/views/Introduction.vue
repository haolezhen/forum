<template>
  <div class="introduction">
    <sys-logo></sys-logo>
    <div>
      <div class="forum-list" v-for="(item, index) in forumList" :key="index">
        <div class="title">{{ item.title }}</div>
        <div class="info">{{ item.info }}</div>
        <div class="content">{{ item.content }}</div>
      </div>
    </div>
    <div class="home-link-list">
      <div class="home-link" @click="goToForumGenda">论坛日程</div>
      <a class="home-link" href="http://www.baidu.com">上届回顾</a>
    </div>
  </div>
</template>

<script>
import SysLogo from "../components/sys-logo.vue";
export default {
  data() {
    return {
      forumList: [
        {
          title: "中国企业家博鳌论坛",
          info: "共赴海滨之约 共商发展之机",
          content: `2021中国企业家博鳌论坛以“共谋数字时代 共赢绿色发展”为主题，包括主论坛及学者分享会、平行论坛、中国实干家公开课、品牌品鉴会、品牌夜话、文化交流活动、“冠军友谊赛”等环节。论坛将邀请政府领导、知名经济学家、文化名家和企业家等，深度思考、前瞻判断，剖析中国经济的内生动力，把脉中国经济数字化、绿色发展的高质量发展之路。
作为中国企业界重要的年度盛会，中国企业家博鳌论坛已连续成功举办五届，成为企业家之间碰撞商业智慧、凝聚商业力量、携手共同发展的重要平台。正式需要更新确认,“中国企业家博鳌论坛”由新华社、中国经济信息社主办,海南省工商联、海南省商务厅、中国海关出版社、团结报社、凤凰网、民革中央企业家联谊会等协办.`,
        },
        {
          title: "中国企业家博鳌论坛",
          info: "共赴海滨之约 共商发展之机",
          content: `2021中国企业家博鳌论坛以“共谋数字时代 共赢绿色发展”为主题，包括主论坛及学者分享会、平行论坛、中国实干家公开课、品牌品鉴会、品牌夜话、文化交流活动、“冠军友谊赛”等环节。论坛将邀请政府领导、知名经济学家、文化名家和企业家等，深度思考、前瞻判断，剖析中国经济的内生动力，把脉中国经济数字化、绿色发展的高质量发展之路。
作为中国企业界重要的年度盛会，中国企业家博鳌论坛已连续成功举办五届，成为企业家之间碰撞商业智慧、凝聚商业力量、携手共同发展的重要平台。正式需要更新确认,“中国企业家博鳌论坛”由新华社、中国经济信息社主办,海南省工商联、海南省商务厅、中国海关出版社、团结报社、凤凰网、民革中央企业家联谊会等协办.`,
        },
      ],
    };
  },
  components: {
    SysLogo,
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
  background: url("~@/assets/img/introduction-bg.png");
  background-size: cover;
}

.forum-list {
  font-weight: bold;
  font-family: PingFang SC;
  text-align: center;
  color: #ffffff;
}

.title {
  margin-top: 0.86rem;

  font-size: 0.48rem;
  line-height: 0.64rem;
}

.forum-list:first-child .title {
  margin-top: 0.7rem;
}

.info {
  margin: 0.25rem 0 0.56rem 0;
  font-size: 0.34rem;
  line-height: 0.64rem;
}

.content {
  text-align: left;
  font-size: 0.28rem;
  line-height: 0.54rem;
  margin: 0 0.38rem 0 0.41rem;
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
  font-weight: bold;
  line-height: 0.88rem;
  text-align: center;
  text-decoration: none;
  border: 1px solid #ffffff;
  border-radius: 0.08rem;
  opacity: 0.8;
  color: #ffffff;
  background: rgba(255, 255, 255, 0);
}

.home-link:last-child {
  margin-top: 0.42rem;
}
</style>