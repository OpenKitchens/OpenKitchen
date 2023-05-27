<script setup lang="ts">
import { usechatAppDataStore } from "@/stores/chatAppData"
const store = usechatAppDataStore()
</script>
<template>
  <div class="channelList">
  <div v-for="channelList in store.channelList">
    <div class="spaceControl">
      <span>{{ channelList.category }}</span>
    
      <div v-for="data in channelList.data" class="channel">
        <div class="icon">{{ data.channelIcon }}</div>
        <div class="title">{{ data.channelTitle }}</div>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
.channelList{
  background-color: rgb(235, 235, 235);
  width: 20vw;
  min-width: 250px;
  height: 100%;
  margin: 0;
}
.spaceControl{
  display: inline-block;
  margin-left: 10px;
}
span{
  margin: 20px 20px 2px 15px;
  display: inline-block;
  font-size: 12px;
}
.channel{
  display: flex;
  margin:  5px 20px;
  color: #d9d9d9;
}
.icon{
  margin: 0 5px;
  color: #000;
}
.title{
  color: #000;
}

@media (prefers-color-scheme: dark) {
  .channelList{
    background-color: rgb(27, 27, 27);
    color: #fff;
  }
  .icon{
    color: #fff;
  }
  .title{
    color: #fff;
  }
}
</style>