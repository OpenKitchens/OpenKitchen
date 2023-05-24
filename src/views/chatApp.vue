<script setup lang="ts">
import chatAppTemplate from "../components/chatAppTemplate/construct.vue";
import { usechatAppDataStore } from "../stores/chatAppData";

const store = usechatAppDataStore();

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
  userIcon: "https://tiniu.openkitchensmoy.repl.co/2.jpeg",
  userName: "Re0",
  message:
    "R-301の事をカービンって言ってる奴は\nヘムロックをバーストARって言うんか？\nボルトSMGとR-99SMGとオルタネーターSMGは全部SMGって呼ぶんか？\nプラウラーをPDWって呼べるのか？\n\nそもそもカービンの意味を知ってるのか？\nDMRやスカウトの意味もわかるのか？って気持ちになるからカービン呼びは無知",
});
store.addMessage({
  userHash: "27e98b679e16",
  userIcon: "https://tiniu.openkitchensmoy.repl.co/2.jpeg",
  userName: "Re0",
  message:
    "普通に考えてフラットラインはVK-47ですよね？同じ質問をみんなで何度もするなんて本当に無知なんだね？笑もっとAPEXの事ちゃんと調べた方がいいよ？何も知らないからR-301の事をカービンとか呼んでるんでしょ？無知って言われて必死に返事してくれてありがとうな？",
});
store.addMessage({
  userHash: "27e98b679e16",
  userIcon: "https://tiniu.openkitchensmoy.repl.co/1.jpeg",
  userName: "♠️がぶりえる♠️",
  message: "所詮ゲームだしなぁ\n呼びやすい名でええやん〜",
});
store.addMessage({
  userHash: "27e98b679e16",
  userIcon: "https://tiniu.openkitchensmoy.repl.co/1.jpeg",
  userName: "ﾌﾒｲ",
  message:
    "フラットラインのことVK-47って呼びますか？？https://tiniu.openkitchensmoy.repl.co/3.jpeg",
});
store.addMessage({
  userHash: "27e98b679e16",
  userIcon: "https://tiniu.openkitchensmoy.repl.co/2.jpeg",
  userName: "Re0",
  message: "フォーティーセブンって呼んでる",
});

store.channelAbout.channelDescription = "ツゥーダァーンッッツ！！";
store.channelAbout.channelIcon = store.header.channelIcon;
store.channelAbout.channelImageView =
  "https://iphone-mania.jp/wp-content/uploads/2018/07/MacBook-Pro-WP-1.png";
store.channelAbout.channelTitle = store.header.channelTitle;
</script>

<template>
  <main>
    <chatAppTemplate />
  </main>
</template>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
}
</style>
