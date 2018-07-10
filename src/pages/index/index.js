import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import Header from '../../containers/Header'
import MainSection from '../../containers/MainSection'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: 'TODO List'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='todoapp'>
        <Header />
        <MainSection />
      </View>
    )
  }
}

export default Index
