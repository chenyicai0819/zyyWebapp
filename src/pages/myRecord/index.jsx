import {Component} from "react";
import TabBar from "../common/tabBar";
import { View, Button, Text,Image } from '@tarojs/components'
import Taro　from '@tarojs/taro';
import './index.less'
import {AtIcon,AtAvatar } from 'taro-ui';
import {APIBASEURL} from "../../constants/global";
import {BASEURL} from "../../constants/global";

class Index extends Component{
  constructor(props){
    super(props)
    this.state={
      username:'',
      avatarUrl:'',
      openid:'',
    }
  }
  // 组件被加载的时候立即调用
  componentDidMount() {
    Taro.getStorage({
      key: '__userInfo__',
      success:(res)=> {
        this.setState({
          username:res.data.nickName,
          avatarUrl:res.data.avatarUrl
        })
        console.log(res.data);
      }
    })

    Taro.getStorage({
      key: 'openid',
      success:(res)=> {
        // console.log('get userinfo from storage: ',res.data.openid)
        this.setState({
          openid:res.data.openid
        })
        console.log(res.data);
      }
    })
  }
  ClickName(){
    console.log("点击了名字");
    if(this.state.openid === ''){
      Taro.navigateTo({url:'./wxLogin'})
    }
  }
  ClickMore(){
    console.log("点击了更多");
    Taro.navigateTo({
      url:`/pages/myRecord/personData`
    })
  }
  ClickWDGH(){
    console.log("点击了我的挂号");
    Taro.navigateTo({
      url:'/pages/myRegistration/index'
    })
  }
  ClickJZRGL(){
    console.log("点击了就诊人管理");
    Taro.navigateTo({
      url:'/pages/myPatient/index'
    })
  }
  ClickJKDA(){
    console.log("点击了健康档案");
    Taro.navigateTo({
      url:'/pages/myRecord/healthRecords'
    })
  }
  ClickDZBL(){
    console.log("点击了电子病历");
    Taro.navigateTo({
      url:'/pages/myRecord/medicalRecord'
    })
  }
  ClickJZFY(){
    console.log("点击了就诊费用");
    Taro.navigateTo({
      url:'/pages/myRecord/medicalExpenses'
    })
  }
  clickWDSC(){
    console.log("点击了我的收藏");
    Taro.getStorage({
      key: 'openid',
      success:(res)=> {
        console.log("OPENID为");
        console.log(res.data);
      }
    })
  }
  clickXGPJ(){
    console.log("点击了效果评价");
  }
  clickTZBSJL(){
    console.log("点击了体质辨识记录");
  }
  // 显示用户名字

  render() {
    return(
      <View className='at-row index'>
        <View className='at-col at-col-12'>

          {/*头像一栏*/}
          <View className='at-row header head-por'>
            <View className='at-col at-col-3 header-img'>
              <AtAvatar circle='true' image={this.state.openid != ''?this.state.avatarUrl:''}></AtAvatar>
            </View>
            <View  className='at-col at-col-6 header-name'>
              <Text onClick={this.ClickName.bind(this)}>{this.state.openid != '' ? this.state.username : '登录/注册'}</Text>
            </View>
            <View className='at-col at-col-3 header-more'>
              <AtIcon value='chevron-right' color='#FFF' onClick={this.ClickMore}></AtIcon>
            </View>
          </View>
          {/*挂号和就诊*/}
          <View className='at-row head-por'>
            <View className='at-row mycomfor'>
              <View className='at-col head-por line_right' onClick={this.ClickWDGH}>
                <Image className='myRegister' src={`${BASEURL}myRecord/u1227.svg`} />
                <Text className='Text-center'>我的挂号</Text>
              </View>
              <View className='at-col head-por' onClick={this.ClickJZRGL}>
                <Image className='myRegister' src={`${BASEURL}myRecord/u1230.svg`} />
                <Text className='Text-center'>就诊人管理</Text>
              </View>
            </View>
          </View>
          {/*健康数据*/}
          <View className='at-row head-por'>
            <View className='at-row health-box'>
              <View className='at-col at-col-12'>
                <View className='at-row'>
                  <View className='Textbox'>健康数据</View>
                </View>
                <View className='at-row health-data'>
                  <View className='at-col at-col-12'>
                    <View className='at-row img-box'>
                      <View className='at-col health-items'>
                        <Image className='health-img' src={`${BASEURL}myRecord/u1251.svg`} onClick={this.ClickJKDA}/>
                        <Text className='health-items-title'>健康档案</Text>
                      </View>
                      <View className='at-col health-items'>
                        <Image className='health-img' src={`${BASEURL}myRecord/u1252.svg`} onClick={this.ClickDZBL}/>
                        <Text className='health-items-title'>电子病历</Text>
                      </View>
                      <View className='at-col health-items'>
                        <Image className='health-img' src={`${BASEURL}myRecord/u1253.svg`} onClick={this.ClickJZFY}/>
                        <Text className='health-items-title'>就诊费用</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/*我的服务*/}
          <View className='at-row head-por'>
            <View className='at-row service-box'>
              <View className='at-col at-col-12'>
                <View className='at-row'>
                  <View className='Textbox'>我的服务</View>
                </View>
                <View className='at-row myservice-box'>
                  <View className='at-col at-col-12'>
                    {/*我的收藏*/}
                    <View className='at-row myservice' onClick={this.clickWDSC}>
                      <View className='at-col at-col-3 img-collection'>
                        <Image className='img-collection' src={`${BASEURL}myRecord/u1237.svg`} />
                      </View>
                      <View className='at-col at-col-7'>
                        <Text className='Text-collection'>我的收藏</Text>
                      </View>
                      <View className='at-col at-col-2 service-ico'>
                        <AtIcon value='chevron-right' color='#a9a9a9'></AtIcon>
                      </View>
                    </View>
                    {/*效果评价*/}
                    <View className='at-row myservice' onClick={this.clickXGPJ}>
                      <View className='at-col at-col-3 img-collection'>
                        <Image className='img-collection' src={`${BASEURL}myRecord/u1248.svg`} />
                      </View>
                      <View className='at-col at-col-7'>
                        <Text className='Text-collection'>效果评价</Text>
                      </View>
                      <View className='at-col at-col-2 service-ico'>
                        <AtIcon value='chevron-right' color='#a9a9a9'></AtIcon>
                      </View>
                    </View>
                    {/*体制记录*/}
                    <View className='at-row myservice' onClick={this.clickTZBSJL}>
                      <View className='at-col at-col-3 img-collection'>
                        <Image className='img-collection' src={`${BASEURL}myRecord/u1243.svg`}/>
                      </View>
                      <View className='at-col at-col-7'>
                        <Text className='Text-collection'>体质辨识记录</Text>
                      </View>
                      <View className='at-col at-col-2 service-ico'>
                        <AtIcon value='chevron-right' color='#a9a9a9'></AtIcon>
                      </View>
                    </View>
                  </View>

                </View>
              </View>
            </View>
          </View>
        </View>
        <TabBar tabBarCurrent={3} />
      </View>
    )
  }
}

export default Index
