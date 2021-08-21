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
  permission: {
    "scope.userLocation": {
      "desc": "你的位置信息将用于显示医院距离"
    }
  },
  subPackages:[
    {
      "root": "pages/hotSpot/",
      "pages": [
        "hotSpotIndex",
        "test"
      ]
    },
    {
      "root": "pages/myRecord/",
      "pages": [
        "healthRecords",
        "index",
        "personData",
        "wxLogin",
        "medicalRecord",
        "medicalExpenses",
        "test",
        "elecMedRec/detail"
      ]
    },
    {
      "root": "pages/myRegistration/",
      "pages": [
        'index',
      ]
    },
    {
      "root": "pages/myPatient/",
      "pages": [
        'index',
        "patientRegistration",
      ]
    },
  ]
}
