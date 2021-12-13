// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    num: '',
    infoList: []
  },
  onShow() {
    this.load()
  },
  load(){
     this.getTabBar().init();
    var user = wx.getStorageSync('user');

        this.setData({
          num: app.globalData.sum,
          user: user
        })
    
  },
  onLoad() {


  }
})