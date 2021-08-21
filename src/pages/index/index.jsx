import { Component } from 'react'
import Taro　from '@tarojs/taro';
import { connect } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'
import {getUser,grant} from "../../common/auth";
import {AtSearchBar} from 'taro-ui'
import Header from './header'
import HeaderSwiper from './homeSwiper'
import TabBar from "../common/tabBar";
import IndexIcon from "./indexIcon";
import HomeMidCon from "./homeMidCon";
import HomeHotList from "./homeHotList";


import { add, minus, asyncAdd } from '../../actions/counter'

import './index.less'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({

}))
class Index extends Component {

  constructor (props) {
    super(props);
  }
  componentDidMount(){
    // 判断用户登陆状态
    Taro.checkSession({
      success: function () {
        //存在登陆态
        //获取用户itemcode并存在本地中
        new Promise((resolve,reject)=> {
          getUser()
          resolve()
        }).then(()=>{
        })
      },
      fail: function () {
        //不存在登陆态
        //判断用户是否授权
        grant()
      }
    })

    //获取用户地理位置
    Taro.getLocation({
      type: 'gcj02',
      success: function (res) {
      }
    })
  }


  render () {
    return (
      <View className='index'>
        <Header/>
        <HeaderSwiper/>
        <IndexIcon/>
        <HomeMidCon/>
        <HomeHotList/>

        <TabBar tabBarCurrent={0} />
      </View>
    )
  }
}

export default Index

