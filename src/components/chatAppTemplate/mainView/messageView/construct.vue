<script setup lang="ts">
import { usechatAppDataStore } from "@/stores/chatAppData"
const store = usechatAppDataStore()

let data = store.mainView.message
</script>

<template>
    
  <div v-for="data in store.mainView.message">
    <img :src="data.userIcon">
    <div class="userName">{{ data.userName }}</div>
    <div class="userHash">{{ data.userHash }}</div>
    <div class="message">{{ data.message }}</div>
  </div>
</template>