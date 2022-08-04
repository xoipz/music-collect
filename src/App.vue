<template>
  <div id="App">
    <div class="row">
      <Aside></Aside>
      <div class="col">
        <Header></Header>
        <Main></Main>
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

import { ref, reactive, onMounted, computed } from "vue";
</script>

<style lang="scss" scoped>
#App {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  min-width: 800px;
  min-height: 600px;
}

.row {
  display: flex;
  flex: 1;
}

.col {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>


<!-- 全局布局 -->
<style lang="scss">
* {
  -moz-user-select: none;
  -o-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: all 0.2s;
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
  // // 主题色
  --font-theme: #fff;
  --font-theme-grey: #959494;
  --font-retheme: #000;
  --color-0: #36aeff;
  --color-1: #62c0ff;
  --color-2: #98d4fb;
  --color-3: #b7e2ff;
  --color-4: #cde9fb;
  --aside-bg: #e9f7ff;

  --page-0: #fff;
  --page-1: rgba(255, 255, 255, 0.84);
  --page-2: rgba(255, 255, 255, 0.7);
  --box-bg-1: rgba(255, 255, 255, 0.94);
  --box-bg-2: rgba(255, 255, 255, 0.7);

  //暗色
  // --font-theme: #fff;
  // --font-retheme: #000;
  // --color-0: #000000;
  // --color-1: #2d2d2d;
  // --color-2: #454545;
  // --color-3: #c8c8c8;
  // --color-4: #ffffff;

  // --page-0: rgb(0, 0, 0);
  // --page-1: rgba(53, 53, 53, 0.84);
  // --page-2: rgba(170, 170, 170, 0.7);
  // --box-bg-1: rgba(12, 12, 12, 0.94);
  // --box-bg-2: rgba(88, 88, 88, 0.7);
}
</style>
