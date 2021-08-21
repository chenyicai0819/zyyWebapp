import {Component} from "react";
import {Button, View} from "@tarojs/components";
import TabBar from "../common/tabBar";
import './index.less'
import PatientManagerList from "./patientManagerList";
import Taro　from '@tarojs/taro';

/**
 * 就诊人管理
 */
class Index extends Component{
  // 在Index组件收到新的属性之前调用
  componentWillReceiveProps(nextProps, nextContext) {
    console.log("就诊人管理");
    console.log(this.props, nextProps);
  }

  // 添加就诊人
  clickAddPatient(){
    Taro.navigateTo({
      url:'/pages/myPatient/patientRegistration'
    })
  }
  render() {
    return(
      <View className='patient-index'>
        <PatientManagerList/>
        <View className='patient-index-button'>
          <Button className='patient-add-button' onClick={this.clickAddPatient.bind(this)}>添加就诊人</Button>
        </View>
        <TabBar tabBarCurrent={3} />
      </View>
    )
  }
}
export default Index
