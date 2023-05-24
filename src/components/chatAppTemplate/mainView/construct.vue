<script setup lang="ts">
import messageView from "./messageView/construct.vue"
import textControl from "./textControl/construct.vue"
</script>
<template>
  <div>
    <messageView />
    <textControl />
  </div>
</template>

<style scoped>
div {
  flex-flow: column;
  min-width: calc(100vw - 500px);
  width: 60vw;
}
</style>