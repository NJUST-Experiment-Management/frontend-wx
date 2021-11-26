
const app = getApp()

Page({
  data: {
    username:''
  },

  onLoad() {
   this.setData({
     username:wx.getStorageSync('username')
   })
  },
  
})
