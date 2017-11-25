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
    }else if ( type == 'extra'){
      this.setData({ extra:e.detail.value })
    }
  },
  bindDateChange(e){
    console.log(e.detail.value);
    this.setData({ date:e.target.value })
  },
  confirm(){
    console.log(this.data);
    let user_id = 1;
    let name = this.data.name;
    let telphone = this.data.phone;
    let destination = this.data.extra;
  },
  onLoad: function () {
    let that = this;
    console.log(this.data);
    wx.setNavigationBarTitle({
      title: '添加客户'
    })
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
