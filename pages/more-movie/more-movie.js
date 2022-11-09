import { MOVIS_CATEGORY } from '../../utils/constant'
import {
  hitApi,
  comingSoonApi,
  top250Api
} from '../../utils/api'
const PULL_DOWN = 'pullDown'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    urls: { // TODO 优化一下
      hit: hitApi,
      comingSoon: comingSoonApi,
      top250: top250Api,
    },
    isLoading: false,
    movieList: [],
    noMoreData: false,
    _category: '',
    _count: 12, //一次请求个数
  },
  setBatTitle() {
    wx.setNavigationBarTitle({
      title: MOVIS_CATEGORY[this.data._category]
    })
  },
  getMovieList(param) {
    if(this.data.noMoreData) {
      return;
    }
    if(param !== PULL_DOWN) {
      // 下拉刷新时，微信自带loading，不显示自定义loading
      this.setData({isLoading: true})
    }
    wx.request({
      url: this.data.urls[this.data._category],
      data:{ start: this.data.movieList.length, count: this.data._count },
      success: (res) => {
        this.data._start += res.data.count
        this.setData({
          movieList: this.data.movieList.concat(...res.data.subjects)
        })
        if(this.data._count > res.data.count || this.data.movieList >= res.data.total) {
          this.setData({noMoreData: true})
        }
      },
      complete: ()=> {
        this.setData({isLoading: false})
        wx.stopPullDownRefresh()
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      _category: options.category
    })
    this.getMovieList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.setBatTitle()
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
    this.setData({
      noMoreData: false,
      movieList: []
    })
    this.getMovieList(PULL_DOWN)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    this.getMovieList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})