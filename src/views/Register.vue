<template>
  <div class="register">
    <sys-logo></sys-logo>

    <form action="" class="form">
      <div class="form-item">
        <p class="title">
          <span class="star">*</span>
          <span class="prop">姓名</span>
        </p>
        <input type="text" placeholder="请输入姓名" />
      </div>
      <div class="form-item">
        <p class="title">
          <span class="star">*</span>
          <span class="prop">性别</span>
        </p>
        <input type="text" placeholder="请输入姓名性别" />
      </div>
      <div class="form-item">
        <p class="title">
          <span class="star">*</span>
          <span class="prop">单位</span>
        </p>
        <input type="text" placeholder="请输入单位名称" />
      </div>
      <div class="form-item">
        <p class="title">
          <span class="star">*</span>
          <span class="prop">职务</span>
        </p>
        <input type="text" placeholder="请输入职务" />
      </div>
      <div class="form-item">
        <p class="title">
          <span class="star">*</span>
          <span class="prop">手机号</span>
        </p>
        <input type="text" placeholder="请输入手机号" />
      </div>
      <div class="form-item">
        <p class="title">
          <!-- <span class="star">*</span> -->
          <span class="prop">身份证号</span>
        </p>
        <input type="text" placeholder="请输入身份证号" />
      </div>
      <div class="form-item">
        <p class="title">
          <!-- <span class="star">*</span> -->
          <span class="prop">是否需要接机</span>
        </p>
        <select name="" id="">
          <option value="" disabled selected hidden>请选择</option>
          <option value="">是</option>
          <option value="">否</option>
        </select>
      </div>
      <div class="form-item">
        <p class="title">
          <span class="prop">航班号</span>
        </p>
        <input type="text" placeholder="请输入航班号" />
      </div>
      <div class="form-item">
        <p class="title">
          <span class="prop">是否需要代订酒店</span>
        </p>
        <select name="" id="">
          <option value="" disabled selected hidden>请选择</option>
          <option value="">是</option>
          <option value="">否</option>
        </select>
      </div>
      <div class="form-item">
        <p class="title">
          <span class="prop">入住日期</span>
        </p>
        <!-- v-model="pickerVisible" -->
        <!-- <mt-datetime-picker
          type="date"
          year-format="{value} 年"
          month-format="{value} 月"
          date-format="{value} 日"
        >
        </mt-datetime-picker> -->
      </div>
    </form>
  </div>
</template>

<script>
import sysLogo from "../components/sys-logo.vue";
export default {
  components: { sysLogo },
};
</script>

<style lang="scss" scoped>
.register {
  background: url("~@/assets/img/introduction-bg.png");
  background-size: cover;
}
.form {
  width: 6.7rem;
  margin: 0.81rem auto;
}

.form-item {
  margin-bottom: 0.41rem;
  font-size: 0.28rem;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 0.56rem;
  color: #fff;

  .star {
    color: #ff4747;
  }

  input,
  select {
    width: 6.7rem;
    height: 0.8rem;
    padding-left: 0.21rem;
    font-size: 0.3rem;
    font-family: PingFang SC;
    font-weight: bold;
    outline: none;
    border: none;
    border-radius: 0.08rem;
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
  }
}

input::placeholder {
  color: #fff;
  opacity: 0.4;
  font-size: 12px;
  font-size: 0.3rem;
  font-family: PingFang SC;
}

input::-webkit-input-placeholder {
  color: #fff;
  opacity: 0.4;
  font-size: 12px;
  font-size: 0.3rem;
  font-family: PingFang SC;
}
</style>