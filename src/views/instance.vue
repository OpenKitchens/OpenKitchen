<script setup lang="ts">
import instanceTemplate from "../components/instanceTemplate/construct.vue";
import { useInstanceDataStore } from "../stores/instanceData";

const store = useInstanceDataStore();

store.header.instanceTitle = "OpenKitchen";
store.header.channelIcon = "🎙️";
store.header.channelTitle = "雑談";
store.header.channelDescription = "ツゥーダァーンッッツ！！";

store.addChannelList({
  category: "KitchenApp",
  data: [
    { channelTitle: "README", channelIcon: "📄" },
    { channelTitle: "Instance登録", channelIcon: "🥤" },
    { channelTitle: "Token認証", channelIcon: "👍" },
    { channelTitle: "Follow", channelIcon: "🍿" },
  ],
});

store.addChannelList({
  category: "chatApp",
  data: [
    { channelTitle: "お知らせ", channelIcon: "📢" },
    { channelTitle: "オフ会", channelIcon: "🍕" },
    { channelTitle: "雑談", channelIcon: "🎙️" },
    { channelTitle: "開発日記", channelIcon: "✒️" },
  ],
});

store.addMessage({
  userHash: "27e98b679e16",
  userIcon: "https://cdn.discordapp.com/icons/1075631274296873000/95353ce18e96bc4d972d24afb2fd2781.png?size=240",
  userName: "MOYASI",
  message:
    "コードレビューサンガツ",
});
store.addMessage({
  userHash: "27e98b679e16",
  userIcon: "https://cdn.discordapp.com/icons/1052798548330168412/435596a8b1c5bcbfc0444447e1f54012.png?size=240",
  userName: "samesan",
  message:
    "おん。まーじしてもいいんちゃう",
});
store.addMessage({
  userHash: "27e98b679e16",
  userIcon: "https://cdn.discordapp.com/icons/1075631274296873000/95353ce18e96bc4d972d24afb2fd2781.png?size=240",
  userName: "MOYASI",
  message: "んじゃするわ。\nあとさ、GithubでJSが1割くらいあるんだけどTSで書いてないやつってある？https://i.imgur.com/CuO5pcV_d.webp?maxwidth=760&fidelity=grand",
});
store.addMessage({
  userHash: "27e98b679e16",
  userIcon: "https://cdn.discordapp.com/icons/1052798548330168412/435596a8b1c5bcbfc0444447e1f54012.png?size=240",
  userName: "samesan",
  message:
    "いやーやっぱJSで慣れてるからちょっとめんどくさいんだよね\nあと僕の環境が悪いのか知んないけどなんかTSが動かない時あるんだよね、、、",
});
store.addMessage({
  userHash: "27e98b679e16",
  userIcon: "https://cdn.discordapp.com/icons/1075631274296873000/95353ce18e96bc4d972d24afb2fd2781.png?size=240",
  userName: "MOYASI",
  message: "まじか、https://zenn.dev/10_tofu_01/articles/6a9e3fb1eb7bd4 これとかどう",
});
store.addMessage({
  userHash: "27e98b679e16",
  userIcon: "https://cdn.discordapp.com/icons/1052798548330168412/435596a8b1c5bcbfc0444447e1f54012.png?size=240",
  userName: "samesan",
  message: "https://w7.pngwing.com/pngs/595/279/png-transparent-vue-js-javascript-library-angularjs-react-vue-js-template-angle-text-thumbnail.png",
});
store.addMessage({
  userHash: "27e98b679e16",
  userIcon: "https://cdn.discordapp.com/icons/1075631274296873000/95353ce18e96bc4d972d24afb2fd2781.png?size=240",
  userName: "MOYASI",
  message: "どしたん?",
});
//

store.channelAbout.channelDescription = "ツゥーダァーンッッツ！！";
store.channelAbout.channelIcon = store.header.channelIcon;
store.channelAbout.channelImageView =
  "https://tiniu.openkitchensmoy.repl.co/5.jpeg";
store.channelAbout.channelTitle = store.header.channelTitle;
</script>

<template>
  <main>
    <instanceTemplate />
  </main>
</template>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
}
</style>
