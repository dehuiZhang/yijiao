//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    active:1
  },
  change_tap(e){
    console.log(e);
    let tap = e.target.dataset.tap;
    this.setData({ active:tap })
  },
  add(){
    wx.navigateTo({
      url: '../add/add'
    })
  },
  onLoad: function () {
    let that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          width:res.windowWidth,
          height:res.windowHeight
        })
      }
    });
  }
})
