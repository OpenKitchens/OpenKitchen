<script setup lang="ts">

</script>
<template>
  <div>
    <input class="textControl">
    <button class="textSendButton"><img src="/public/icon/paperplane.fill.svg"></button>
  </div>
</template>

<style scoped>
div{
  display: flex;
  position: relative;
}
.textControl{
  background-color: rgb(27, 27, 27);
  width: calc(100vw - 550px);
  height: 45px;
  border-radius: 10px;
  border: solid 1px #333;
  margin: 0 25px;
  position: relative;
}
.textSendButton{
  width: 40px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  position: absolute;
  left: calc(100vw - 580px);
  margin: 7.5px;
}
</style>