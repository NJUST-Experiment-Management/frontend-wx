Page({
  /**
   * 页面的初始数据
   */
  data: {
    isshow: [],
    list: [],
    show: 0
  },
  onShow() {
    this.getTabBar().init();
  },
  onPullDownRefresh(){
    this.onLoad()
    setTimeout(() => {
      wx.stopPullDownRefresh()
    }, 1000);
    
  },
  onLoad() {
    var that = this
    wx.request({
      url: 'http://localhost:9090/findCourse/id',
      method: 'get',
      header: {
          'content-type': 'application/json;charset=utf-8',
          'token': wx.getStorageSync('user').token
      },
      success(res) {
          console.log(res)
          if (res.data.code == "0") {
              that.setData({
                  infoList: res.data.data
              })
              wx.hideLoading()
          } else {
              wx.showToast({
                  title: res.data.msg,
                  icon: 'none',
                  duration: 2000
              })
          }
      }
  })
    this.setData({
      user: wx.getStorageSync('user')
    })
  }

})