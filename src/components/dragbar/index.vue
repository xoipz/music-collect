<template>
  <div ref="dragbar" :style="stylerule()" class="row">
    <bar
      id="leftbar"
      :basedata="state.basedata"
      @updateView="updateView()"
      @changewidth="changewidth"
      dir="left"
      v-if="state.dir[3]"
      class="colbar leftbar"
    ></bar>

    <div class="col" ref="colbox">
      <bar
        id="topbar"
        :basedata="state.basedata"
        @updateView="updateView()"
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
        @updateView="updateView()"
        @changeheight="changeheight"
        dir="bottom"
        v-if="state.dir[2]"
        class="rowbar bottombar"
      ></bar>
    </div>

    <bar
      id="rightbar"
      :basedata="state.basedata"
      @updateView="updateView()"
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
  maxX: {
    type: [Number, String],
    default: -1,
  },
  maxY: {
    type: [Number, String],
    default: -1,
  },
  minX: {
    type: [Number, String],
    default: -1,
  },
  minY: {
    type: [Number, String],
    default: -1,
  },
});

const state = reactive({
  basedata: {//转入给bar的数值，要有延迟
    boxwidth: 0,
    boxheight: 0,
  },
  limit: { max: false, maxX: -1, maxY: -1, minX: 0, minY: 0 },
  dir: [false, false, false, false],
  // 实时的样式
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
  let width = Number(props.width);
  let height = Number(props.height);
  if (width !== -1) changewidth(width);
  if (height !== -1) changeheight(height);

  //获取限制条件
  state.limit.maxX = Number(props.maxX);
  state.limit.maxY = Number(props.maxY);
  state.limit.minX = Number(props.minX);
  state.limit.minY = Number(props.minY);
  state.limit.max = !(state.limit.maxX == -1 && state.limit.maxY == -1);

// 设置延时避免破坏布局
  setTimeout(() => {
    updateView();
  }, 200);
};

const updateView = () => {
  state.basedata = {
      ...state.basedata,
      boxwidth: dragbar.value.clientWidth,
      boxheight: dragbar.value.clientHeight,
    };

  let bol = false;
  if (state.dir[0] == true || state.dir[2] == true) {
    bol = Number(state.boxstyle.height.replace("px", "")) > 8;
  }
  if (state.dir[1] == true || (state.dir[3] == true && bol == false)) {
    bol = Number(state.boxstyle.width.replace("px", "")) > 8;
  }

  if (bol) {
    setTimeout(() => {
      changewidth(state.basedata.boxwidth);
      changeheight(state.basedata.boxheight);
      // console.log(dragbar.value.clientWidth, dragbar.value.clientHeight);
    }, 10);
  }
};

const changewidth = (num: number) => {
  record();
  let min = state.limit.minX;
  let max = state.limit.maxX;
  if (min <= num && num <= max) {
    // console.log("changewidth", num);
    state.boxstyle.width = num + "px";
  } else if (num <= min) {
    state.boxstyle.width = min + "px";
  } else if (max <= num) {
    state.boxstyle.width = max + "px";
  }
};
const changeheight = (num: number) => {
  record();
  let min = state.limit.minY;
  let max = state.limit.maxY;
  if (min <= num && num <= max) {
    // console.log("changeheight", num);
    state.boxstyle.height = num + "px";
  } else if (num <= min) {
    state.boxstyle.height = min + "px";
  } else if (max <= num) {
    state.boxstyle.height = max + "px";
  }
};
// 记录限制值(如果没有限制值)
const record = () => {
  if (!state.limit.max) {
    state.limit.maxX = document.body.clientWidth;
    state.limit.maxY = document.body.clientHeight;
  }
  // console.log(
  //   state.limit.minX,
  //   state.limit.maxX,
  //   state.limit.minY,
  //   state.limit.maxY
  // );
};

// const 



// 转化为样式的对象
const stylerule = () => {
  // console.log(state.boxstyle)
  type style = "width" | "height" | "padding";
  let style: Record<string, any> = { padding: "" };
  Object.keys(state.boxstyle).map((key) => {
    let value = state.boxstyle[key as style];
    // console.log(value)
    if (value !== "-1" && typeof value == "string") style[key] = value;
  });
  state.boxstyle.padding.forEach((pad: string) => {
    style.padding += pad + " ";
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
