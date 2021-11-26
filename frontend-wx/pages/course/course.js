Page({
  /**
   * 页面的初始数据
   */
  data: {
    isshow:[],
    list:[
    ]
  },
 onLoad(){
  this.setData({
    list:[
      {"course_name":'计算机组成原理原理原理原料库原理','room_name':'1002','device_row':2,'device_col':4,'isopening':0,'arrange_date':'2021-11-25','arrange_time':'4'},
      {"course_name":'计算机组成原理','room_name':'1032','device_row':1,'device_col':4,'isopening':1,'arrange_date':'2021-11-15','arrange_time':'3'}
    ]
  })
  var len = this.data.list.length
  this.setData({
    isshow:new Array(len).fill(false)
  })
  console.log(this.data.isshow)
 },
  /**
   * 展开、折叠效果
  */
  show: function (e) {
    // this.setData({
    //   isshow: !this.data.isshow
    // })
    
    var number= 'isshow[' + e.currentTarget.dataset.index + ']';  
    this.setData({ 
      [number] : !this.data.isshow[e.currentTarget.dataset.index]
    })
  },
})