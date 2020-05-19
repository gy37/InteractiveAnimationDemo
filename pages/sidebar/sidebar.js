// page/one/index.js
Page({
  data: {
    open: false,
    mark: 0,
    newmark: 0,
    startmark: 0,
    endmark: 0,
    windowWidth: wx.getSystemInfoSync().windowWidth,//获取屏幕宽度
    staus: 1,
    translate: '',
    backgroundColor: 'blue',
    transform: 'translateX(0px)'
  },
  onReady() {
    // setTimeout(() => {
      // this.initInteraction()
    // }, 5000)
  },
  tap_ch: function(event) {
    console.log(event);//event中有好多信息
    console.log(event.currentTarget);//点击组件的信息比较少
    console.log("打开抽屉，显示侧边菜单");
    this.updateTransform((event.detail.x > this.data.windowWidth/2 ? 0 : this.data.windowWidth * 0.75));//三目运算符优先级问题，加括号
  },
  updateTransform: function(x) {//封装设置偏移量的方法，方便在wxs文件中直接调用来设置偏移量
    this.setData({//wxs中设置的样式和style行内样式重复？？？
      transform: 'translateX(' + x + 'px)'
    });
  },
  onTapItem: function(event) {
    console.log(event.currentTarget);
    var index = event.currentTarget.dataset.index;//js中获取wxml中的数据index
    console.log(index);
    this.setData({//js中修改wxml组件的样式（通过数据绑定的方式，修改数据进而修改样式）
      backgroundColor: this.randomColor()
    });    
  },
  randomColor: function() {//获取随机颜色
    return 'rgb('+ Math.random() * 256 + ',' + Math.random() * 256 + ',' + Math.random() * 256 + ')'
  }
})