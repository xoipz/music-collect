<template>
  <dragbar ref="drag" :dir="['right']" width="200" min-x="60" max-x="200">
    <div id="A-Aside">
      <div class="logo">
        <div v-if="drag?.getwidth() > 90">Music Collect</div>
        <img
          class="img"
          v-if="drag?.getwidth() <= 90"
          src="./../assets/image/music.svg"
        />
      </div>

      <div class="item" @click="routerTo('Home')">
        <img class="icon" src="./../assets/image/home.svg" />
        <div v-if="drag?.getwidth() > 90" class="text">主页</div>
      </div>

      <div class="item " @click="routerTo('Setting')">
        <img class="icon" src="./../assets/image/setting.svg" />
        <div v-if="drag?.getwidth() > 90" class="text">设置</div>
      </div>

      <div class="" v-if="drag?.getwidth() > 90">-歌单-</div>
      <el-scrollbar v-if="drag?.getwidth() > 90" class="sheets">
        <div class="sheet" v-for="(item,index) in 10">{{index}}</div>
      </el-scrollbar>
    </div>
  </dragbar>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import { useRouters } from "~/hooks/useRouters";
const { routerTo } = useRouters();
const drag = ref();
</script>

<style lang="scss" scoped>
#A-Aside {
  flex: 1;
  background: var(--color-3);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  .logo {
    width: 100%;
    height: 50px;
    background: var(--color-2);
    color: var(--font-theme);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2px;
  }

  .img {
    height: 60%;
  }

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
}

.sheets {
  width: 100%;
  flex: 1;
  padding: 10px 0 0 0;
  display: flex;
  flex-direction: column;
  background: var(--color-2);

  .sheet {
    height: 80px;
    width: 90%;
    margin: auto;
    background: #fff;
    overflow: hidden;
    padding: 4px;
    border-radius: 4px;
    margin: 10px auto;
    cursor: pointer;
  }
}
</style>
