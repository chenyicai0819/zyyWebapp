import {Component} from "react";
import {View} from "@tarojs/components";
import Taro　from '@tarojs/taro';

class Test extends Component{
  componentDidMount(){
    Taro.request({

    })
  }
  render() {
    return(
      <View>测试后台读取数据,打开这个界面时从后台拿到数据</View>
    )
  }
}
export default Test
