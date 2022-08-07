<template>
  <dragbar :dir="['right']" width="200"  max-x="600">
    <div id="A-Aside">Aside</div>
  </dragbar>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
#A-Aside {
  flex: 1;
  background: var(--color-3);
}
</style>
