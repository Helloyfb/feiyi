const db=wx.cloud.database()
// pages/make/make.js
Page({

  /**
   * 页面的初始数据
   */
  data: {  
    yutext: '2024 第二期 | 4月13日 曲艺专场',
    isReserved: false, // 添加一个状态来跟踪是否已预约  
  },
  navigateTohuodong1: function() {
    wx.navigateTo({
      url: '../make/huodong1/huodong1'
    })
  },
  navigateTohuodong2: function() {
    wx.navigateTo({
      url: '../make/huodong2/huodong2'
    })
  },
  navigateTohuodong3: function() {
    wx.navigateTo({
      url: '../make/huodong3/huodong3'
    })
  },
  onLoad: function() {  
    this.updateReservedCount(); // 页面加载时更新已预约人数  
  },  
  updateReservedCount: function() {  
    const db = wx.cloud.database();  
    db.collection("dataList").count({  
      success: (res) => {  
        this.setData({  
          renshu: res.total // 更新已预约人数  
        });  
      },  
      fail: (err) => {  
        console.error("Failed to count documents:", err);  
      }  
    });  
  }, 
  //插入数据
  addData: function() {  
    if (this.data.isReserved) {  
      wx.showToast({  
        title: '预约失败',  
        icon: 'none',  
        duration: 2000,  
      });  
      return; // 如果已经预约，则直接返回，不执行后续操作  
    }  
  
    const db = wx.cloud.database();  
    db.collection("dataList").add({  
      data: {  
        title: this.data.yutext,  
      },  
      success: (res) => {  
        // 预约成功后，更新状态并显示提示  
        this.setData({  
          isReserved: true,  
        });  
        wx.showToast({  
          title: '预约成功',  
          icon: 'success',  
          duration: 2000,  
        });  
      },  
      fail: (err) => {  
        wx.showToast({  
          title: '预约失败',  
          icon: 'none',  
          duration: 2000,  
        });  
        console.error("Failed to add data:", err);  
      },  
    });  
  }, 
  onPullDownRefresh: function () {  
    wx.stopPullDownRefresh();  
    setTimeout(() => { // 使用箭头函数来保持this的上下文  
      this.updateReservedCount(); // 直接调用this.fetchTitles来刷新数据  
    }, 500);
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