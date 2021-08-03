import {Component} from "react";
import TabBar from "../common/tabBar";

class HealthRecords extends Component{

  render() {
    return(
      <view>
        <text>
          健康档案
        </text>
        <TabBar tabBarCurrent={2} />
      </view>
    )
  }
}

export default HealthRecords
