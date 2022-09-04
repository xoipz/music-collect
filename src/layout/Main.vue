<template>
  <div id="A-Main">
    <!-- <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
      <el-breadcrumb-item>promotion management</el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb> -->



    <el-scrollbar class="M-scrollbar">
      <router-view></router-view>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { ArrowRight } from "@element-plus/icons-vue";
onMounted(() => {});
</script>

<style lang="scss" scoped>
#A-Main {
  display: flex;
  flex-direction: column;
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
  overflow: hidden;
}
</style>
