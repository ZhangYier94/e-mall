Page({
  
    /**
     * 页面的初始数据
     */
    data: {
      address: ['上海大学宝山校区', '上海大学嘉定校区', '上海大学延长校区'],
      addressIndex: 0,
      addressDown:'../../assets/images/address-down.png',
      shopNav:[]
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      wx.request({
        url: 'http://localhost:3300/shop',
        success: function (res) {
          console.log(res.data);
          this.setData({shopNav:res.data});
        }.bind(this)
      })
    },
  
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
      
    },
  
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
      
    },
  
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
      
    },
  
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
      
    },
  
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
      
    },
  
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
      
    },
  
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
      
    },
    bindPikerChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        addressIndex: e.detail.value
      })
    },
    goToShop: function (e) {
      wx.navigateTo({
        url: '../home/home'
      })
    }
})
