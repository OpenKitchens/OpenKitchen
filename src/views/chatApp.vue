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

store.addMessage({ userHash: "27e98b679e16", userIcon: "https://imgur.com/fjKM9U3", userName: "MOYASI", message: "これはテキストメッセージ" })

store.channelAbout.channelDescription = "ツゥーダァーンッッツ！！"
store.channelAbout.channelIcon = store.header.channelIcon
store.channelAbout.channelImageView = "https://www.typetalk.com/wp-blog-app/uploads/sites/2/2022/07/shutterstock_1470891287.png"
store.channelAbout.channelTitle = store.header.channelTitle
</script>

<template>
  <main>
    <chatAppTemplate />
  </main>
</template>
