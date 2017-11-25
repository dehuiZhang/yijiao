//index.js
//获取应用实例
const util = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    qiniu:util.qiniu,
    news_list:[
    ],
    over_bottom:false
  },
  onReachBottom(){
    console.log('qqqq')
    this.start += 1;
    if( this.start>Math.ceil(this.data.count/this.num) ){
      this.setData({ over_bottom:true })
      return;
    }
    this.getnewlist(this.start,this.num);
  },
  getnewlist(start,num){
    var that = this;
    wx.request({
      url: 'https://'+util.domain+'/api/news', //仅为示例，并非真实的接口地址
      data: {
         start,
         num
      },
      method:'GET',
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        let news_list = that.data.news_list.concat(res.data.body);        
        that.setData({ news_list,count:res.data.count })
      }
    })
  },
  onLoad: function () {
    let that = this;
    this.start = 1;
    this.num = 4;
    this.getnewlist(this.start,this.num);
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
