import { defineStore } from "pinia"

interface channelList {
  category: string
  data: channelListData[]
}

interface channelListData {
  channelIcon: string
  channelTitle: string
}

interface Message {
  userHash: string
  userIcon: string
  userName: string
  message: string
}


export const usechatAppDataStore = defineStore("chatAppData", {
  state: () => ({
    header: {
      instanceTitle: "",
      channelTitle: "",
      channelDescription: "",
      channelIcon: ""
    },
    channelList: [] as channelList[],
    mainView: {
      message: [] as Message[],
      textControl: ""
    },
    channelAbout: {
      channelDescription: "",
      channelIcon: "",
      channelImageView: "",
      channelTitle: ""
    }
  }),
  actions: {
    addMessage(data: Message) {
      this.mainView.message.push(data)
    },
    addChannelList(data: channelList) {
      this.channelList.push(data)
    }
  }
})
