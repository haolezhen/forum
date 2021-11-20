<template>
  <div class="register">
    <sys-logo></sys-logo>

    <form action="" class="form">
      <div class="form-item">
        <p class="title">
          <span class="star">*</span>
          <span class="prop">姓名</span>
        </p>
        <input
          type="text"
          ref="name"
          v-model="formValue.name"
          placeholder="请输入姓名"
          @blur="inputChange('name')"
        />
      </div>
      <div class="form-item">
        <p class="title">
          <span class="star">*</span>
          <span class="prop">性别</span>
        </p>
        <!-- <select ref="sex" v-model="formValue.sex" @blur="inputChange('sex')">
          <option value="" disabled selected hidden>请选择性别</option>
          <option value="0">男</option>
          <option value="1">女</option>
        </select> -->
        <el-select
          ref="sex"
          v-model="formValue.sex"
          @blur="inputChange('sex')"
          placeholder="请选择"
        >
          <el-option
            v-for="item in sexOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="form-item">
        <p class="title">
          <span class="star">*</span>
          <span class="prop">单位</span>
        </p>
        <input
          type="text"
          ref="company"
          v-model="formValue.company"
          placeholder="请输入单位名称"
          @blur="inputChange('company')"
        />
      </div>
      <div class="form-item">
        <p class="title">
          <span class="star">*</span>
          <span class="prop">职务</span>
        </p>
        <input
          type="text"
          ref="post"
          v-model="formValue.post"
          placeholder="请输入职务"
          @blur="inputChange('post')"
        />
      </div>
      <div class="form-item">
        <p class="title">
          <span class="star">*</span>
          <span class="prop">手机号</span>
        </p>
        <input
          type="number"
          ref="number"
          v-model="formValue.number"
          placeholder="请输入手机号"
          @blur="inputChange('number')"
        />
      </div>
      <div class="form-item">
        <p class="title">
          <span class="prop">身份证号</span>
        </p>
        <input
          type="text"
          ref="crad"
          v-model="formValue.crad"
          placeholder="请输入身份证号"
        />
      </div>
      <div class="form-item">
        <p class="title">
          <span class="prop">是否需要接机</span>
        </p>
        <!-- <select name="" id="" v-model="formValue.ishb">
          <option value="" disabled selected hidden>请选择</option>
          <option value="1">是</option>
          <option value="0">否</option>
        </select> -->
        <el-select v-model="formValue.ishb" placeholder="请选择">
          <el-option
            v-for="item in ishbOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="form-item">
        <p class="title">
          <span class="prop">航班号</span>
        </p>
        <input type="text" v-model="formValue.hbh" placeholder="请输入航班号" />
      </div>
      <div class="form-item">
        <p class="title">
          <span class="prop">是否需要代订酒店</span>
        </p>
        <!-- <select name="" id="" v-model="formValue.isjd">
          <option value="" disabled selected hidden>请选择</option>
          <option value="1">是</option>
          <option value="0">否</option>
        </select> -->
        <el-select v-model="formValue.isjd" placeholder="请选择">
          <el-option
            v-for="item in isjdOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="form-item">
        <p class="title">
          <span class="prop">入住日期</span>
        </p>
        <div class="select-date" v-if="selectedInValue" @click="selectInData">
          {{ selectedInValue }}
        </div>
        <div class="select-date" v-if="!selectedInValue" @click="selectInData">
          请选择
        </div>
        <mt-datetime-picker
          lockScroll="true"
          ref="dateInPicker"
          v-model="formValue.rzdate"
          class="myPicker"
          type="date"
          year-format="{value}"
          month-format="{value}"
          date-format="{value}"
          @confirm="dateInConfirm()"
        >
        </mt-datetime-picker>
      </div>
      <div class="form-item">
        <p class="title">
          <span class="prop">退房日期</span>
        </p>
        <div class="select-date" v-if="selectedOutValue" @click="selectOutData">
          {{ selectedOutValue }}
        </div>
        <div
          class="select-date"
          v-if="!selectedOutValue"
          @click="selectOutData"
        >
          请选择
        </div>
        <mt-datetime-picker
          lockScroll="true"
          ref="dateOutPicker"
          v-model="formValue.tfdate"
          class="myPicker"
          type="date"
          year-format="{value}"
          month-format="{value}"
          date-format="{value}"
          @confirm="dateOutConfirm()"
        >
        </mt-datetime-picker>
      </div>
      <div class="form-item">
        <p class="title">
          <span class="prop">请选择参加的论坛</span>
        </p>
        <!-- <select name="forum" id="" v-model="formValue.lt" multiple="multiple">
          <option value="" disabled selected>请选择（可多选）</option>
          <option v-for="item in forumOptions" :key="item.id" :value="item.id">
            {{ item.name }}
          </option>
        </select> -->
        <!-- <el-select v-model="formValue.lt" multiple placeholder="请选择">
          <el-option
            v-for="item in forumOptions"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select> -->
        <el-select
          v-model="formValue.lt"
          multiple
          collapse-tags
          placeholder="请选择"
        >
          <el-option
            v-for="item in forumOptions"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </div>
    </form>

    <div class="register-btn" @click="register">我要报名</div>
  </div>
</template>

<script>
import sysLogo from "../components/sys-logo.vue";

import { MessageBox } from "mint-ui";
import axios from "axios";

export default {
  components: { sysLogo },
  data() {
    return {
      selectedInValue: "",
      selectedOutValue: "",
      forumOptions: [],
      formValue: {
        name: "",
        sex: "",
        company: "",
        post: "",
        number: "",
        crad: "",
        // 是否需要接机；0:不需要，1:需要
        ishb: "",
        // 航班号
        hbh: "",
        // 代订酒店；0不需要，1需要
        isjd: "",
        rzdate: "",
        tfdate: "",
        lt: [],
      },
      requireForm: {
        name: "",
        sex: "",
        company: "",
        post: "",
        number: "",
      },
      // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
      reg: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
      ishbOptions: [
        { label: "是", value: 1 },
        { label: "否", value: 0 },
      ],
      isjdOptions: [
        { label: "是", value: 1 },
        { label: "否", value: 0 },
      ],
      sexOptions: [
        { label: "男", value: "男" },
        { label: "女", value: "女" },
      ],
    };
  },
  methods: {
    selectInData() {
      // 打开时间选择器
      // 如果已经选过日期，则再次打开时间选择器时，日期回显（不需要回显的话可以去掉 这个判断）
      if (this.selectedInValue) {
        this.formValue.rzdate = this.selectedInValue;
      } else {
        this.formValue.rzdate = new Date();
      }
      this.$refs["dateInPicker"].open();
    },
    dateInConfirm() {
      this.selectedInValue = this.formData(this.formValue.rzdate);
    },
    selectOutData() {
      // 打开时间选择器
      // 如果已经选过日期，则再次打开时间选择器时，日期回显（不需要回显的话可以去掉 这个判断）
      if (this.selectedOutValue) {
        this.formValue.tfdate = this.selectedOutValue;
      } else {
        this.formValue.tfdate = new Date();
      }
      this.$refs["dateOutPicker"].open();
    },
    dateOutConfirm() {
      this.selectedOutValue = this.formData(this.formValue.tfdate);
    },
    formData(time) {
      return time
        ? time.getFullYear() +
            "-" +
            (time.getMonth() + 1) +
            "-" +
            time.getDate()
        : "";
    },
    getForumList() {
      axios
        .get("https://yb.cfbond.com/ba/sel_lt")
        .then((res) => {
          this.forumOptions = res.data.data;
        })
        .catch((err) => {});
    },
    register() {
      console.log(this.formValue);

      if (
        this.formValue.name &&
        this.formValue.sex &&
        this.formValue.company &&
        this.formValue.post &&
        this.formValue.number
      ) {
        if (this.formValue.number.length !== 11) {
          this.$refs["number"].style.border = "1px solid #FF4747";
          MessageBox("", "手机号输入错误请检查！");
        } else if (this.formValue.crad && !this.reg.test(this.formValue.crad)) {
          this.$refs["crad"].style.border = "1px solid #FF4747";
          MessageBox("", "身份证号输入错误请检查！");
        } else {
          this.formValue.rzdate = this.formData(this.formValue.rzdate);
          this.formValue.tfdate = this.formData(this.formValue.tfdate);
          let json = { ...this.formValue };
          json.lt = json.lt.join(",");
          let params = {
            json: JSON.stringify(json),
          };
          axios
            .get("https://yb.cfbond.com/ba/add_register", { params })
            .then((res) => {
              if (res.data.code === 200) {
                this.$router.push({
                  path: "./Ended",
                  query: {
                    success: true,
                    name: this.formValue.name,
                    sex: this.formValue.sex,
                  },
                });
              } else {
                MessageBox("", "报名失败");
              }
            })
            .catch((err) => {});
        }
      } else {
        for (const key in this.requireForm) {
          if (!this.formValue[key]) {
            if (this.$refs[key].$el) {
              this.$refs[key].$el.style.border = "1px solid #FF4747";
            } else {
              this.$refs[key].style.border = "1px solid #FF4747";
            }
          }
        }
        MessageBox("", "请检查输入内容是否正确！*为必填项");
      }
    },
    inputChange(ref) {
      if (this.$refs[ref].$el) {
        this.$refs[ref].$el.style.border = "none";
      } else {
        this.$refs[ref].style.border = "none";
      }
    },
  },
  mounted() {
    this.getForumList();
  },
};
</script>

<style lang="scss" scoped>
.register {
  background: url("~@/assets/img/introduction-bg.png");
  background-size: cover;
  padding-bottom: 2.66rem;
}
option {
  width: 100%;
  color: #000;
}
.form {
  width: 6.7rem;
  margin: 0.81rem auto;
}

.form-item {
  margin-bottom: 0.41rem;
  font-size: 0.28rem;
  font-family: PingFang SC;
  line-height: 0.56rem;
  color: #fff;

  .star {
    color: #ff4747;
  }

  input,
  select,
  .el-select,
  .el-select .el-input,
  .select-date {
    width: 6.7rem;
    height: 0.8rem;
    padding-left: 0.21rem;
    font-size: 0.3rem;
    font-family: PingFang SC;
    outline: none;
    border: none;
    border-radius: 0.08rem;
    color: #fff;
    background: rgba(134, 128, 128, 0.1);
  }

  .el-select {
    padding: 0;
  }

  input {
    font-size: 16px;
  }

  .select-date {
    line-height: 0.8rem;
    color: #fff;
    opacity: 0.4;
  }
}

.register-btn {
  width: 4.7rem;
  height: 0.88rem;
  margin: 0.25rem auto;
  line-height: 0.88rem;
  text-align: center;
  font-size: 0.34rem;
  font-family: PingFang SC;
  color: #0f3994;
  background: #00ddfe;
  border-radius: 0.08rem;
}
</style>