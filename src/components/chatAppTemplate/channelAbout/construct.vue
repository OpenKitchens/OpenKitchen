<script setup lang="ts">
import { usechatAppDataStore } from "@/stores/chatAppData"
const store = usechatAppDataStore()

let data = store.channelAbout
</script>
<template>
  <div class="title">{{ data.channelTitle }}</div>
  <div class="description">{{ data.channelDescription }}</div>
  <div class="icon">{{ data.channelIcon }}</div>
  <div class="imageView"><img :src="data.channelImageView"></div>
</template>