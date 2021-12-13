// pages/message/message.js
import Dialog from '@vant/weapp/dialog/dialog';
const app = getApp()
Page({
    data: {
        infoList: [],
        user: ''
    },
    //已读消息
    checkmsg(e) {
        console.log(e)
        Dialog.alert({
            title: '系统消息',
            message: e.currentTarget.dataset.item.content,
        }).then(() => {
            if (e.currentTarget.dataset.item.read == false) {
                var index = e.currentTarget.dataset.index;
                var number = 'infoList[' + index + '].read';
                this.setData({
                    [number]: true
                })
                wx.request({
                    url: 'http://localhost:9090/readMessage',
                    method: 'get',
                    data:{
                        messageId:e.currentTarget.dataset.item.messageId
                    },
                    header: {
                        'content-type': 'application/json;charset=utf-8', // 默认值
                        'token': this.data.user.token
                    },
                    success(res) {
                        if (res.data.code == "0") {
                            app.globalData.sum=app.globalData.sum-1
                        } else {
                            wx.showToast({
                                title: res.data.msg,
                                icon: 'error',
                                duration: 2000
                            })
                        }
                    }
                })
            }

        });

    },
    onLoad: function (options) {
        var user = wx.getStorageSync('user');
        this.setData({
            user: user
        })
    },

    onShow: function () {
        var that = this;
        //接口测试，获取所有用户消息
        wx.showLoading({
          title: '加载中',
        })
        wx.request({
            url: 'http://localhost:9090/getMessages',
            method: 'get',
            header: {
                'content-type': 'application/json;charset=utf-8',
                'token': this.data.user.token
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

    }






})