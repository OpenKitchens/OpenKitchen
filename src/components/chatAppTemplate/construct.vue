<script setup lang="ts">
import channelAbout from "./channelAbout/construct.vue"
import channelList from './channelList/construct.vue'
import header from './header/construct.vue'
import mainView from './mainView/construct.vue'
</script>
<template>
  <header />
  <channelList />
  <mainView />
  <channelAbout />
</template>