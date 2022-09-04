<template>
  <div id="Sheet" class="sel">
    <h1>Sheet</h1>
    {{ state.sheetdata }}
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, onUpdated } from "vue";
import { useRouters } from "~/hooks/useRouters";
const { routeGet } = useRouters();

const state = reactive({
  sheetdata: {
    type: "",
    sheetname: "",
    sheetimg: "",
    creater: "",
    authorid: [],
    id: "",
  },
});

onMounted(() => {
  state.sheetdata = { ...routeGet() };
  console.log(routeGet());
});

onUpdated(() => {
  state.sheetdata = { ...routeGet() };
  console.log(routeGet());
});
</script>

<style lang="scss" scoped>
#Sheet {
  // height: 1000px;
}
</style>
