<script setup lang="ts">
import { usechatAppDataStore } from "@/stores/chatAppData"
const store = usechatAppDataStore()

let data = store.channelAbout

const channelImageView = `url(${data.channelImageView})`
</script>
<template>
  <div class="main">
    <div class="about">
      <div class="text-container">
        <div class="title"><span>{{ data.channelIcon }}</span>{{ data.channelTitle }}</div>
        <div class="description">{{ data.channelDescription }}</div>
      </div>
    </div>
    <div class="titleView"><span>{{ data.channelIcon }}</span>{{ data.channelTitle }}</div>
    <div class="descriptionView">{{ data.channelDescription }}</div>
  </div>
</template>

<style scoped>
.main{
  width: 20vw;
  min-width: 250px;
  background-color: rgb(27, 27, 27);
  z-index: 2;
}
.about{
  width: 100%;
  height: 18%;
  background-image: v-bind(channelImageView);
  background-repeat: no-repeat;
  background-size: 100%;
  color: #fff;
  position: relative;
}
.about::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* 背景色を暗めに設定 */
  z-index: 0; /* オーバーレイを背面に配置 */
}
.about .text-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
}
.title{
  font-weight: bold;
  font-size: 20px;
}
.titleView{
  color: #fff;
  font-size: 25px;
  font-weight: bold;
  margin: 10px 0 0 10px;
}
.descriptionView{
  margin: 0 0 10px 10px;
}
</style>