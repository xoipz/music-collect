<template>
  <dragbar :dir="['top']" height="80" min-y="60" max-y="150">
    <div id="A-Footer" >Footer</div>
  </dragbar>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
#A-Footer {
  width: 100%;
  flex: 1;
  background-color: var(--color-2);
}
</style>
