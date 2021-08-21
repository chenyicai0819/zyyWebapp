import {Component} from "react";
import TabBar from "../common/tabBar";
import {View} from "@tarojs/components";
import './healthRecords.less'

class HealthRecords extends Component{

  render() {
    return(
      <View className='base-color'>
        <View className='text-radio'>
          <text className='title-ins'>个人基本信息</text>
          <view className='input-pad input-pad-bot'>
            <View className='at-row input-pad-bottom'>
              <View className='at-col at-col-1' />
              <View className='at-col at-col-2'>姓名：</View>
              <View className='at-col at-col-8 input-pad-list'></View>
              <View className='at-col at-col-1' />
            </View>
            <View className='at-row input-pad-bottom'><View className='at-col at-col-1' /><View className='at-col at-col-2'>性别：</View><View className='at-col at-col-8 input-pad-list'></View><View className='at-col at-col-1' /></View>
            <View className='at-row input-pad-bottom'><View className='at-col at-col-1' /><View className='at-col at-col-2'>出生日期：</View><View className='at-col at-col-8 input-pad-list'></View><View className='at-col at-col-1' /></View>
            <View className='at-row input-pad-bottom'><View className='at-col at-col-1' /><View className='at-col at-col-2'>证件类型：</View><View className='at-col at-col-8 input-pad-list'></View><View className='at-col at-col-1' /></View>
            <View className='at-row input-pad-bottom'><View className='at-col at-col-1' /><View className='at-col at-col-2'>证件号码：</View><View className='at-col at-col-8 input-pad-list'></View><View className='at-col at-col-1' /></View>
            <View className='at-row input-pad-bottom'><View className='at-col at-col-1' /><View className='at-col at-col-2'>文化程度：</View><View className='at-col at-col-8 input-pad-list'></View><View className='at-col at-col-1' /></View>
            <View className='at-row input-pad-bottom'><View className='at-col at-col-1' /><View className='at-col at-col-2'>户口性质：</View><View className='at-col at-col-8 input-pad-list'></View><View className='at-col at-col-1' /></View>
            <View className='at-row input-pad-bottom'><View className='at-col at-col-1' /><View className='at-col at-col-2'>婚姻状况：</View><View className='at-col at-col-8 input-pad-list'></View><View className='at-col at-col-1' /></View>
            <View className='at-row input-pad-bottom'><View className='at-col at-col-1' /><View className='at-col at-col-2'>民族：</View><View className='at-col at-col-8 input-pad-list'></View><View className='at-col at-col-1' /></View>
            <View className='at-row input-pad-bottom'><View className='at-col at-col-1' /><View className='at-col at-col-2'>移动号码：</View><View className='at-col at-col-8 input-pad-list'></View><View className='at-col at-col-1' /></View>
            <View className='at-row input-pad-bottom'><View className='at-col at-col-1' /><View className='at-col at-col-2'>出生地：</View><View className='at-col at-col-8 input-pad-list'></View><View className='at-col at-col-1' /></View>
            <View className='at-row input-pad-bottom'><View className='at-col at-col-1' /><View className='at-col at-col-2'>既往患病史：</View><View className='at-col at-col-8 input-pad-list at-col--wrap'></View><View className='at-col at-col-1' /></View>
            <View className='at-row input-pad-bottom'><View className='at-col at-col-1' /><View className='at-col at-col-2'>家族患病史：</View><View className='at-col at-col-8 input-pad-list at-col--wrap'></View><View className='at-col at-col-1' /></View>
            <View className='at-row input-pad-bottom'><View className='at-col at-col-1' /><View className='at-col at-col-2'>患者与本人关系：</View><View className='at-col at-col-8 input-pad-list'></View><View className='at-col at-col-1' /></View>
          </view>
        </View>

        <TabBar tabBarCurrent={2} />
      </View>
    )
  }
}

export default HealthRecords
