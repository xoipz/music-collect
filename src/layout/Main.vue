<template>
  <div id="A-Main">
    
    <div style="flex: 1;">main</div>
    <dragbar dir="top" >
  <div >main2</div>
  </dragbar>
    <!-- <div class="ces" v-draggable>ces</div> -->

    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
#A-Main {
  display: flex;
  flex-direction: column;
  background-color: var(--color-4);
  flex: 1;
  position: relative;
}

.ces{
  flex: 1;
  height: 100px;
  background: var(--color-2);
  transition:all 0s;
}
</style>
