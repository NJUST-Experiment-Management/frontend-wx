// pages/message/message.js
import Dialog from '@vant/weapp/dialog/dialog';
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
            if (e.currentTarget.dataset.item.isread == 0) {
                var index = e.currentTarget.dataset.index;
                var number = 'infoList[' + index + '].isread';
                this.setData({
                    [number]: 1
                })
                //测试接口
                // wx.request({
                //     url: 'http://rap2api.taobao.org/app/mock/294824/getMessageNum',
                //     method: 'get',
                //     header: {
                //         'content-type': 'application/json;charset=utf-8', // 默认值
                //         'token': this.data.user.token
                //     },
                //     success(res) {
                //         if (res.statusCode != 200) {
                //             wx.showToast({
                //                 title: res.data.message,
                //                 icon: 'none',
                //                 duration: 2000
                //             })
                //         }
                //     }
                // })
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
            url: 'http://rap2api.taobao.org/app/mock/294824/getMessageList',
            method: 'get',
            header: {
                'content-type': 'application/json;charset=utf-8',
                'token': this.data.user.token
            },
            success(res) {
                console.log(res)
                if (res.statusCode == 200) {
                    that.setData({
                        infoList: res.data.infolist
                    })
                    wx.hideLoading()
                } else {
                    wx.showToast({
                        title: res.data.message,
                        icon: 'none',
                        duration: 2000
                    })
                }
            }
        })

    }






})