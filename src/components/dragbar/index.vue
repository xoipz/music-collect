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
// 右bar有问题，关于盒子宽度限制
import { onMounted, reactive, ref, toRef } from "vue";
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
    default: 8,
  },

  minY: {
    type: [Number, String],
    default: 8,
  },
});

const state = reactive({
  basedata: {
    //转入给bar的数值，要有延迟
    boxwidth: 0,
    boxheight: 0,
    boxleft: 0,
  },
  limit: { max: false, maxX: -1, maxY: -1, minX: 0, minY: 0 },
  dir: [false, false, false, false],
  boxstyle: {
    // 实时的样式
    width: "-1",
    height: "-1",
    // padding: ["0px", "0px", "0px", "0px"],
  },
});

let width = toRef(state.boxstyle, "width");
let height = toRef(state.boxstyle, "height");

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
  } else {
    dir.forEach((dirname) => {
      state.dir[dirs[dirname]] = true;
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
  let bol = false;
  const width = Number(state.boxstyle.width.replace("px", ""));
  const height = Number(state.boxstyle.height.replace("px", ""));
  state.basedata = {
    ...state.basedata,
    boxwidth: width<=-1?colbox.value.offsetWidth:width,
    boxheight: colbox.value.offsetHeight,
    boxleft: dragbar.value.offsetLeft,
  };

  

  const direction = getdirection();
  if (direction == 1 || direction == 3) {
    bol = height > 8;
  }
  if (bol == false && (direction == 2 || direction == 3)) {
    bol = width > 8;
  }
  // console.log("width",width)

  if (bol) {
    setTimeout(() => {
      // console.log("updateView");
      if (width < state.basedata.boxwidth && props.width != -1)
        changewidth(state.basedata.boxwidth);
      if (height < state.basedata.boxheight && props.height != -1)
        changeheight(state.basedata.boxheight);
      // console.log(dragbar.value.clientWidth, dragbar.value.clientHeight);
    }, 10);
  }
};

const getdirection = () => {
  let result = 0;
  if (props.dir[0] || props.dir[2]) {
    result += 1;
  }
  if (props.dir[1] || props.dir[3]) {
    result += 2;
  }
  return result;
  //0:无,1:上下,2:左右,3::全部
};

const changewidth = (num: number) => {
  record();
  let min = state.limit.minX;
  console.log(min)
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

// 转化为样式的对象
const stylerule = () => {
  // console.log(state.boxstyle)
  type style = "width" | "height"; //| "padding"
  let style: Record<string, any> = {}; // padding: ""
  Object.keys(state.boxstyle).map((key) => {
    let value = state.boxstyle[key as style];
    // console.log(value)
    if (value !== "-1" && typeof value == "string") style[key] = value;
  });
  // state.boxstyle.padding.forEach((pad: string) => {
  //   style.padding += pad + " ";
  // });
  // console.log(style)
  return style;
};

// 暴露方法，变量
defineExpose({
  width,
  height,
});
</script>

<style lang="scss" scoped>
.row {
  position: relative;
  display: flex;
  transition: width 0s;
  transition: height 0s;
  overflow: hidden;

  .colbar {
    width: 8px;
    display: flex;
    flex-direction: column;
    &:hover {
      cursor: ew-resize;
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
      cursor: ns-resize;
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
