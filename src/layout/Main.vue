<template>
  <div id="A-Main">
    <el-scrollbar class="M-scrollbar">
      <router-view></router-view>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
onMounted(() => {});
</script>

<style lang="scss" scoped>
#A-Main {
  display: flex;
  // background-color: var(--color-4);
  flex: 1;
  position: relative;
}

.ces {
  flex: 1;
  height: 100px;
  background: var(--color-2);
  transition: all 0s;
}

.M-scrollbar {
  padding: 10px;
  flex: 1;
}
</style>
