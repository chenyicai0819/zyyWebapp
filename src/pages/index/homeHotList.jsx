import {Component} from "react";
import './homeHotList.less'
import Taro from '@tarojs/taro'
import {Image, RichText, ScrollView, Text, View} from "@tarojs/components";
import {APIBASEURL, NOIMAGEURL} from "../../constants/global";

class HomeHotList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 1,
      pageSize: 10,
      hotSpotList: [],
      chooseDataType: ''
    }
  }

  moreHotSpotMsg() {
    Taro.navigateTo({
      url: '/pages/hotSpot/hotSpotIndex'
    });
  }

  _onScrollToLower() {
    const {pageNum} = this.state;
    this.setState({
      pageNum: pageNum + 1
    });
    this.reloadList(this.state.chooseDataType, this.state.pageNum)
  }

  toHotHospitalDetail(itemcode) {
    Taro.navigateTo({
      url: '/pages/hotSpot/hotSpotDetail?id=' + itemcode
    })
  }

  componentDidMount() {
    this.reloadList('', 1)
  }

  reloadList(dataType, pageNum) {
    let oldList = this.state.hotSpotList;
    Taro.request({
      // url: `${APIBASEURL}/hotSpotList`,
      url: `${APIBASEURL}hotSpotList`,//测试
      data: {
        hotSpotDataType: dataType,
        pageNum: pageNum,
        pageSize: this.state.pageSize
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'GET',
      dataType: 'json',
      credentials: 'include',
      success: (res) => {
        let list = [...oldList];
        console.log("dataType: ", dataType);
        console.log("list: ", res.data);
        let dataItem = res.data.data.map((item) => {
          list.push(item);
          return item
        });
        this.setState({
          hotSpotList: list
        });
      },
      fail: function (errMsg) {
        Taro.showToast({
          title: '服务器请求错误',
          icon: 'none',
          duration: 3000
        })
      }
    });

  }

  render() {
    let hotSpotList = this.state.hotSpotList;
    const scrollStyle = {
      height: '620px'
    };
    const scrollTop = 0;
    const Threshold = 180;
    return (
      <View>
        <View className='at-row at-col-12 home-hot-title-content'>
          <Text className='home-hot-title'>今日热点</Text>
          <View className='home-hot-more' onClick={this.moreHotSpotMsg}>
            <Text className='home-hot-more-title'>更多</Text>
            <View className='at-icon at-icon-chevron-right'></View>
          </View>
        </View>
        {
          <View className='home-hot-contentList'>
            <ScrollView
              // 允许纵向移动
              scrollY={true}
              className='hos-list'
              // 在设置滚动条位置时使用过渡动画
              scrollWithAnimation={true}
              // 设置纵向滚动条位置
              scrollTop={scrollTop}
              style={scrollStyle}
              // 距离底部多少时触发事件
              lowerThreshold={Threshold}
              // 距离顶部多少时触发事件
              upperThreshold={Threshold}
              // 移动到底部时发生
              onScrollToLower={this._onScrollToLower.bind(this)}
            >
              {
                // map映射，将原数组映射成一个新的数组
                (hotSpotList || []).map((hotSpotItem, index) => {
                    return (
                      <View>
                        <View className='at-row at-col-12 home-hot-content'>
                          <View className='at-row at-col-12 home-hot-item'
                                onClick={this.toHotHospitalDetail.bind(this, hotSpotItem.itemcode)}>
                            <View className='at-col at-col-4'>
                              <Image
                                className='at-article__img hot-item-img'
                                src={hotSpotItem.filePath == null ? NOIMAGEURL : hotSpotItem.filePath}
                                mode='aspectFill'/>
                            </View>
                            <View className='at-col at-col-8 hot-item-text'>
                              <View className='home-hot-text'>
                                <View className='home-hot-text-title-name'>
                                  <text className='home-hot-text-title'>{hotSpotItem.hotspotTitle}</text>
                                </View>
                                <View className=''>
                                  <text className='home-hot-date'>{hotSpotItem.itemcreateatString}</text>
                                </View>
                              </View>
                              <RichText nodes={hotSpotItem.hotspotContent} className='at-col--wrap home-hot-intro'/>
                            </View>
                          </View>

                        </View>
                        {
                          (index + 1) == hotSpotItem.totalDate ?
                            <View className='home-hot-least-title'>
                              <text className='home-hot-least-title-text'>我也是有底线的</text>
                            </View> : ''
                        }
                      </View>

                    );
                  }
                )
              }
            </ScrollView>
          </View>
        }
      </View>

    )
  }
}

export default HomeHotList
