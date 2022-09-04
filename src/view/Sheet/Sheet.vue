<template>
  <div id="Sheet" class="sel">
    <div class="header"></div>
    <h1>sheetname:{{state.sheetdata.sheetname}}</h1>
    <h3>describe:{{state.sheetdata.describe}}</h3>
    id:{{ state.sheetdata.id }}
  </div>
  <div class="body">
    <Songlist></Songlist>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, onBeforeUpdate } from "vue";
import { useRouters } from "~/hooks/useRouters";
import Songlist from "./components/songlist.vue";
const { routeGet } = useRouters();

const state = reactive({
  sheetdata: {
    type: "",
    sheetname: "",
    sheetimg: "",
    describe:"",
    creater: "",
    authorid: [],
    id: "",
  },
});

onMounted(() => {
  state.sheetdata = { ...routeGet() };
});

onBeforeUpdate(() => {
  state.sheetdata = { ...routeGet() };
});
</script>

<style lang="scss" scoped>
#Sheet {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  .header{
    display: flex;
  }
  .body{

  }
}
</style>
