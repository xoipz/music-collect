<template>
  <dragbar ref="drag" :dir="['right']" width="200"  max-x="200">
    <div id="A-Aside">
      <div class="logo">Music Collect</div>
      <div class="item">
        <el-icon class="icon"><Setting /></el-icon>
        <div v-if="getwidth()>80" class="text">设置</div>
        <!-- <div v-if="getwidth()>80" >{{drag?.width}}</div> -->
      </div>
    </div>
  </dragbar>
</template>

<script lang="ts" setup>
import { Setting } from "@element-plus/icons-vue";
import { onMounted, ref,watch } from "vue";
const drag = ref()

const getwidth=()=>{
  if(drag.value&&drag.value.width)
    return Number(drag.value.width.replace("px", ""))
  return -1
}


</script>

<style lang="scss" scoped>
#A-Aside {
  flex: 1;
  background: var(--color-3);
  display: flex;
  flex-direction: column;
  align-items: center;

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
</style>
