// pages/make/huodong1/huodong1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {  
    yutext: '2024 第二期 | 4月13日 曲艺专场',
    showDialog: false, // 控制弹窗显示与否
    name: '', // 用户输入的姓名  
    contact: '', // 用户输入的联系方式
    swiperList: [  
      'https://s2.loli.net/2024/05/15/fOZgbdBlNCVpv3Y.png',  
      'https://s2.loli.net/2024/05/15/fOZgbdBlNCVpv3Y.png'  
    ],  
    currentSwiperIndex: 0, // 当前swiper的索引  
    currentIndex: 0 // 用于界面显示的索引，从0开始  
  },  
  showDialog: function() {  
    this.setData({  
      // showDialog: true  
    });  
  },  
  // 输入姓名  
  inputName: function(e) {  
    this.setData({  
      name: e.detail.value  
    });  
  },  
  // 输入联系方式  
  inputContact: function(e) {  
    this.setData({  
      contact: e.detail.value  
    });  
  },  
  // 提交表单  
  submitForm: function() {  
    const db = wx.cloud.database();  
    db.collection('yue').add({  
      data: {  
        name: this.data.name,  
        contact: this.data.contact,  
        title: this.data.yutext, // 假设你想把整个yutext作为标题存储  
        // 或者你可以只存储yutext的一部分，例如通过字符串处理提取特定信息  
      },  
      success: res => {  
        wx.showToast({  
          title: '提交成功',  
          icon: 'success',  
          duration: 2000,  
        });  
        this.setData({  
          showDialog: false, // 关闭弹窗  
          name: '', // 清空输入框  
          contact: '', // 清空输入框  
        });  
      },  
      fail: err => {  
        wx.showToast({  
          title: '提交失败',  
          icon: 'none',  
          duration: 2000,  
        });  
        console.error(err);  
      }  
    });  
  },
  swiperChange: function(e) {  
    // 更新当前swiper的索引，用于界面显示  
    this.setData({  
      currentIndex: e.detail.current  
    });  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})