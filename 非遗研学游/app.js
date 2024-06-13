// app.js  
App({  
  onLaunch: function () {  
    if (!wx.cloud) {  
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');  
    } else {  
      wx.cloud.init({  
        env: 'admin-8g8f2x3je78f55c3', // 替换为你的云环境ID  
        traceUser: true, // 是否要捕捉用户的操作记录，便于后续分析用户行为  
      });  
        
      console.log('云环境初始化成功！');  
    }  
  },  
  // ...  
});