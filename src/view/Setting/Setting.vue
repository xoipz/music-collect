<template>
  <div class="page">
    <div class="title"  @click="routerTo('file')">设置</div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { data as Setting } from "~/assets/control/ts/setting";
import { useLocaljson } from "~/hooks/useLocaljson";
import { useRouters } from "~/hooks/useRouters";
const { Change } = useLocaljson();
const { routerTo } = useRouters();

onMounted(() => {
  Setting.ces = true;
  Change();
});
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
}

.title {
}
</style>
