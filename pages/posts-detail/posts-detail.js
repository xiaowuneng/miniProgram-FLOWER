// pages/posts-detail/posts-detail.js
import {postList} from '../../data/data.js'
let pId = null
let posts_collection = {}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailData: {},
    isCollection: false
  },
  onCollect(event) {
    this.setData({
      isCollection: !this.data.isCollection
    })
    posts_collection[pId] = this.data.isCollection
    wx.setStorageSync('posts_collection', posts_collection)
    wx.showToast({
      title: this.data.isCollection ? '收藏成功' : '已取消收藏'
    })
    // wx.showModal({
    //   cancelColor: 'cancelColor',
    // })
  },
  async onShare() {
    const res = await wx.showActionSheet({
      itemList: ['分享到微信', '分享到朋友圈'],
    })
    console.log(res.tapIndex)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if(options.pId){
      pId = Number(options.pId)
      posts_collection = wx.getStorageSync('posts_collection') || {}
      const detailData = postList.find(item => item.postId === pId)
      this.setData({
        detailData,
        isCollection: posts_collection[pId]
      })
    }
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