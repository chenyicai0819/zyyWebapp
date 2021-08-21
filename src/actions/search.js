import Taro from '@tarojs/taro'

export const search=(keyword, condition, pageNum, pageSize)=>{
  return()=>{
    Taro.request({
      url: `https://www.juntaitec.cn/api/hospitalsByKeyword?keyword=${keyword}&condition=${condition}&pageNum=${pageNum}&pageSize=${pageSize}`,
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success:(res)=>{
        console.log(res.data.data);
      }
    })
  }
}
