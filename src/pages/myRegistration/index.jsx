import {Component} from 'react'
import {Text, View} from "@tarojs/components";
import Registration from "./registration";
import './index.less'
import TabBar from "../common/tabBar";
import Taro　from '@tarojs/taro';
import {APIBASEURL} from "../../constants/global";

class Index extends Component{
  constructor (props) {
    super(props)
    this.state = {
      registrations: []
    }
  }
  componentDidMount(){
    Taro.getStorage({
      key: '__itemcode__',
      success:(res)=>{
        const itemcode=res.data;
        Taro.request({
          //url:`http://rap2api.taobao.org/app/mock/data/2042147`,
          url:`${APIBASEURL}myRegisters/${itemcode}`,
          header: {
          'content-type': 'application/json' // 默认值
          },
          method: 'GET',
          dataType: 'json',
          credentials: 'include',
          success: (res) => {
            console.log("我的挂号");
            console.log(res);
            console.log(res.data);
            console.log(res.data.data);
            this.setState({
              registrations: res.data.data
            })
            console.log("<>>" + this.state.registrations)
            if (this.state.registrations && this.state.registrations.length==0){
              Taro.showToast({
                title: '您没有挂号记录！',
                icon: 'none',
                duration: 3000
              })
            }
          },
          fail: function (errMsg) {
            Taro.showToast({
              title: '服务器请求失败!',
              icon: 'none',
              duration: 3000
            })
          }
        })
      }
    })
  }

  render() {
    let registrations = this.state.registrations;
      return(
      <View className='index-registration'>
        {
          // 将registrations数组转化为另外一个数组
          registrations.map((registration,index)=>{
            let classNames={};
            switch (registration.registerType){
              case'0':
                classNames = {
                  stateClass: 'ord-state',
                  numberClass: 'ord-number state-ord-techno-number card'
                }
                break;
              case '1':
                classNames = {
                  stateClass: 'state',
                  numberClass: 'number state-ord-techno-number card'
                }
                break;
              case '2':
                classNames = {
                  stateClass: 'techno-state',
                  numberClass: 'techno-number state-ord-techno-number card'
                }
                break;
            }
            return <Registration registration={registration} key={index} index={index} className={classNames}/>;
          })
        }
        <TabBar tabBarCurrent={3} />
      </View>
    )
  }
}
export default Index
