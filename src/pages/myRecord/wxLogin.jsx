import React, { Component } from 'react'
import { View,Image,Text,Button} from '@tarojs/components'
import Taro　from '@tarojs/taro';
import './wxLogin.less'
import {BASEURL,APIBASEURL} from "../../constants/global";


class WXLogin extends Component {

  constructor(props){
    super(props)
    this.state={
      openid:''
    }
  }

  //获取用户的openID，在数据库中查找是否存在该用户
  getuseropenid(){
    Taro.getStorage({
      key: 'openid',
      success: result => {
        Taro.request({
          url: `https://www.juntaitec.cn/api/users`,
          data: {
            wxOpenId: result.data.openid
          },
          method: 'GET',
          header: {
            'content-type': 'application/json'
          },
          success: (res) =>{
            if(res.data.code === 502){
              Taro.navigateTo({url:'/pages/myRecord/personData'})
            }else{
              Taro.reLaunch({url:'/pages/index/index'})
            }
          },
          fail: (err) => {
            console.error('从数据库获取不到openID')
          }
        });
      }
    })
  }

  userLoin(){
    Taro.login({
      success: res => {
        // 获取到用户的 code 之后：res.code
        var code = res.code
        console.log("code为");
        console.log(code);


        Taro.request({
          url: `https://api.weixin.qq.com/sns/jscode2session?appid=wxd3c24b7e40ae6891&secret=705be83e0c700924b1fa61f61d1e8eee&js_code=${code}&grant_type=authorization_code`,
          data: {
          },
          header: {
            'content-type': 'application/json'
          },
          success: (res)=> {
            console.log('>>>>微信的提供的接口直接获取的信息：')

            const sessionKeyAndOpenid=res.data.openid
            // const sessionKeyAndOpenid = JSON.parse(`${res.data.data}`)
            console.log(res);
            console.log(res.data.openid)
            //console.log(sessionKeyAndOpenid);
            Taro.setStorage({
              key:　'openid',
              //data:　sessionKeyAndOpenid //真实
              data:'ojPDl5EwxtmU8G_DBOgLtJJhTvhQ'//测试
            })
            //console.log('完成登录! openid = %s', sessionKeyAndOpenid.openid)
            //获取用户的openID，在数据库中查找是否存在该用户
            this.getuseropenid()
          }
        })
      }
    })
  }

  bindGetUserInfo(e){
    if (e.detail.userInfo) {
      //用户按了允许授权按钮

      new Promise((resolve,reject)=> {
        //用户登录获取openid
        this.userLoin()
        resolve()
      }).then(()=>{
      })
      console.log(e.detail.userInfo);
      Taro.setStorage({
        key: '__userInfo__',
        data: e.detail.userInfo
      })

    } else {
      //用户按了拒绝按钮
      Taro.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function(res) {
          if (res.confirm) {
            //console.log('用户点击了“返回授权”');
          }
        }
      });
    }
  }

  render(){
    return (
      <View>
        <view>
          <view className='header'>
            <Image src={`${BASEURL}appwx_logo.png`} ></Image>
          </view>
          <view className='wx-content'>
            <view>申请获取以下权限</view>
            <Text>获得你的公开信息(昵称，头像等)</Text>
          </view>
          {/*微信提供的回调是bindgetuserinfo，但是Taro将bind事件都封装成了on事件*/}
          <Button className='bottom' type='primary' openType='getUserInfo'
                  onGetUserInfo={this.bindGetUserInfo.bind(this)}>
            授权登录</Button>
        </view>
      </View>
    );
  }
}

export default WXLogin
