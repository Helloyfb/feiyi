// pages/yourPage/yourPage.js  
Page({  
  data: {  
    titles: [], // 存储查询到的title字段  
  },  
  onLoad: function () {  
    this.fetchTitles();  
  },  
  fetchTitles: function () {  
    const db = wx.cloud.database();  
    db.collection('dataList').get({  
      projection: { // 指定返回的字段  
        _id: 0, // 不需要_id字段  
        title: 1 // 只需要title字段  
      },  
      success: (res) => {  
        this.setData({  
          titles: res.data.map(item => item.title) // 提取每个文档的title字段  
        });  
      },  
      fail: (err) => {  
        console.error("Error fetching titles:", err);  
      }  
    });  
  },  
  onPullDownRefresh: function () {  
    wx.stopPullDownRefresh();  
    setTimeout(() => { // 使用箭头函数来保持this的上下文  
      this.fetchTitles(); // 直接调用this.fetchTitles来刷新数据  
    }, 500);  
  },  
});