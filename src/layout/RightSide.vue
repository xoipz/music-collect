<template>
  <dragbar :dir="['left']" width="200">
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
