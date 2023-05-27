<script setup lang="ts">
import { usechatAppDataStore } from "@/stores/chatAppData";
const store = usechatAppDataStore();

let data = store.mainView.message;
/*
function convertImageLinksToImgTags(text: string): string {
  const regex = /(https?:\/\/[^\s]+?\.(?:png|jpe?g))/g;
  const imgTag =
    '<div style="width: 45vw;height: 25vw;background: rgba(57, 57, 57, 0.5) url($1) center center / auto 100% no-repeat;margin-top: 15px;border-radius: 10px"></div>';
  return text.replace(regex, imgTag);
}*/

function convertImageLinksToImgTags(text: string): string {
  // URLをリンク化する正規表現パターン
  const urlPattern = /(https?:\/\/\S+)/g;

  // 画像のURLを特定する正規表現パターン
  const imagePattern = /(https?:\/\/\S+\.(?:jpg|gif|png|webp))/g;

  return text.replace(urlPattern, (match, url) => {
    if (imagePattern.test(url)) {
      // 画像のURLの場合、画像タグに変換する
      return `<img alt="画像" src="${url}" onload="resizeImage(this)" style="max-width: 100%; display: block;border-radius: 10px;">`;
    } else {
      // リンクのURLの場合、リンクタグに変換する
      return `<a href="${url}">${url}</a>`;
    }
  });
}

function resizeImage(image: HTMLImageElement) {
  const maxWidth = 500; // 最大幅
  const maxHeight = 500; // 最大高さ

  const width = image.naturalWidth; // 画像の元の幅
  const height = image.naturalHeight; // 画像の元の高さ

  let newWidth = width;
  let newHeight = height;

  if (width > maxWidth) {
    newWidth = maxWidth;
    newHeight = (height * maxWidth) / width;
  }

  if (newHeight > maxHeight) {
    newHeight = maxHeight;
    newWidth = (width * maxHeight) / height;
  }

  image.style.width = `${newWidth}px`;
  image.style.height = `${newHeight}px`;
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
  border-bottom: solid 1px rgb(230, 230, 230);
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
  border: solid 2px #a8a8a8;
}
.wing {
  flex-direction: column;
}
.userName {
  color: #000;
  font-weight: bold;
  font-size: 17px;
  margin-left: 10px;
}
.userHash {
  font-size: 12px;
  margin-left: 10px;
}
.message {
  color: #000;
  margin: 5px 0 20px 5px;
}

::-webkit-scrollbar {
  width: 0;
}
@media (prefers-color-scheme: dark) {
  img{
    border: solid 2px #2e2e2e;
  }
  .userName{
    color: #fff;
  }
  .message{
    color: aliceblue;
  }
  .messageView{
    border-bottom: solid 1px rgb(27, 27, 27);
  }
}
</style>
