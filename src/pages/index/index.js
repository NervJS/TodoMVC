import React, { Component } from 'react'
import { View } from '@tarojs/components'

import Header from '../../containers/Header/Header'
import MainSection from '../../containers/MainSection/MainSection'

import './index.scss'

class Index extends Component {

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='todaoapp'>
        <Header />
        <MainSection />
      </View>
    )
  }
}

export default Index
