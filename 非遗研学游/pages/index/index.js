// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    movies: [{
      url:'https://s2.loli.net/2024/05/26/7JPhs5DyHpMwFka.jpg'
    },
    {
      url:'https://s2.loli.net/2024/05/15/vlr6ObhsHxK9U2Y.png'
    },
    {
      url:'https://s2.loli.net/2024/05/15/rolOCaX96NbQ7KG.png'
    },
    {
      url:'https://s2.loli.net/2024/05/15/xhUqC1oXGcVlf2J.png'
    },
    {
      url:'https://s2.loli.net/2024/05/15/YZOzP2lAjT3WHmh.png' 
    }
    ],
    box1: [  
      {   
        imageSrc: 'https://s2.loli.net/2024/05/15/qhQXzxiwZInAo8B.png'   
      },  
      {   
        imageSrc: 'https://s2.loli.net/2024/05/15/9rMpdRfKhAobQH2.png'   
      }, 
    ],
    box2: [  
      {   
        imageSrc: 'https://s2.loli.net/2024/05/15/ZkPhFw6rimYu2TU.jpg'   
      },  
      {   
        imageSrc: 'https://s2.loli.net/2024/05/15/VnhSvX2t6Gjy3um.jpg'
      }, 
      
      {   
        imageSrc: 'https://s2.loli.net/2024/05/15/S8zY6L4KmvHdAcw.jpg'   
      }, 
    ],
    box3: [  
      {   
        imageSrc: 'https://s2.loli.net/2024/05/15/mnHO9MfPyoIcEqv.jpg'   
      }, 
    ],
    box4: [  
      {   
        imageSrc: 'https://s2.loli.net/2024/05/15/bfOpMQSmcBGzZiE.jpg'   
      },
      {   
        imageSrc: 'https://s2.loli.net/2024/05/15/JTC8mEfvLwsy5Vg.jpg'
      }
    ],
    box5: [  
      {   
        text: '曲阳泥塑',   
        imageSrc: 'https://s2.loli.net/2024/05/15/BdFkzhR3Hi42IKj.png'   
      },
      {   
        text: '焦氏脸谱',   
        imageSrc: 'https://s2.loli.net/2024/05/15/MJQB3j6wGhWtv5a.jpg'
      },
      {   
        text: '花丝镶嵌吊坠',   
        imageSrc: 'https://s2.loli.net/2024/05/15/EbKVs7uQdTa1gWU.jpg'
      },
      {   
        text: '手绣红包',   
        imageSrc: 'https://s2.loli.net/2024/05/15/xZiaJb84MheUWL3.png'
      }
    ]
  },
  navigateTohuodong1: function() {
    wx.navigateTo({
      url: '../zhengding/zhengding'
    })
  },
  handleScroll: function(e) {  
    // 在这里你可以获取滚动位置等信息，进行额外处理  
    // e.detail.scrollTop 是垂直滚动条的位置  
    console.log('滚动位置:', e.detail.scrollTop);  
  },
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail
    const { nickName } = this.data.userInfo
    this.setData({
      "userInfo.avatarUrl": avatarUrl,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  onInputChange(e) {
    const nickName = e.detail.value
    const { avatarUrl } = this.data.userInfo
    this.setData({
      "userInfo.nickName": nickName,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
})
