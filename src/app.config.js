export default {
  pages: [
    'pages/index/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '返回',
    navigationBarTextStyle: 'black'
  },
  subPackages:[
    {
      "root": "pages/hotSpot/",
      "pages": [
        "hotSpotIndex",
      ]
    },
    {
      "root": "pages/myRecord/",
      "pages": [
        "healthRecords",
        "index"
      ]
    }
  ]
}
