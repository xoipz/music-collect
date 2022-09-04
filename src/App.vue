<template>
  <div id="App">
    <div class="A-row">
      <Aside></Aside>
      <div class="A-col">
        <Header></Header>
        <div class="A-row">
          <Main></Main>
          <RightSide></RightSide>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts" setup>
import Aside from "~/layout/Aside.vue";
import Header from "~/layout/Header.vue";
import Main from "~/layout/Main.vue";
import Footer from "~/layout/Footer.vue";
import RightSide from "~/layout/RightSide.vue";

import { ref, reactive, onMounted, computed } from "vue";
import { test } from "~/api/api";

onMounted(() => {
  test().then((res: any) => {
    console.log(res);
  });
});
</script>

<style lang="scss" scoped>
#App {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  min-width: 800px;
  min-height: 500px;
  overflow: hidden;
  background: var(--bg);
}

.A-row {
  display: flex;
  flex-direction: row;
  flex: 1;
  overflow: hidden;
}

.A-col {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
}
</style>

<!-- 全局布局 -->
<style lang="scss">
* {
  transition: background 0.2s;
  -moz-user-select: none;
  -o-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.sel{
  -moz-user-select:text;
  -o-user-select: text;
  -khtml-user-select: text;
  -webkit-user-select: text;
  -ms-user-select: text;
  user-select: text;
}

// 滑动条
body {
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background: var(--color-4);
  }
  &::-webkit-scrollbar-thumb {
    background: var(--color-2);
    border-radius: 2px;
  }
}

body {
  // 背景色
  --bg: #fff;

  // 字体色
  --font-theme: #fff;
  --font-theme-grey: #959494;
  --font-retheme: #000;

  // 主题色
  --color--1: #49b5fd;
  --color-0: #6ac3ff;
  --color-1: #62c0ff;
  --color-2: #98d4fb;
  --color-3: #b7e2ff;
  --color-4: #cde9fb;
}

// body{
//   //背景色
//   --bg:#3d3d3d;

//   // // 字体色
//   --font-theme: #000;
//   --font-theme-grey: #959494;
//   --font-retheme: #fff;

//   //主题色
//   --color--1: #000000;
//   --color-0: #505050;
//   --color-1: #727272;
//   --color-2: #969696;
//   --color-3: #e1e1e1;
//   --color-4: #ffffff;

// }
</style>
