<template>
  <div class="item" @click="routerTo(props.view)">
    <img class="icon" :src="props.src" />
    <div class="text" v-if="props.width>90">{{ name }}</div>
  </div>
</template>

<script lang="ts" setup>
import { useRouters } from "~/hooks/useRouters";
const { routerTo } = useRouters();

//获取props
const props = defineProps({
  src: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  view: {
    type: String,
    default: "",
  },
  width:{
    type:Number,
    default:100
  }
}); // 对象形式声明 props
</script>

<style lang="scss" scoped>
.item {
  width: 90%;
  height: 50px;
  background: var(--color-2);
  margin: 2px 0;
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
    height: 28px;
  }

  .text {
    margin-left: 10px;
    flex: 1;
  }
}
</style>
