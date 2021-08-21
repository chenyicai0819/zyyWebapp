import {Component} from "react";
import './homeMidCon.less'
import Taro from "@tarojs/taro";
class HomeMidCon extends Component{

  click(){
    Taro.reLaunch({
      url: '/pages/hotSpot/test'
    });
  }

  render() {
    return(
      <view className='at-row  home-mid-content' >
        <view className='at-col at-col-6 home-mid-img1'>
          <view className='home-mid-knowledge' onClick={this.click}>
            <text className='home-mid-know at-col--wrap'>中医健康管理知识宣教</text>
          </view>
        </view>
        <view className='at-col at-col-6 home-mid-img2'>
          <view className='home-mid-judge'>
            <text className='home-mid-physical'>【体质辨识】</text>
            <text className='home-mid-physical-table'>判定量表</text>
          </view>
        </view>

      </view>
    )
  }
}
export default HomeMidCon
