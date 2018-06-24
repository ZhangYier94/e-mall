//logs.js
// const util = require('../../utils/util.js')

Page({
  data: {
    address:['上海大学宝山校区','上海大学嘉定校区','上海大学延长校区'],
    addressIndex:0
  },
  onLoad: function () {
    // this.setData({
    // })
  },
  bindPikerChange:function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      addressIndex: e.detail.value
    })
  },
  goToShop:function(e){
    wx.navigateTo({
      url: '../shop/shop'
    })
  }
})
