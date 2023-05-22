<script setup lang="ts">
import { usechatAppDataStore } from "@/stores/chatAppData"
const store = usechatAppDataStore()
</script>
<template>
  <div v-for="channelList in store.channelList">
    <span>{{ channelList.category }}</span>
    
    <div v-for="data in channelList.data">
      <div class="icon">{{ data.channelIcon }}</div>
      <div class="title">{{ data.channelTitle }}</div>
    </div>
  </div>
</template>