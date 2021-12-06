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
  onLoad() {
    wx.request({
      url: 'http://localhost:9090/IdFindCourse',
      method: 'get',
      header: {
          'content-type': 'application/json;charset=utf-8',
          'token': wx.getStorageSync('user').token
      },
      success(res) {
          console.log(res)
          // if (res.statusCode == 200) {
          //     that.setData({
          //         infoList: res.data.infolist
          //     })
          //     wx.hideLoading()
          // } else {
          //     wx.showToast({
          //         title: res.data.message,
          //         icon: 'none',
          //         duration: 2000
          //     })
          // }
      }
  })
    this.setData({
      user: wx.getStorageSync('user'),
      
      list: [{
          "course_name": '计算机组成原理原理原理原料库原理',
          'room_name': '1002',
          'device_row': 2,
          'device_col': 4,
          'isopening': 0,
          'arrange_date': '2021-11-25',
          'arrange_time': '4'
        },
        {
          "course_name": '计算机组成原理',
          'room_name': '1032',
          'device_row': 1,
          'device_col': 4,
          'isopening': 1,
          'arrange_date': '2021-11-14',
          'arrange_time': '3'
        },
        {
          "course_name": '计算机组成原理原理原理原料库原理',
          'room_name': '1002',
          'device_row': 2,
          'device_col': 4,
          'isopening': 0,
          'arrange_date': '2021-11-25',
          'arrange_time': '4'
        },
        {
          "course_name": '计算机组成原理',
          'room_name': '1032',
          'device_row': 1,
          'device_col': 4,
          'isopening': 1,
          'arrange_date': '2021-11-15',
          'arrange_time': '3'
        },
        {
          "course_name": '计算机组成原理原理原理原料库原理',
          'room_name': '1002',
          'device_row': 2,
          'device_col': 4,
          'isopening': 0,
          'arrange_date': '2021-11-25',
          'arrange_time': '4'
        },
        {
          "course_name": '计算机组成原理',
          'room_name': '1032',
          'device_row': 1,
          'device_col': 4,
          'isopening': 1,
          'arrange_date': '2021-11-14',
          'arrange_time': '3'
        },
        {
          "course_name": '计算机组成原理原理原理原料库原理',
          'room_name': '1002',
          'device_row': 2,
          'device_col': 4,
          'isopening': 0,
          'arrange_date': '2021-11-25',
          'arrange_time': '4'
        },
        {
          "course_name": '计算机组成原理',
          'room_name': '1032',
          'device_row': 1,
          'device_col': 4,
          'isopening': 1,
          'arrange_date': '2021-11-15',
          'arrange_time': '3'
        }
      ]
    })
    var len = this.data.list.length
    this.setData({
      isshow: new Array(len).fill(false)
    })
    console.log(this.data.isshow)
  },
  getweekday() {
    // var weekArray = new Array("日", "一", "二", "三", "四", "五", "六");
    // var week = weekArray[new Date(date).getDay()];//注意此处必须是先new一个Date
    // return week;
    return 1;
  },

  /**
   * 展开、折叠效果
   */
  // show: function (e) {
  //   // this.setData({
  //   //   isshow: !this.data.isshow
  //   // })

  //   var number= 'isshow[' + e.currentTarget.dataset.index + ']';  
  //   this.setData({ 
  //     [number] : !this.data.isshow[e.currentTarget.dataset.index]
  //   })
  // }
})