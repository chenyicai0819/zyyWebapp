import {Component} from "react";
import {Image} from "@tarojs/components";
import './indexIcon.less'
import {BASEURL} from "../../constants/global";

class IndexIcon extends Component{
  render() {
    return(
      <view className="at-row icon-content">
        <view className="at-col-4 icon-item">
          <Image className="icon-image" src={`${BASEURL}index/u218.png`}/>
          <text className="icon-text">国医堂</text>
        </view>
        <view className="at-col-4 icon-item">
          <Image className="icon-image" src={`${BASEURL}index/u221.png`}/>
          <text className="icon-text">预约挂号</text>
        </view>
        <view className="at-col-4 icon-item">
          <Image className="icon-image" src={`${BASEURL}index/u224.png`}/>
          <text className="icon-text">智能导诊</text>
        </view>
      </view>
    )
  }
}

export default IndexIcon
