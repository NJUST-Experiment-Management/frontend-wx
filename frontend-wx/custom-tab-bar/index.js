Component({
	data: {
		active: 0,
		list: [{
				icon: 'todo-list-o',
				text: '我的课程',
				url: '/pages/course/course'
			},
			{
				icon: 'manager-o',
				text: '个人中心',
				url: '/pages/index/index',
			}
		]
	},

	methods: {
		onChange(event) {
			this.setData({
				active: event.detail
			});
			wx.switchTab({
				url: this.data.list[event.detail].url
			});
		},

		init() {
			const page = getCurrentPages().pop();
			var number = 'list[1].info';
			var that = this;
			var user = wx.getStorageSync('user')
			that.setData({
				active: that.data.list.findIndex(item => item.url === `/${page.route}`),
			});
			wx.request({
				url: 'http://rap2api.taobao.org/app/mock/294824/getMessageNum',
				method: 'get',
				header: {
					'content-type': 'application/json;charset=utf-8', // 默认值
					'token': user.token
				},
				success(res) {
					if (res.statusCode == 200) {
						wx.setStorageSync('num', res.data.num);
						if (res.data.num != 0) {
							that.setData({
								[number]: res.data.num
							});
						}

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
	}
});