<template>
  <div id="Sheet" class="sel">
    <!-- 查询能不能节省路由 -->
    <div class="header"></div>
    <h1 v-mouse-menu="options">sheetname:{{ state.sheetdata.sheetname }}</h1>
    <h3>describe:{{ state.sheetdata.describe }}</h3>
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

const options = {
  useLongPressInMobile: true,
  menuWrapperCss: {
    background: "#ffffff",
    boxShadow: "0 0 10px #ccc",
    borderRadius: "4px",
    padding: "5px",
  },
  menuItemCss: {
    labelColor: "#000",
    tipsColor: "#707070",
    arrowColor: "#707070",
    disabledColor: "#d6d6d6",
    hoverBackground: "#d6d6d6",
  },
  menuList: [
    {
      label: "刷新",
      tips: "Refresh",
      fn: (...args: []) => console.log("open", args),
    },
    {
      label: "查看",
      tips: "Check",
      fn: (...args: []) => console.log("open", args),
      disabled: () => true,
    },
    {
      line: true,
    },
    {
      label: "操作",
      tips: "Operation",
      children: [
        {
          label: "打开",
          tips: "Open",
          fn: (...args: []) => console.log("open", args),
        },
        {
          label: "编辑",
          tips: "Edit",
          disabled: () => true,
          fn: (...args: []) => console.log("open", args),
        },
        {
          label: "删除",
          tips: "Delete",
          fn: (...args: []) => console.log("open", args),
        },
        {
          label: "重命名",
          tips: "Rename",
          fn: (...args: []) => console.log("open", args),
          hidden: () => true,
        },
      ],
    },
    {
      label: "设置",
      tips: "Setting",
    },
  ],
};

const state = reactive({
  sheetdata: {
    type: "",
    sheetname: "",
    sheetimg: "",
    describe: "",
    creater: "",
    authorid: [],
    id: "",
  },
});

onMounted(() => {
  state.sheetdata = { ...routeGet() };
});

onBeforeUpdate(() => {
  //获取路由信息
  state.sheetdata = { ...routeGet() };
  console.log("Update");
});
</script>

<style lang="scss" scoped>
#Sheet {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .header {
    display: flex;
  }
}
</style>
