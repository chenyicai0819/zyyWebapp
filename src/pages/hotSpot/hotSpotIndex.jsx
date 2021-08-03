import {Component} from "react";
import TabBar from "../common/tabBar";


class HotSpotIndex extends Component{

  render() {
    return(
      <view>
        <text>
          今日热点
        </text>
        <TabBar tabBarCurrent={1} />
      </view>
    )
  }
}

export default HotSpotIndex
