<template>
  <div id="Home">
    <h1>Home</h1>
    <el-button @click="routerTo('Setting')"> Setting</el-button>
    <uploadfile></uploadfile>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useRouters } from "~/hooks/useRouters";
const { routerTo } = useRouters();

onMounted(() => {});
</script>

<style lang="scss" scoped>
#Home {
  height: 1000px;
}
</style>
