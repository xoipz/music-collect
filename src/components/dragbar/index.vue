<template>
  <div ref="dragbar" :style="stylerule()" class="row">
    <bar
      id="leftbar"
      :basedata="state.basedata"
      @updateinfo="updateinfo()"
      @changewidth="changewidth"
      dir="left"
      v-if="state.dir[3]"
      class="colbar leftbar"
    ></bar>

    <div class="col" ref="colbox">
      <bar
        id="topbar"
        :basedata="state.basedata"
        @updateinfo="updateinfo()"
        @changeheight="changeheight"
        dir="top"
        v-if="state.dir[0]"
        class="rowbar topbar"
      ></bar>
      <slot></slot>
      <!-- <div>{{state}}</div> -->
      <bar
        id="bottombar"
        :basedata="state.basedata"
        @updateinfo="updateinfo()"
        @changeheight="changeheight"
        dir="bottom"
        v-if="state.dir[2]"
        class="rowbar bottombar"
      ></bar>
    </div>

    <bar
      id="rightbar"
      :basedata="state.basedata"
      @updateinfo="updateinfo()"
      @changewidth="changewidth"
      dir="right"
      v-if="state.dir[1]"
      class="colbar rightbar"
    ></bar>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";
import bar from "./bar.vue";
import { provide } from "vue"

const dragbar = ref();
const colbox = ref();

const props = defineProps({
  dir: {
    type: [String, Array],
    default: () => {
      return [] as string[];
    },
  },

  width: {
    type: [String, Number],
    default: -1,
  },

  height: {
    type: [String, Number],
    default: -1,
  },
}); // 对象形式声明 props

const state = reactive({
  basedata: {
    boxwidth: 0,
    boxheight: 0,
  },
  width: -1,
  height: -1,
  dir: [false, false, false, false],
  boxstyle: {
    width: "-1",
    height: "-1",
    padding: ["0px", "0px", "0px", "0px"],
  },
});


onMounted(() => {
  init();
});

const init = () => {
  type dirs = "left" | "right" | "top" | "bottom";
  type dir = dirs[] | dirs;
  const dirs = {
    top: 0,
    right: 1,
    bottom: 2,
    left: 3,
  };

  // 获取需要改变的方向，并开启拖框
  const dir = props.dir as dir;

  if (typeof dir == "string") {
    state.dir[dirs[dir]] = true;
    state.boxstyle.padding[dirs[dir]] = "8px";
  } else {
    dir.forEach((dirname) => {
      state.dir[dirs[dirname]] = true;
      state.boxstyle.padding[dirs[dirname]] = "8px";
    });
  }

  // 获取盒子长宽
  state.width = Number(props.width);
  state.height = Number(props.height);
  if (state.width !== -1) state.boxstyle.width = state.width + "px";
  if (state.height !== -1) state.boxstyle.height = state.height + "px";

  setTimeout(() => {
    updateinfo()
    // console.log(state.basedata,colbox.value.clientWidth,colbox.value.clientHeight)
  }, 10);

};

const updateinfo=()=>{
  state.basedata = {
      boxwidth: colbox.value.clientWidth,
      boxheight: colbox.value.clientHeight,
    };
}

const changewidth = (num: number) => {
  // console.log("changewidth",num)
  state.boxstyle.width = num + "px";
};

const changeheight = (num: number) => {
  // console.log("changeheight",num)
  state.boxstyle.height = num + "px";
};

const stylerule = () => {
  type style = "width" | "height" | "padding";
  let style: Record<string, any> = { padding: "" };
  Object.keys(state.boxstyle).map((key) => {
    if (
      state.boxstyle[key as style] !== "-1" &&
      typeof state.boxstyle[key as style] == "string"
    )
      style[key] = state.boxstyle[key as style];
  });

  state.boxstyle.padding.forEach((mar: string) => {
    style.padding += mar + " ";
  });
  // console.log(style)
  return style;
};
</script>

<style lang="scss" scoped>
.row {
  position: relative;
  display: flex;
  transition: all 0s;
  overflow: hidden;

  .colbar {
    width: 8px;
    display: flex;
    flex-direction: column;
    &:hover {
      cursor: col-resize;
    }
  }
}

.col {
  display: flex;
  flex: 1;
  flex-direction: column;

  .rowbar {
    height: 8px;
    &:hover {
      cursor: row-resize;
    }
  }
}

.leftbar {
  height: 100%;
  left: 0px;
}

.rightbar {
  height: 100%;
  right: 0px;
}

.topbar {
  width: 100%;
  top: 0px;
}

.bottombar {
  width: 100%;
  bottom: 0px;
}
</style>
