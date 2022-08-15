<template>
  <dragbar :dir="['left']" width="8" max-x="300">
    <div id="A-RightSide">RightSide</div>
  </dragbar>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
#A-RightSide {
  flex: 1;
  background: var(--color-3);
}
</style>
