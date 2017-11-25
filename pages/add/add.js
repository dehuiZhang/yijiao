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
  bindinput(e){
    let type = e.target.dataset.type;
    console.log(type);
    console.log(e);
    if( type == 'name'){
      this.setData({ name:e.detail.value})
    }else if (type == 'phone'){
      this.setData({ phone:e.detail.value})  
    }else if (type == 'point'){
      this.setData({ point:e.detail.value})  
    }else if (type == 'time'){
      this.setData({ time:e.detail.value})  
    }
  },
  confirm(){
    console.log(this.data);
  },
  onLoad: function () {
    let that = this;
    console.log(this.data);
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
