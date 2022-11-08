// component/movie-list/index.js
import {MOVIS_CATEGORY} from '../../utils/constant'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    category: {
      type: String,
      value: ''
    },
    movies: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    title: ''
  },
  ready() {
    this.setData({
      title: MOVIS_CATEGORY[this.properties.category]
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onMoreMovie(event) {
      wx.navigateTo({
        url: `/pages/more-movie/more-movie?category=${event.currentTarget.dataset.category}`,
      })
    }
  }
})
