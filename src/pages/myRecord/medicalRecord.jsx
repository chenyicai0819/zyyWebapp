import {Component} from "react";
import './medicalRecord.less'
import {View} from "@tarojs/components";
import RecordExpense from "./recordExpense";
import './medicalRecord.less'
import {APIBASEURL, MEDICALRECORD} from "../../constants/global";
import Taro　from '@tarojs/taro';

/**
 * 电子病历
 */
class MedicalRecord extends Component{
  constructor(props) {
    super(props);
    this.state = {
      patientsList: [],
      medicalList: [],
      patientCode: '',
      patientItemCode: '',
      defaultpatientName: '',
      idcardNo:'',
    }
  }
  componentDidMount() {
    // 一进来就获取到用户信息
    Taro.getStorage({
      key:'openid',
      success:(res)=>{
        Taro.request({
          url:APIBASEURL+`/getUserDetail`,
          data:{
            // openid:res.data.openid
            openid:res.data
          },
          header: {
            'content-type': 'application/json'
          },
          method: 'GET',
          dataType: 'json',
          credentials: 'include',
          success: (res) => {
            console.log(res);
            this.setState({
              defaultpatientName:res.data.data.name,
            })
            this.getMedicalList (res.data.data.idcardNo);
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
    })
  }

  // 获取电子病历列表
  getMedicalList=(idcardNo)=>{
    Taro.request({
      url:`${APIBASEURL}/medRecordList`,
      data:{
        idcardNo:idcardNo
      },
      header:{
        'content-type': 'application/json'
      },
      method:'GET',
      dataType:'json',
      credentials: 'include',
      success: (res) => {
        console.log("兵力列表");
        console.log(res.data.data);
        this.setState({
          medicalList: res.data.data,
        })
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
    let medicalList=this.state.medicalList;
    let defaultpatientName=this.state.defaultpatientName;
    return(
      <View className='at-row medical'>
        <RecordExpense toTarget={MEDICALRECORD} parent={this} medicalList={medicalList} defaultpatientName={defaultpatientName}/>
      </View>
    )
  }
}
export default MedicalRecord
