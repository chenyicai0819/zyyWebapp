import {Component} from "react";
import {View} from "@tarojs/components";
import './medicalExpenses.less'
import RecordExpense from "./recordExpense";
import Taro　from '@tarojs/taro';
import {APIBASEURL, MEDICALRECORD} from "../../constants/global";

/**
 * 就诊费用
 */
class MedicalExpenses extends Component{
  constructor(props) {
    super(props);
    this.state={
      defaultpatienName:'',
      patientList:[],
      medicalList:[],
      patientCode:'',
      patientItemCode:'',
      idCardNo:''
    }

  }

  componentDidMount() {
    Taro.getStorage({
      key:'openid',
      success:(res)=>{
        Taro.request({
          url:`${APIBASEURL}getUserDetail`,
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
          success:(res)=>{
            console.log("就诊费用");
            console.log(res);
            this.setState({
              defaultpatientName:res.data.data.name
            })
            this.getMedicalList(res.data.data.idcardNo)
          },
          fail:(errMsg)=>{
            Taro.showToast({
              title:"服务器请求错误",
              icon:'none',
              duration:3000
            })
          }
        })
      }
    })
  }

  // 获取列表
  getMedicalList=(idcardNo)=>{
    Taro.request({
      url: APIBASEURL+"/medRecordList",
      data:{
        idcardNo: idcardNo
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      credentials: 'include',
      success: (res) => {
        this.setState({
          medicalList: res.data.data
        })
        console.log('身份证号：',idcardNo)
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
    let defaultpatienName=this.state.defaultpatientName;
    return(
      <View className='at-row medical'>
        <RecordExpense parent={this} medicalList={medicalList} defaultpatientName={defaultpatienName} toTarget={MEDICALRECORD}/>
      </View>
    )
  }
}
export default MedicalExpenses
