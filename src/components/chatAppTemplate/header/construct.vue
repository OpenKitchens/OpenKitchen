<script setup lang="ts">
import instanceHeader from "./instanceHeader/channelDescription.vue"
import userSetting from "./userSetting/userSetting.vue"

import { usechatAppDataStore } from "@/stores/chatAppData"
const store = usechatAppDataStore()
</script>
<template>
  <div class="instanceTitle"></div>
  <div class="channelIcon"></div>
  <div class="channelTitle"></div>
  <div class="channelDescription"></div>
</template>