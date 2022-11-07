// component/movie/index.js
Component({
  /**
   * 组件的属性列表
   */
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
    getRateValue(val) {
      console.log(typeof (val / 2).toFixed(1))
      return (val / 2).toFixed(1)
    }
  }
})
