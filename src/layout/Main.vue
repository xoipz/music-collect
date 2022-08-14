<template>
  <div id="A-Main">
    <div style="flex: 1"></div>

    <dragbar dir="left" >
  <div >main2</div>
  </dragbar>
    <!-- <div class="ces" v-draggable>ces</div> -->
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
onMounted(() => {});
</script>

<style lang="scss" scoped>
#A-Main {
  display: flex;
  background-color: var(--color-4);
  flex: 1;
  position: relative;
}

.ces {
  flex: 1;
  height: 100px;
  background: var(--color-2);
  transition: all 0s;
}
</style>
