import {Component} from "react";
import {Image, Swiper, SwiperItem} from '@tarojs/components'
import {BASEURL} from "../../constants/global";

class HomeSwiper extends Component{
  render() {
    return(
      <view className='at-row'>
        <view className='at-col at-col-12'>
          <Swiper
            indicatorDots='true'
            indicatorColor='#fff'
            indicatorActiveColor='#999'
            autoplay='true'
          >
            <SwiperItem key={1}>
              <Image className='swiper-image' src={`${BASEURL}index/u208.png`}/>
            </SwiperItem>
            <SwiperItem key={2}>
              <Image className='swiper-image' src={`${BASEURL}index/u210.png`}/>
            </SwiperItem>
            <SwiperItem key={3}>
              <Image className='swiper-image' src={`${BASEURL}index/u208.png`}/>
            </SwiperItem>
          </Swiper>
        </view>
      </view>
    )
  }
}

export default HomeSwiper
