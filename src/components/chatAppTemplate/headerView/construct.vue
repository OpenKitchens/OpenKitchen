<script setup lang="ts">
import { usechatAppDataStore } from "@/stores/chatAppData"
const store = usechatAppDataStore()

var data = store.header
</script>
<template>
  <div class="wapper">
    <div class="instanceTitleWapper">
      <div class="instanceTitle">{{ data.instanceTitle }}<span>.instance</span></div>
    </div>
    <div class="channelIcon">{{ data.channelIcon }}</div>
    <div class="channelTitle">{{ data.channelTitle }}</div>
    <div class="channelDescription">{{ data.channelDescription }}</div>
  </div>
</template>

<style scoped>
.wapper{
  width: 100%;
  height: 50px;
  background-color: rgb(244, 244, 244);
  display: flex;
  font-size: 1rem;
  border-bottom: solid 1px rgb(231, 231, 231);
}
.instanceTitle{
  font-weight: bold;
  color: #000;
  margin: auto 30px;
  font-size: 1.2rem;
  width: 240px;
}
.instanceTitleWapper{
  background-color: rgb(244, 244, 244);
  border-bottom: solid 1px rgb(231, 231, 231);
  width: 300px;
  height: 50px;
  display: flex;
}
.instanceTitle span{
  font-size: 15px;
  font-weight: 400;
  color: #7d7d7d;
  margin: 0 5px;
  display: inline-block;
}
.channelIcon{
  margin: auto 5px auto 30px;
}
.channelTitle{
  margin: auto 10px;
  color: #000;
  font-weight: bold;
}
.channelDescription{
  margin: auto 10px;
}

@media (prefers-color-scheme: dark) {
  .wapper{
    background-color: rgb(38, 38, 38);
    border-bottom: none;
  }
  .instanceTitleWapper{
    background-color: rgb(38, 38, 38);
    border-bottom: none;
  }
  .instanceTitle, .channelTitle{
    color: #fff;
  }
}
</style>