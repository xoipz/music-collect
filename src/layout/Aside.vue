<template>
  <dragbar ref="drag" :dir="['right']" width="200" min-x="60" max-x="200">
    <div id="A-Aside">
      <div class="logo">
        <div v-if="drag?.getwidth() > 90">Music Collect</div>
        <img
          class="img"
          v-if="drag?.getwidth() <= 90"
          src="src/assets/image/music.svg"
        />
      </div>

      <asideitem
        src="src/assets/image/home.svg"
        name="主页"
        view="Home"
        :width="drag?.getwidth()"
      ></asideitem>

      <asideitem
        src="src/assets/image/setting.svg"
        name="设置"
        view="Setting"
        :width="drag?.getwidth()"
      ></asideitem>

      <!-- TODO 封装成单独的组件 -->
      <div class="" v-if="drag?.getwidth() > 90">-歌单-</div>
      <el-scrollbar v-if="drag?.getwidth() > 90" class="sheets">
        <div class="sheet" v-for="(item, index) in 10">{{ index }}</div>
        <div class="sheet" @click="addsheet()">add</div>
        <!-- <el-button @click="ces()"></el-button> -->
      </el-scrollbar>
      <!-- TODO 封装成单独的组件 -->
    </div>

    <el-dialog title="添加歌单" v-model="state.dialog.show">123</el-dialog>
  </dragbar>
</template>

<script lang="ts" setup>
import { computed, onMounted, reactive, ref, watch } from "vue";
const drag = ref();

const state = reactive({
  dialog: {
    show: false,
  },
});

const addsheet = () => {
  state.dialog.show = true;
};
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
    cursor: pointer;

    &:hover {
      background: var(--color-0);
    }
  }

  .img {
    height: 60%;
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
