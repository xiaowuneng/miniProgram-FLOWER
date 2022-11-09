// pages/movies/movies.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    movieData: {
      hitMovies: {
        category: 'hit',
        data: []
      },
      comingSoonMovies: {
        category: 'comingSoon',
        data: []
      },
      top250Movies: {
        category: 'top250',
        data: []
      }
    },
    isSearching: false,
    searchRes: []
  },
  onSearch(event) {
    this.setData({isSearching: true})
    wx.request({
      url: app.gBaseUrl + 'search',
      data:{ q: event.detail},
      success:(res)=>{
        this.setData({
          searchRes: res.data.subjects
        })
      }
    })
  },
  onCancel() {
    this.setData({isSearching: false})
  },
  getHitMovies() {
    wx.request({
      url: app.gBaseUrl + 'in_theaters',
      data:{ start:0, count:3 },
      success:(res)=>{
        this.setData({
          'movieData.hitMovies.data': res.data.subjects
        })
      }
    })
  },
  getCommingSoonMovies() {
    wx.request({
      url: app.gBaseUrl + 'coming_soon',
      data:{ start:0, count:3 },
      success:(res)=>{
        this.setData({
          'movieData.comingSoonMovies.data':res.data.subjects
        })
      }
    })

  },
  getTop250Movies() {
    wx.request({
      url: app.gBaseUrl + 'top250',
      data:{ start:0, count:3 },
      success:(res)=>{
        this.setData({
          'movieData.top250Movies.data':res.data.subjects
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getHitMovies()
    this.getCommingSoonMovies()
    this.getTop250Movies()
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