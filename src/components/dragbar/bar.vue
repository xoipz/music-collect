<template>
  <div
    ref="bar"
    :class="isdeep() ? 'deepbar' : 'bar'"
    @mousedown="down"
    @click="clickbar()"
  >
    <div class="movebar"></div>
    <div class="movebar"></div>
    <div class="movebar"></div>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage } from "element-plus/es";
import { onMounted, reactive, ref, watch } from "vue";

const bar = ref();

const ces = () => {
  ElMessage({ type: "error", message: "ces" });
};

//获取props
const props = defineProps({
  basedata: {
    type: Object,
    required: true,
  },
  dir: {
    tyoe: String,
    default: "null",
  },
});

const state = reactive({
  dir: "null", //方向
  num: 0, //bar相对盒子的距离
  renum: 0,
  boxstyle: {
    width: 0, //盒子的宽度
    height: 0, //盒子的高度
  },

  max: false, //是否设置限制条件
  min: false,
  minX: 0,
  minY: 0,
  maxX: 0,
  maxY: 0,
});

onMounted(() => {
  init();
  // binding();
});

watch(
  () => props.basedata,
  (newData) => {
    state.boxstyle.width = newData.boxwidth;
    state.boxstyle.height = newData.boxheight;
  }
);

const isdeep = () => {
  return isrow() ? state.boxstyle.width <= 8 : state.boxstyle.height <= 8;
};

const init = () => {
  //获取props
  state.dir = props.dir;
  state.boxstyle.width = props.basedata.boxwidth;
  state.boxstyle.height = props.basedata.boxheight;
  // console.log(JSON.parse(JSON.stringify(state)));
};

const isrow = () => {
  return state.dir == "left" || state.dir == "right";
};

/*
 *e.pageX :鼠标的绝对x
 *bar.value.offsetLeft :元素左边的绝对x
 *document.body.clientWidth :页面绝对width
 */
const down = (e: any) => {
  // 鼠标按下
  emits("updateView");

  // 记录鼠标与元素绝对点的距离
  const dis = isrow()
    ? e.pageX - bar.value.offsetLeft
    : e.pageY - bar.value.offsetTop;

  const left = e.pageX;
  // console.log(e.pageX);

  // 鼠标移动
  document.onmousemove = (e) => move(e, dis, left);
  document.onmouseup = () => up();

  // console.log()
  // document.ontouchmove = (e) => ces()
  // document.ontouchend = () => ces()
};

const move = (e: any, dis: number, left: number) => {
  // 正向变化（下、右）
  if (state.dir == "bottom" || state.dir == "right")
    state.num = (isrow() ? e.pageX : e.pageY) - dis; // 移动数值

  //反向变化（上、左）
  if (state.dir == "top") state.renum = e.pageY - dis; // 移动数值

  if (state.dir == "left") state.renum = e.pageX - left; // 移动数值

  // clientWidth - left

  // console.log(state.renum, e.pageX, left, bar.value.offsetLeft);
  //左需要单独计算

  change();
};

const up = () => {
  // console.log("up");
  emits("updateView");

  // 按钮
  document.onmousemove = document.onmouseup = null;
  document.ontouchmove = document.ontouchend = null;
};

const binding = () => {
  // console.log(bar.value.touchstart)
  // 鼠标按下
  bar.value.onmousedown = (e: any) => {
    // console.log("onmousedown");
    emits("updateView");
    /*
     *e.pageX :鼠标的绝对x
     *bar.value.offsetLeft :元素左边的绝对x
     *document.body.clientWidth :页面绝对width
     */

    // 记录鼠标与元素绝对点的距离
    let dis = isrow()
      ? e.pageX - bar.value.offsetLeft
      : e.pageY - bar.value.offsetTop;

    // 鼠标移动
    document.onmousemove = (e) => {
      // 正向变化（下、右）
      if (state.dir == "bottom" || state.dir == "right")
        state.num = (isrow() ? e.pageX : e.pageY) - dis; // 移动数值

      //反向变化（上、左）
      if (state.dir == "top" || state.dir == "left")
        state.renum = (isrow() ? e.pageX : e.pageY) - dis; // 移动数值

      change();
    };

    document.onmouseup = () => {
      // console.log("up");
      emits("updateView");
      document.onmousemove = document.onmouseup = null;
    };
  };
};

const change = () => {
  switch (state.dir) {
    case "top":
      emits("changeheight", state.boxstyle.height - state.renum);
      break;
    case "right":
      emits("changewidth", state.num + 8);
      break;
    case "bottom":
      emits("changeheight", state.num + 8);
      break;
    case "left":
      emits("changewidth", state.boxstyle.width - state.renum);
      break;
  }
};

const clickbar = () => {
  // console.log("clickbar");
};

// 注册方法
const emits = defineEmits(["changewidth", "changeheight", "updateView"]);
</script>

<style lang="scss" scoped>
.bar {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  // transition: all 0s;
  // background: var(--color-3);
  &:hover {
    .movebar {
      background: var(--color-4);
    }
    background: var(--color-1);
  }
}

.deepbar {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  background: var(--color-3);
  .movebar {
    background: var(--color-0);
  }
  &:hover {
    .movebar {
      background: var(--color-4);
    }
    background: var(--color-1);
  }
}

.movebar {
  width: 4px;
  height: 2px;
  background: var(--color-1);
  margin: 2px;
}
</style>
