import {Component} from "react";
import {Button, Picker, View} from "@tarojs/components";
import {AtButton, AtForm, AtInput, AtList, AtListItem} from 'taro-ui'
import moment from "moment";
import './patientRegistration.less'

/**
 * 添加就诊人界面
 */
class PatientRegistration extends Component{
  constructor() {
    super();
    this.state={
      region: ['请选择省市区>'],
      maritalStatusSelector: ['已婚', '未婚'],
      selectCheckedMaritalStatus: '请选择婚姻>',
      birthDate: moment().format('YYYY-MM-DD'),
      relationShipList: ['本人', '父母', '爱人', '子女', '其他'],
      chooseRelationship: 0,
      sexList: ['男', '女'],
      chooseSex: 0,
      chooseIdCardType: '请选择类型>',
      IdCardTypeList: ['居民身份证', '港澳台身份证'],
      chooseDefaultPatient: false,
      idcardNo: '',
      patientName: '',
      adress: '',
      phone: '',
      gender: '男',
      relationship: '本人',//关系
      userCode: '',
      defaultPatient: '0',
    }
  }
  // 身份证类型
  onChangeIdCardType=e=>{
    this.setState({
      chooseIdCardType:this.state.IdCardTypeList[e.detail.value]
    });
  }
  // 输入身份证
  onChangeIdCard(idcardNo){
    this.setState({
      idcardNo:idcardNo
    })
  }
  // 输入姓名
  onChangePatientName(patientName){
    this.setState({
      patientName:patientName
    })
  }
  // 性别
  onChooseSex(index,sexItem){
    this.setState({
      chooseSex: index,
      gender:sexItem
    });
  }
  // 出生日期
  onDataChange=e=>{
    this.setState({
      birthDate: e.detail.value
    });
  }
  // 省市区
  bindRegionChange=e=>{
    this.setState({
      region:e.detail.value
    })
  }
  // 具体地址
  onChangeAdress(adress){
    this.setState({
      adress:adress
    })
  }
  // 选择婚姻
  onChangeMaritalStatus=e=>{
    this.setState({
      selectCheckedMaritalStatus:this.state.maritalStatusSelector[e.detail.value]
    })
  }
  // 电话号码
  onChangePhone(phone){
    this.setState({
      phone:phone
    })
  }
  // 关系
  onChooseRelationShip(index,relationshipItem){
    this.setState({
      chooseRelationship: index,
      relationship:relationshipItem
    });
  }
  // 设为默认就诊人
  onchangeRadio(){
    const {chooseDefaultPatient} = this.state
    this.setState({
      chooseDefaultPatient: !chooseDefaultPatient
    })
    if (this.state.chooseDefaultPatient){
      this.setState({
        defaultPatient:'1'
      })
    }else{
      this.setState({
        defaultPatient:'0'
      })
    }
  }
  // 提交保存
  onSubmit(){
    console.log("保存");
  }

  render() {
    let sexlist=this.state.sexList
    let relationShiplist=this.state.relationShipList
    return(
      <View className='patient-info-main'>
        {/*实名登记*/}
        <View className='patient-prompt-info'>
          <text>请进行实名登记</text>
        </View>
        {/*填信息表单*/}
        <AtForm className='patient-register-form' border={false} onSubmit={this.onSubmit.bind(this)}>
          {/*选择身份类型*/}
          <Picker mode='selector' range={this.state.IdCardTypeList} onChange={this.onChangeIdCardType}>
            <AtList hasBorder={false}>
              <AtListItem
                hasBorder={false}
                className='confirm-picker-item border-line'
                title='身份证类型'
                extraText={this.state.chooseIdCardType}
              />
            </AtList>
          </Picker>
          {/*身份证*/}
          <View className='border-line'>
            <AtInput
              className='patient-input-font'
              name='idcardNo'
              border={false}
              title='身份证'
              type='idcard'
              placeholder='请输入证件号码'
              value={this.state.idcardNo}
              onChange={this.onChangeIdCard.bind(this)}
            />
          </View>
          {/*姓名*/}
          <View className='border-line'>
            <AtInput
              className='patient-input-font patient-register-font'
              name='patientName'
              border={false}
              title='就诊人姓名'
              type='text'
              placeholder='请输入就诊人姓名'
              value={this.state.patientName}
              onChange={this.onChangePatientName.bind(this)}
            />
          </View>
          {/*选择性别*/}
          <View className='patient-register-sex-main at-row'>
            <View className='at-col'>
              <text className='patient-register-sex'>性别</text>
            </View>
            <View className='at-row at-col-4 offset_col-8'>
              {
                sexlist.map((sexItem, index) =>{
                  return (
                    <AtButton className={[this.state.chooseSex===index?'patient-choose-sex-btn':'patient-sex-btn']} key={index} onClick={this.onChooseSex.bind(this,index,sexItem)}>
                      {sexItem}
                    </AtButton>
                  )
                })
              }
            </View>
          </View>
          {/*年龄*/}
          <View className='border-line'>
            <Picker mode='date' start='1900-01-01' onChange={this.onDataChange}>
              <AtList hasBorder={false}>
                <AtListItem
                  className='confirm-picker-item'
                  hasBorder={false}
                  title='出生日期'
                  extraText={this.state.birthDate}
                />
              </AtList>
            </Picker>
          </View>
          {/*省市区*/}
          <View className='border-line'>
            <Picker onChange={this.bindRegionChange} mode='region' value={this.state.region}>
              <AtList hasBorder={false}>
                <AtListItem
                  className='confirm-picker-item'
                  hasBorder={false}
                  title='所居住的省市区'
                  extraText={this.state.region}
                />
              </AtList>
            </Picker>
          </View>
          {/*详细地址*/}
          <View className='border-line'>
            <AtInput
              className='patient-input-font patient-register-font'
              name='adress'
              title='详细地址'
              border={false}
              type="text"
              placeholder='乡镇,村、街道、小区、门牌号等'
              value={this.state.adress}
              onChange={this.onChangeAdress.bind(this)}
            />
          </View>
          {/*婚姻状况*/}
          <View className='border-line'>
            <Picker mode='selector' range={this.state.maritalStatusSelector} onChange={this.onChangeMaritalStatus}>
              <AtList hasBorder={false}>
                <AtListItem
                  className='confirm-picker-item'
                  hasBorder={false}
                  title='婚姻状况'
                  extraText={this.state.selectCheckedMaritalStatus}
                />
              </AtList>
            </Picker>
          </View>
          {/*分割线*/}
          <View className='border-distance' />
          {/*手机号码*/}
          <View className='border-line' >
            <AtInput
              className='patient-input-font patient-register-font'
              name='phone'
              title='手机号码'
              type='number'
              maxlength='11'
              minlength='11'
              border={false}
              placeholder='请输入手机号码'
              value={this.state.phone}
              onChange={this.onChangePhone.bind(this)}
            />
          </View>
          {/*分割线*/}
          <View className='border-distance' />
          {/*关系*/}
          <View className='border-distance patient-register-font patient-register-relationship'>
            <View className='patient-register-relation-title'><text>关系</text></View>
            <View className='at-row at-col-12 patient-relation patient-register-font'>{
              relationShiplist.map((relationshipItem, index) =>{
                return (
                  <AtButton className={[this.state.chooseRelationship===index?'patient-choose-relation-btn':'patient-relation-btn']} key={index} onClick={this.onChooseRelationShip.bind(this,index,relationshipItem)}>
                    {relationshipItem}
                  </AtButton>
                )
              })
            }
            </View>
          </View>
          {/*设为默认就诊人*/}
          <View className='patient-register-default-people'>
            <text>设为默认就诊人</text>
            <radio
              className='patient-register-default-radio'
              color='#855713'
              value={this.state.defaultPatient}
              checked={this.state.chooseDefaultPatient}
              onClick={this.onchangeRadio.bind(this)}
            />
          </View>
          {/*分割线*/}
          <View className='border-distance' />
          {/*保存按钮*/}
          <Button border={false} className='patient-save-btn' formType='submit'>保存</Button>
        </AtForm>
      </View>
    )
  }
}
export default PatientRegistration
