<template>
  <div class="bar" ref="bar">
    <div class="movebar"></div>
    <div class="movebar"></div>
    <div class="movebar"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, watch } from "vue";

const bar = ref();


//获取props
const props = defineProps({
  basedata: {
    type: Object,
    required: true,
  },
  maxX: {
    type: [Number, String],
    default: -1,
  },
  maxY: {
    type: [Number, String],
    default: -1,
  },
  dir: {
    tyoe: String,
    default: "null",
  },
});

const state = reactive({
  dir: "null", //方向
  num: 0, //bar相对盒子的距离
  boxwidth: 0, //盒子的宽度,TODO:响应
  boxheight: 0, //盒子的高度
  max: false,
  maxX: 0,
  maxY: 0,
  renum:0,
});

onMounted(() => {
  init();
  binding();
});

watch(
  () => props.basedata,
  (newData) => {
    // console.log("watch",newData)
	state.boxwidth = newData.boxwidth
  state.boxheight = newData.boxheight
  }
);


const init = () => {
  //获取props
  state.max = !(props.maxX == -1 && props.maxY == -1);
  state.maxX = Number(props.maxX);
  state.maxY = Number(props.maxY);
  state.dir = props.dir;
  state.boxwidth = props.basedata.boxwidth;
  state.boxheight = props.basedata.boxheight;
};

const isrow = () => {
  return state.dir == "left" || state.dir == "right";
};

const binding = () => {
  // 鼠标按下
  bar.value.onmousedown = (e: { pageX: number; pageY: number }) => {
    /*
     *e.pageX : 鼠标的绝对x
     *bar.value.offsetLeft：元素左边的绝对x
     *document.body.clientWidth:页面绝对width
     */

    // 记录鼠标与元素绝对点的距离
    let dis = isrow()
      ? e.pageX - bar.value.offsetLeft
      : e.pageY - bar.value.offsetTop;

    // 记录max值
    if (!state.max) {
      state.maxY = document.body.clientHeight;
      state.maxX = document.body.clientWidth;
    }
    let max = isrow() ? state.maxX : state.maxY;

    // 鼠标移动
    document.onmousemove = (e) => {
      // 正向变化（下、右）
      if (state.dir == "bottom" || state.dir == "right") {
        // 移动数值
      state.num = (isrow() ? e.pageX : e.pageY) - dis;
        if (state.num < -8) state.num = -8;
        if (state.num > max) state.num = max;
        // console.log(state.num)
      }

      //反向变化（上、左）
      if (state.dir == "top" || state.dir == "left") {
        state.renum = (isrow() ? e.pageX : e.pageY) - dis
        // console.log(state.renum)
      }

      change();
    };

    document.onmouseup = () => {
    // console.log("up")
    emits("updateinfo")
    document.onmousemove = null;
  };
  };

  
};



const change = () => {
  switch (state.dir) {
    case "top":
      emits("changeheight",state.boxheight - state.renum);
      break;
    case "right":
      emits("changewidth", state.num);
      break;
    case "bottom":
      emits("changeheight", state.num);
      break;
    case "left":
      emits("changewidth", state.boxwidth - state.renum);
      break;
  }
};

// 注册方法
const emits = defineEmits(["changewidth", "changeheight","updateinfo"]);
</script>

<style lang="scss" scoped>
.bar {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0s;

  background: var(--color-3);
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
