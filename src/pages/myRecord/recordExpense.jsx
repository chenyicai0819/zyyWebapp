import {Component} from "react";
import {Text, View} from "@tarojs/components";
import './medicalRecord.less'
import TabBar from "../common/tabBar";
import {MEDICALRECORD} from "../../constants/global";
import moment from 'moment'
import Taro from '@tarojs/taro';
import PropTypes from 'prop-types'

class RecordExpense extends Component {

  constructor (props) {
    super(props)
    this.state = {
      open: false,
      patientDetailItemid:'',
      patient_Name:'',
      patientDetailItemCode:'',
      patientDetailDate:'',
      formNo:''
    }
  }

  // 点击查看
  handleView=(event)=>{
    let patientDetailItemid = ''
    let formNo = ''

    this.setState({
      //电子病历表的itemid
      patientDetailItemid: event.target.dataset.itemId,
      formNo: event.target.dataset.formNo
    },()=>{
      patientDetailItemid = this.state.patientDetailItemid
      formNo = this.state.formNo
    })

    if(this.props.toTarget === MEDICALRECORD){
      // 电子病历
      Taro.navigateTo({
        // url:`/pages/myRecord/elecMedRec/detail?formNo=${formNo}`
        url:`/pages/myRecord/elecMedRec/detail?formNo=${formNo}`
      })
    }else{
      Taro.navigateTo({
        // url:`/pages/myRecord/medicalExpenses/detail?formNo=${formNo}`
        url:`/pages/myRecord/medicalExpenses/detail?formNo=${formNo}`
      })
    }
  }
  render() {
    let medicalList=this.props.medicalList
    return (
      <View className='at-row medical'>
        <View className='at-col at-col-12'>
          {/*姓名*/}
          <View className='at-row medi-content'>
            <View className='at-row medi-name'>
              <Text className='per-name'>患者姓名：</Text>
              <Text className='per-name-2'>{this.props.defaultpatientName}</Text>
            </View>
          </View>
          {/*标题*/}
          <View className='at-row medi-content'>
            <View className='at-row thead'>
              <View className='at-col at-col thead'>
                <Text className='per-name-3'>机构名称</Text>
              </View>
              <View className='at-col at-col thead'>
                <Text className='per-name-3'>就诊日期</Text>
              </View>
              <View className='at-col at-col thead'>
                <Text className='per-name-3'>操作</Text>
              </View>
            </View>
          </View>
          {/*内容*/}
          {
            (medicalList||[]).map((medicalList,index)=>{
              return(
                <View className='at-row medi-content'>
                  <View className={3 % 2 === 0 ? 'at-row tbody' : 'at-row tbody2'}>
                    <View className={3 % 2 === 0 ? 'at-col at-col-4 tbody' : 'at-col at-col-3 tbody2'}>
                      <Text className='per-name-4 orgstyle'>{medicalList.visitOrgName}</Text>
                    </View>
                    <View className={3 % 2 === 0 ? 'at-col at-col-4 tbody' : 'at-col at-col-5 tbody2'}>
                      <Text className='per-name-4'>{moment(medicalList.visitDtime).format('YYYY-MM-DD')}</Text>
                    </View>
                    <View className={3 % 2 === 0 ? 'at-col at-col-4 tbody' : 'at-col at-col-4 tbody2'}>
                      <Text
                        className='look'
                        data-formNo={medicalItem.outpatFormNo}
                        onClick={this.handleView.bind(this)}
                      >查看</Text>
                    </View>
                  </View>
                </View>
              )
            })
          }
        </View>
        <TabBar tabBarCurrent={3}/>
      </View>

    )
  }
}

// 当获取不到父组件传过来的值时
RecordExpense.defaultProp={
  parent: null,
  toTarget: ''
}
// 检查父组件传过来的值
RecordExpense.propTypes = {
  medicalList: PropTypes.array.isRequired,
  defaultpatientName: PropTypes.string.isRequired
}

export default RecordExpense
