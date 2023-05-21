<script setup lang="ts">
import { usechatAppDataStore } from "@/stores/chatAppData"
const store = usechatAppDataStore()

import channelTitle from "./channelList/channelTitle.vue"
import category from "./channelList/category.vue"
import channelIcon from "./channelList/channelIcon.vue"
import channelListChild from "./channelList/channelListChild.vue"
</script>
<template>
  <category v-for="channelList in store.channelList">
    <span>{{ channelList.category }}</span>
    
    <channelListChild v-for="data in channelList.data">
      <channelIcon>{{ data.channelIcon }}</channelIcon>
      <channelTitle>{{ data.channelTitle }}</channelTitle>
    </channelListChild>
  </category>
</template>