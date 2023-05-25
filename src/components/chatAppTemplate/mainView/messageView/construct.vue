<script setup lang="ts">
import { usechatAppDataStore } from "@/stores/chatAppData";
const store = usechatAppDataStore();

let data = store.mainView.message;

function convertImageLinksToImgTags(text: string): string {
  const regex = /(https?:\/\/[^\s]+?\.(?:png|jpe?g))/g;
  const imgTag =
    '<div style="width: 45vw;height: 25vw;background: url($1) left top / auto 100% no-repeat;margin-top: 15px;"></div>';
  return text.replace(regex, imgTag);
}
</script>

<template>
  <div class="main">
    <div v-for="data in store.mainView.message" class="messageView">
      <div class="column">
        <img :src="data.userIcon" />
        <div class="wing">
          <div class="userName">{{ data.userName }}</div>
          <div class="userHash">{{ data.userHash }}</div>
        </div>
      </div>
      <div
        class="message"
        v-html="convertImageLinksToImgTags(data.message)"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.main {
  height: calc(100% - 80px);
  min-width: calc(100vw - 500px);
  overflow-y: scroll;
  overflow-x: hidden;
  margin-bottom: 20px;
}
.messageView {
  margin: 10px;
  border-bottom: solid 1px rgb(27, 27, 27);
  width: calc(100vw - 500px);
  padding-right: 10px;
}
.column {
  display: flex;
}
img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: solid 2px #2e2e2e;
}
.wing {
  flex-direction: column;
}
.userName {
  color: #fff;
  font-weight: bold;
  font-size: 17px;
  margin-left: 10px;
}
.userHash {
  font-size: 12px;
  margin-left: 10px;
}
.message {
  color: aliceblue;
  margin: 5px 0 20px 5px;
}

::-webkit-scrollbar {
  width: 0;
}
</style>
