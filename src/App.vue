<template>
<div>{{msg}}</div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, computed } from "vue";



const msg = ref("Hello World");

</script>

<style lang="scss">
#app {
  text-align: center;
}

.element-plus-logo {
  width: 50%;
}
</style>
