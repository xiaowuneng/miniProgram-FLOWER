// component/movie/index.js
Component({
  /**
   * 组件的属性列表
   */
  // externalClasses: 'm-class',
  properties: {
    movie: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onGoToMovieDetail(event) {
      wx.navigateTo({
        url: `/pages/movie-detail/movie-detail?mid=${event.currentTarget.dataset.id}`,
      })
    }
  }
})
