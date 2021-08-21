import {Component} from "react";
import {Text, View} from "@tarojs/components";
import './detail.less'

class Detail extends Component{
  render() {
    return(
      <View className='medRecord-content'>
        {/*门诊信息*/}
        <View className='detail-layout-one'>
          <View className='detail-patient'>
            <Text>{'电子病历-门诊信息'}</Text>
          </View>
          <View>
            <View className='med-line-height'>
              <Text className='detail-title'>就诊机构：</Text>
              <Text className='detail-text'>桂电医院</Text>
            </View>
            <View className='med-line-height'>
              <Text className='detail-title'>就诊科室：</Text>
              <Text className='detail-text'>桂电101</Text>
            </View>
            <View className='med-line-height'>
              <Text className='detail-title'>就诊医师：</Text>
              <Text className='detail-text'>张医生</Text>
            </View>
            <View className='med-line-height'>
              <Text className='detail-title'>就诊时间：</Text>
              <Text className='detail-text'>2021-06-01 周二 上午</Text>
            </View>

            <View className='med-line-height'>
              <Text className='detail-title'>门诊诊断：</Text>
              <Text className='detail-text'>感冒病</Text>
            </View>
            <View className='med-line-height'>
              <Text className='detail-title'>诊断日期：</Text>
              <Text className='detail-text'>2021-06-01 周二 上午</Text>
            </View>
            <View>
              <View>
                <Text className='detail-title'>健康问题评估：</Text>
              </View>
              <View>
                <Text className='detail-text'>打一顿就好了</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
export default Detail
