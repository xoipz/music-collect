<template>
  <dragbar ref="drag" :dir="['right']" width="200" min-x="70" max-x="200">
    <div id="A-Aside">
      <div class="logo">Music Coll</div>
      <div class="item">
        <el-icon class="icon"><Setting /></el-icon>
        <div v-if="drag?.getwidth() > 70" class="text">设置</div>
      </div>

      <div class="item">
        <el-icon class="icon"><Setting /></el-icon>
        <div v-if="drag?.getwidth() > 70" class="text">设置</div>
      </div>

      <div v-if="drag?.getwidth() > 70">-歌单-</div>
      <el-scrollbar v-if="drag?.getwidth() > 70" class="sheets">
        <div class="sheet" v-for="item in 10">123</div>
      </el-scrollbar>
    </div>
  </dragbar>
</template>

<script lang="ts" setup>
import { Setting } from "@element-plus/icons-vue";
import { onMounted, ref, watch } from "vue";
const drag = ref();
</script>

<style lang="scss" scoped>
#A-Aside {
  flex: 1;
  background: var(--color-3);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  

  .logo {
    width: 100%;
    height: 50px;
    background: var(--color-2);
    color: var(--font-theme);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }

  .item {
    width: 90%;
    height: 50px;
    background: var(--color-2);
    margin: 4px 0;
    padding: 0 4px;
    border-radius: 4px;
    line-height: 50px;
    display: flex;
    align-items: center;
    cursor: pointer;
    

    &:hover {
      background: var(--color-0);
      color: var(--font-theme);
    }
    .icon {
      margin: auto;
    }

    .text {
      flex: 1;
    }
  }
}

.sheets {
  width: 100%;
  flex: 1;
  padding: 10px 0 0 0;
  display: flex;
  flex-direction: column;
  background: var(--color-2);

  .sheet {
    height: 80px;
    width: 90%;
    margin: auto;
    background: #fff;
    overflow: hidden;
    padding: 4px;
    border-radius: 4px;
    margin: 10px auto;
    cursor: pointer;
  }
}
</style>
