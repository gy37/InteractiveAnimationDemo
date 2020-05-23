const height = wx.getSystemInfoSync().windowHeight
Page({
  data: {
    sticky: false,
    opacity: 0,
    height: height,
    titles: ["首页", "活动", "菜单", "我的"]
  },
  //滚动条监听
  onPageScroll: function (e) {
    // console.log('page scroll')
  },
  onShow() {
    
  },
  onReady() {
  },
  onTapTitle: function (e) {
    //点击view中text时，target的dataset中为空，currentTarget的dataset中有值
    //点击view其他位置时，target和currentTarget的dataset中都有值
    //target触发事件的组件的一些属性值集合；currentTarget当前组件的一些属性值集合，事件绑定的当前组件
    console.log(e.currentTarget.dataset.item);
    console.log(e.target.dataset.item);
  }
})