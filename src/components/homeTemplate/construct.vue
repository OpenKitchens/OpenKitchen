<script setup lang="ts">
import sidebarView from "./sidebarView/construct.vue"
import Bolt from "./bolt/construct.vue"
</script>

<template>
  <div class="colomun">
    <sidebarView />
    <div class="main">
      <Bolt />
    </div>
  </div>
</template>

<style scoped>
.colomun{
  display: flex;
  height: calc(100% - 50px);
}
sidebarView{
  z-index: 1;
}
.main{
  z-index: 0;
}
</style>