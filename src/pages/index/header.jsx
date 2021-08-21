import {Component} from 'react'
import {connect} from 'react-redux'
import {View, Button, Text} from '@tarojs/components'
import {AtSearchBar} from 'taro-ui'
import './header.less'
import './index.less'
import {search} from "../../actions/search";
import Taro from "@tarojs/taro";

@connect(() => ({}), (dispatch) => ({
  search(keyword, condition, pageNum, pageSize) {
    dispatch(search(keyword, condition, pageNum, pageSize));
  }
}))
class Header extends Component {
  constructor() {
    console.log("执行了constructor")
    super(...arguments);
    this.state = {
      keyword: '',
      pageNum: 1,
      pageSize: 20,
    }
  }

  change(keyword) {
    console.log("执行了change")
    this.setState({
      keyword: keyword
    })
  }

  doSearch() {
    console.log("执行了doSearch")
    this.props.search(this.state.keyword, '', 1, 20)
    Taro.setStorage({
      key: 'conditionKey',
      data: {
        keyword: this.state.keyword,
        condition: ''
      }
    })
  }

  render() {
    return (
      <view>
        <AtSearchBar
          placeholder="搜索国医堂"
          actionName='搜索'
          value={this.state.keyword}
          onChange={this.change.bind(this)}
          onActionClick={this.doSearch.bind(this)}
          className='search-input'
        />
      </view>
    )
  }
}


export default Header
