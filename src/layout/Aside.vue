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

      <sheets></sheets>
    </div>

    
  </dragbar>
</template>

<script lang="ts" setup>

import { computed, onMounted, reactive, ref, watch } from "vue";

import { useUserStore } from "~/store/modules/user";
const drag = ref();

const store = { User: useUserStore() };




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

</style>
