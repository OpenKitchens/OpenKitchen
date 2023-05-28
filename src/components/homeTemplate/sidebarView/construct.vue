<script setup lang="ts">
const SidebarList = [
  {title: "Bolt", icon: "/icon/bolt.svg", id: "bolt"},
  {title: "ブックマーク", icon: "/icon/bookmark.svg", id: "bookmark"},
  {title: "通知", icon: "/icon/notification.svg", id: "notification"},
  {title: "Instance", icon: "/icon/instance.svg", id: "instance"},
  {title: "メッセージ", icon: "/icon/message.svg", id: "message"},
]
</script>
<template>
  <div class="Sidebar">
    <div class="SidebarIndex">
      <span><img src="/icon/openkitchen.svg" class="logo"><img src="/icon/new.svg" width="40" style="margin: 0px 20px 10px;"></span>
      <div v-for="Sidebar in SidebarList" class="SidebarChild" :id="Sidebar.id">
        <span class="iconClass"><img :src="Sidebar.icon" class="icon"></span>
        <span class="title">{{ Sidebar.title }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo{
  width: 170px;
  margin: 0 0 15px 30px;
}
.Sidebar{
  background-color: rgb(235, 235, 235);
  width: 20vw;
  min-width: 300px;
  height: 100%;
  margin: 0;
  position: relative;
}
.SidebarIndex{
  position: relative;
  top: 20px;
}
.SidebarChild{
  display: flex;
  margin: 10px 15px;
  padding: 12px 15px 5px 15px;
  color: #d9d9d9;
  position: relative;
}
span{
  display: inline-block;
}
.icon{
  margin: auto;
  display: block;
}
.iconClass{
  width: 30px;
  height: 30px;
}
.title{
  color: #000;
  font-size: 1rem;
  font-weight: 700;
  position: absolute;
  left: 50px;
}

#bolt{
  background-color: #333;
  padding: 12px 15px 5px 15px;
  border-radius: 10px;
}

@media (prefers-color-scheme: dark) {
  .Sidebar{
    background-color: rgb(27, 27, 27);
    color: #fff;
  }
  .icon{
    color: #fff;
  }
  .title{
    color: #fff;
  }
}
</style>