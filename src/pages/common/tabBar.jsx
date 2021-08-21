import React, {Component} from 'react';
import { AtTabBar }  from 'taro-ui'
import Taro from '@tarojs/taro'
import {BASEURL} from '../../constants/global'

class TabBar extends Component{
  constructor () {
    super(...arguments);
    this.state = {
      itemcode: '',
      openid: ''
    }
  }

  handleClick (value) {
    console.log("tabBar ====" +value);
    this.setState({
      current: value
    })
    switch (value) {
      case 0:
        Taro.reLaunch({
          url: '/pages/index/index'
        });
        break;
      case 1:
        Taro.reLaunch({
          url: `/pages/hotSpot/hotSpotIndex`
        });
        break;
      case 2:
        Taro.reLaunch({
          url: `/pages/myRecord/healthRecords`
        });
        break;
      case 3:
        Taro.reLaunch({
          url: '/pages/myRecord/index'
        });
        break;
      default:
        break;
    }
  }

  render() {
    return(
      <view style={{'height':'4rem'}}>
        <AtTabBar
          fixed
          backgroundColor='#ffffff'
          color='#cccccc'
          selectedColor='#d40000'
          tabList={[
            { title: '首页',image:`${BASEURL}common/home.png`,selectedImage:`${BASEURL}common/homeSelected.png`},
            { title: '今日热点',image:`${BASEURL}common/knowledge.png`,selectedImage:`${BASEURL}common/knowledgeSelected.png`},
            { title: '健康档案',image:`${BASEURL}common/health.png`,selectedImage:`${BASEURL}common/healthSelected.png`},
            { title: '我的',image:`${BASEURL}common/self.png`,selectedImage:`${BASEURL}common/selfSelected.png`}
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.props.tabBarCurrent}
        />
      </view>
    )
  }
}

export default TabBar;
