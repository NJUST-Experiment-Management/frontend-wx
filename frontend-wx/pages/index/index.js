// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    num: '',
    infoList: []
  },
  onShow() {
    this.getTabBar().init();
    var user = wx.getStorageSync('user');
    this.setData({
      num: wx.getStorageSync('num'),
      user: user
    })
  },
  onLoad() {


  }
})