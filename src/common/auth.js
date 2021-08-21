import Taro from "@tarojs/taro";

export const getUser = () => {
  Taro.getStorage({
    key: 'openid',
    success: (res) => {
      // 获取用户信息
      //getinfobyopenid(res.data.openid) //真实
      getinfobyopenid(res.data) //测试
    }
  })
}

const getinfobyopenid = (openid) => {
  Taro.request({
    url: "https://www.juntaitec.cn/api/getUserDetail",
    data: {
      openid: openid
    },
    header: {
      'content-type': 'application/json'
    },
    method: 'GET',
    dataType: 'json',
    credentials: 'include',
    success:(res)=>{
      Taro.setStorage({
        key:'__itemcode__',
        data:res.data.data.itemcode
      })
    },
    fail: function (errMsg) {
      Taro.showToast({
        title: '服务器请求错误',
        icon: 'none',
        duration: 3000
      })
    }
  })
}

export const grant=()=>{
  // 检查用户是否授权
  Taro.getSetting({
    success: function(res) {
      if (res.authSetting['scope.userInfo']) {
        //
        Taro.getUserInfo({
          success: (res)=> {
            // 我这里实现的是在用户授权成功后，调用微信的 wx.login 接口，从而获取code
            //将用户信息存储到Storage里
            let userInfo = res.userInfo
            if(userInfo != null){
              Taro.setStorage({
                key: '__userInfo__',
                data: userInfo
              })
            }
            //登录
            login()
          }
        });
      } else {
        // 用户没有授权
      }
    }
  });
}

export async function login(){
  //登录
  Taro.login({
    success: res => {
      var code = res.code
      // 使用code换取openid 和 userinfo
      Taro.request({
         // url: `${APIBASEURL}/users/wxlogin?code=${code}`, //真实
        url: `https://api.weixin.qq.com/sns/jscode2session?appid=wxd3c24b7e40ae6891&secret=705be83e0c700924b1fa61f61d1e8eee&js_code=${code}&grant_type=authorization_code`,
        data: {
        },
        header: {
          'content-type': 'application/json'
        },
        success: (res)=> {
          const sessionKeyAndOpenid = JSON.parse(`${res.data.data}`)
          Taro.setStorage({
            key:　'openid',
            data:　sessionKeyAndOpenid
          })
          //console.log('完成登录! openid = %s', sessionKeyAndOpenid.openid)
          //获取用户的itemcode并存在storage里
          getUser()
        }
      })
    }
  });

}
