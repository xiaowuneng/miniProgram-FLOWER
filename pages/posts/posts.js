// pages/posts/posts.js
import {postList} from '../../data/data.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postList: []
  },
  onFullAvatar(event) {
    // let currentUrl = event.currentTarget.dataset.src
    // 点击头像放大
    wx.previewImage({
      current: 'https://cdn2.thecatapi.com/images/4id.gif', 
      urls: [
        'https://cdn2.thecatapi.com/images/4id.gif',
        'https://cdn2.thecatapi.com/images/99c.jpg',
        'https://cdn2.thecatapi.com/images/c5s.jpg',
        'https://cdn2.thecatapi.com/images/cmf.jpg',
        'https://cdn2.thecatapi.com/images/dda.jpg',
        'https://cdn2.thecatapi.com/images/AOSg9PWds.jpg'
      ]
    })
  },
  onGoToDetail() {
    wx.navigateTo({
      url: '../posts-detail/posts-detail',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({postList})
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