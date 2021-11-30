//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    username: '',
    password: ''
  },

  onLoad: function () {

  },


  // 获取输入账号 
  usernameInput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },

  // 获取输入密码 
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登录处理
  login: function () {
    var that = this;
    if (this.data.username.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '账号或密码不能为空',
        icon: 'none',
        duration: 2000
      })
    } else {
      // wx.setStorageSync('username',this.data.username)
      // wx.switchTab({
      //   url: '/pages/course/course',
      // })
      
      wx.request({
        
        //url: app.globalData.globalReqUrl +'/login/login', 
        url: 'http://rap2api.taobao.org/app/mock/294824/login',
        method: 'post',
        data: {
          username: that.data.username,
          password: that.data.password
        },
        header: {
          'content-type': 'application/json;charset=utf-8'
        },
        success(res) {
          console.log(res)
          if (res.statusCode==200) {
            wx.setStorageSync('user', res.data);
            wx.switchTab({
              url: '/pages/course/course'
            })

          } else {
            wx.showToast({
              title: res.message,
              icon: 'none',
              duration: 2000
            })
          }
        }
      })
    }
  }
})