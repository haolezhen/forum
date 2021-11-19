<template>
  <div class="meeting">
    <div class="banner"></div>
    <div class="meeting-details">
      <div class="details-item">
        <p class="deteils-attr">论坛主题：</p>
        <p class="details-value special">新格局·新业态·新财富</p>
      </div>
      <div class="details-item">
        <p class="deteils-attr">论坛时间：</p>
        <p class="details-value special">2021年12月4日14:00-18：00</p>
      </div>
      <div class="details-item">
        <p class="deteils-attr">论坛地点：</p>
        <p class="details-value special">海南·博鳌 金湾康斯宾悦度假酒店</p>
      </div>
      <div class="details-item">
        <p class="deteils-attr">主办单位：</p>
        <p class="details-value">中国财富传媒集团</p>
      </div>
      <div class="details-item">
        <p class="deteils-attr">联合主办：</p>
        <p class="details-value">
          新华社民族品牌工程办公室 新华网 新华社新闻信息中心 中国经济信息社
          新华社新媒体中心 新华每日电讯 半月谈杂志社
        </p>
      </div>
      <div class="details-item">
        <p class="deteils-attr">承办单位：</p>
        <p class="details-value">中国财富网 光华基金</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.meeting {
  background: url("~@/assets/img/introduction-bg.png");
}

.banner {
  width: 7.5rem;
  height: 1.44rem;
  background: #1e48c7;
  box-shadow: 0rem 0rem 0rem 0rem rgba(6, 23, 57, 0.2);
}

.meeting-details {
  padding: 0.78rem 0.5rem;
  font-size: 0.26rem;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 0.64rem;
  color: #ffffff;
}

.details-item {
  display: flex;
}

.details-attr {
  flex: 1;
}

.details-value {
  flex: 3;
}
.special {
  color: #00ddfe;
}
</style>