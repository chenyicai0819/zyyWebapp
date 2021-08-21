import {Component} from "react";
import {Image, Text, View} from "@tarojs/components";
import './patientManagerList.less'
import { AtRadio } from 'taro-ui'
import {BASEURL} from "../../constants/global";
import moment from "moment";

class PatientManagerListItem extends Component{
  constructor(props) {
    super(props);
    this.state={
      userCode:this.props.userCode,
    }
  }

  render() {
    let patientItem=this.props.patientItem;
    return(
      <View className='patient-main patient-manager-content-font-size'>
        <View className='patient-manager-content'>
          <View className='patient-item-distance'>
            <Text className='patient-name'>{patientItem.patientName}</Text>
            <Text>{moment().year()-moment(patientItem.birthDate).format('yyyy')}岁</Text>
          </View>
          <View className='patient-item-distance'>
            <Text>身份证号：</Text>
            <Text>{patientItem.idcardNo}</Text>
          </View>
          <View className='patient-item-distance'>
            <Text>住址：</Text>
            <Text>{patientItem.adressPro === patientItem.adressCity ? `${patientItem.adressPro}` : `${patientItem.adressPro + patientItem.adressCity}`}{patientItem.adressCountry}{patientItem.adress}</Text>
          </View>
          <View className='at-row patient-item-distance icon-item patient-img-border'>
            <View className='at-col'>
              <radio className='evaluate-msg-checkbox-radio'
                     color='#855713'
                     value='r1'
              />
              <Text>默认就诊人</Text>
            </View>
            <View className='at-col at-col__offset-2' >
              <Image className='patient-operation-icon' src={`${BASEURL}myPatient/u1865.svg`} />
              <text>编辑</text>
            </View>
            <View className='at-col'>
              <Image className='patient-operation-icon' src={`${BASEURL}myPatient/u1867.svg`} />
              <text>删除</text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

PatientManagerListItem.defaultProps = {
  parent: null,
  patientItem: null,
  index: 0,
  checkedIndex: 0,
  userCode:''
}

export default PatientManagerListItem
