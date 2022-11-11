// pages/movie-detail/movie-detail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    _mid: null,
    movieDetailData: {}
  },
/**
 * 
 * @param {*} list 处理数据
 * @param {*} delimiter 分隔符
 * @param {*} key 如item是object,拼接key属性，如无该参数，拼接item
 */
  splicString(list,delimiter,key='name') {
    let str = ''
    list.forEach(item => {str+= `${key ? item[key] : item} ${delimiter} `});
    return str.substr(0, str.length - 2)
  },
  processingMovieData(data) {
    data.summary = data.summary.replace(/\\n/g, "\n")
    data.directorsStr = this.splicString(data.directors, '/')
    data.castsStr = this.splicString(data.casts, '/')
    data.casts = [...data.casts, ...data.casts]
    data.genresStr = data.genres.join('、')
    return data;
  },
  getMovieDetailData() {
    wx.request({
      url: `${app.gBaseUrl}subject/${this.data._mid}`,
      success: (res) => {
        this.setData({
          movieDetailData: this.processingMovieData(res.data)
        })
      }
    })
  },
  onFullImg(event) {
    wx.previewImage({
      urls: [event.currentTarget.dataset.imgUrl],
    })
  },
  previewCastImg(event){
    const imgs = this.data.movieDetailData.casts.map(item => item.avatars.large)
    wx.previewImage({
      current: imgs[event.currentTarget.dataset.index],
      urls: imgs,
    })
  },
  onLoad(options) {
    this.setData({
      _mid: options.mid
    })
    this.getMovieDetailData()
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