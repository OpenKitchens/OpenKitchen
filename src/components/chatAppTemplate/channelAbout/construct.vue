<script setup lang="ts">
import { usechatAppDataStore } from "@/stores/chatAppData"
const store = usechatAppDataStore()

import channelTitle from "./channelAbout/channelTitle.vue"
import channelImageView from "./channelAbout/channelImageView.vue"
import channelDescription from "./channelAbout/channelDescription.vue"
import channelIcon from "./channelAbout/channelIcon.vue"

let data = store.channelAbout
</script>
<template>
  <channelTitle>{{ data.channelTitle }}</channelTitle>
  <channelDescription>{{ data.channelDescription }}</channelDescription>
  <channelIcon>{{ data.channelIcon }}</channelIcon>
  <channelImageView><img :src="data.channelImageView"></channelImageView>
</template>