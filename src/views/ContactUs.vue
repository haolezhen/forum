<template>
  <div class="contact">
    <sys-logo></sys-logo>
    <div class="contact-title">
      <img src="~@/assets/img/contact.png" alt="" />
    </div>
    <div class="phone-list">
      <div class="phone-item" v-for="(item, index) in phoneList" :key="index">
        <div class="name">{{ item.department }}{{ item.name }}</div>
        <div class="phone-info">
          <img src="~@/assets/img/phone-icon.png" alt="" />
          <span class="number" @click="callSb(item, index)"
            >{{ item.number }}
          </span>
          <a ref="phone" :href="'tel:' + item.number"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sysLogo from "../components/sys-logo";

import { MessageBox } from "mint-ui";
import axios from "axios";

export default {
  components: {
    sysLogo,
  },
  data() {
    return {
      phoneList: [],
    };
  },
  methods: {
    callSb(info, index) {
      MessageBox.confirm("", {
        //   title: "拨号",
        message: `是否拨打${info.department + info.name}电话：${info.number}`,
        confirmButtonText: "确认",
        cancelButtonText: "取消",
      })
        .then((action) => {
          console.log(23);
          if (action == "confirm") {
            this.$refs.phone[index].click();
          }
        })
        .catch((error) => {
          if (error == "cancel") {
          }
        });
    },
    getPhoneList() {
      axios
        .get("https://yb.cfbond.com/ba/sel_lxwm")
        .then((res) => {
          console.log(res);
          this.phoneList = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getPhoneList();
  },
};
</script>

<style lang="scss" scoped>
.contact {
  min-height: 100vh;
  background: url("~@/assets/img/common.jpg") no-repeat center bottom #19278b;
  background-size: cover;
  padding-bottom: 2.49rem;
}

.contact-title {
  text-align: center;
  margin: 0.8rem 0 0.6rem;
}

.contact-title img {
  width: 4.32rem;
  margin: 0 auto;
  display: block;
}

.phone-list {
  width: 6.4rem;
  margin: 0.59rem auto;
  padding: 0.8rem 0.51rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0rem;
}

.phone-item {
  display: flex;
  margin-bottom: 0.56rem;
  font-size: 0.3rem;
  font-family: PingFang SC;
  justify-content: space-between;

  img {
    width: 0.23rem;
    vertical-align: middle;
  }
}

.phone-item:last-child {
  margin-bottom: 0;
}

.name {
  color: #ffffff;
}

.phone-info {
  -margin-left: 1rem;
  // font-family: "微软雅黑";
  font-family:"Microsoft YaHei";
}

.number {
  flex: 1;
  margin-left: 0.11rem;
  color: #00ddfe;
}
</style>