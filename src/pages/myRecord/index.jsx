import {Component} from "react";
import TabBar from "../common/tabBar";

class Index extends Component{
  render() {
    return(
      <view>
        <text>
          我的
        </text>
        <TabBar tabBarCurrent={3} />
      </view>
    )
  }
}

export default Index
