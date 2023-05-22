<script setup lang="ts">
import chatAppTemplate from '../components/chatAppTemplate/construct.vue'
import { usechatAppDataStore } from "../stores/chatAppData"

const store = usechatAppDataStore()

store.header.instanceTitle = "OpenKitchen"
store.header.channelIcon = "🎙️"
store.header.channelTitle = "雑談"
store.header.channelDescription = "ツゥーダァーンッッツ！！"

store.addChannelList({
  category: "KitchenApp", 
  data: [
    {channelTitle: "README", channelIcon: "📄"},
    {channelTitle: "Instance登録", channelIcon: "🥤"},
    {channelTitle: "Token認証", channelIcon: "👍"},
    {channelTitle: "Follow", channelIcon: "🍿"},
  ]
})

store.addMessage({ userHash: "27e98b679e16", userIcon: "https://i.imgur.com/fjKM9U3_d.webp?maxwidth=760&fidelity=grand", userName: "MOYASI", message: "これはテキストメッセージ" })
store.addMessage({ userHash: "27e98b679e16", userIcon: "https://i.imgur.com/fjKM9U3_d.webp?maxwidth=760&fidelity=grand", userName: "MOYASI", message: "r-301をカービンっていうやつはヘムロックをバーストARっていうんか？" })

store.channelAbout.channelDescription = "ツゥーダァーンッッツ！！"
store.channelAbout.channelIcon = store.header.channelIcon
store.channelAbout.channelImageView = "https://iphone-mania.jp/wp-content/uploads/2018/07/MacBook-Pro-WP-1.png"
store.channelAbout.channelTitle = store.header.channelTitle
</script>

<template>
  <main>
    <chatAppTemplate />
  </main>
</template>
