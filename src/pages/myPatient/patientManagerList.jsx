import {Component} from "react";
import {View} from "@tarojs/components";
import './patientManagerList.less'
import PatientManagerListItem from "./patientManagerListItem";
import Taro　from '@tarojs/taro';
import {APIBASEURL} from "../../constants/global";

class PatientManagerList extends Component{
  componentWillReceiveProps(nextProps, nextContext) {
  }
  // 构造函数，会在装配之前被使用
  constructor() {
    super(...arguments);
    this.state={
      patients:[],
      userCode:'',
      checkedIndex:''
    }
  }

  // 加载界面时直接调用
  componentDidMount() {
    Taro.getStorage({
      key:'__itemcode__',
      success:(res)=>{
        // 就诊人管理
        console.log(res);
        this.setState({
          userCode:res.data
        })
        //从后端api拿到数据
        Taro.request({
          url:`${APIBASEURL}/patientManager/${res.data}`,
          header:{
            'content-type':'application/json'
          },
          method:'GET',
          dataType:'json',
          credentials:'include',
          success:(rest)=>{
            console.log("就诊人数据");
            console.log(rest);
            this.setState({
              // 将拿到的数据存到patients数组中
              patients:rest.data.data
            })
            // 判断是不是默认就诊人(defaultPatient: "1")
            // 返回默认就诊人的index
            this.state.patients.forEach((patient,index)=>{
              if (patient.defaultPatient==='1'){
                this.setState({
                  checkedIndex:index
                })
              }
            })
          },
          fail:function (errMsg){
            Taro.showToast({
              title: '服务器请求错误',
              icon: 'none',
              duration: 3000
            })
          }
        });
      }
    });
  }

  // 设置默认就诊人
  changeDefaultPatient=(indexNum)=>{
    this.setState({
      checkedIndex:indexNum
    })
  }
  render() {
    let patients=this.state.patients
    return(
      <View className='patient-main patient-manager-content-font-size'>
        {
          patients.map((patientItem,indexNum)=>{
            return(
              <PatientManagerListItem key={indexNum} userCode={this.state.userCode} parent={this} patientItem={patientItem} index={indexNum} checkedIndex={this.state.checkedIndex}/>
            )
          })
        }
      </View>
    )
  }
}
export default PatientManagerList
