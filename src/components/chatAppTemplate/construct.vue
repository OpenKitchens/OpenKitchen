<script setup lang="ts">
import channelAbout from "./channelAbout/construct.vue"
import channelList from './channelList/construct.vue'
import headerView from './headerView/construct.vue'
import mainView from './mainView/construct.vue'
</script>
<template>
  <headerView />
  <div class="colomun">
    <channelList />
    <mainView />
    <channelAbout />
  </div>
</template>

<style scoped>
.colomun{
  display: flex;
  height: calc(100% - 50px);
}
headerView{
  z-index: 2;
}
channelList{
  z-index: 1;
}
mainView{
  z-index: 0;
}
</style>