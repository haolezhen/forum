<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  min-height: 100%;
  background-color: #1d2088;
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

.register .el-select { 
  background: transparent !important;
}

.register .el-input__inner {
  height: 0.8rem;
  font-size: 0.3rem;
  font-family: PingFang SC;
  background-color: rgba(134, 128, 128, 0.1);
  border: none;
  color: #fff;
}
</style>
