import Taro from '@tarojs/taro'
import React from 'react'
import { View, Text } from '@tarojs/components'

import './Footer.scss'

export default class Footer extends React.Component {

  onClearCompleted = () => {
    console.log('onClearCompleted')
    this.props.onClearCompleted()
  }

  render () {
    const {activeCount, completedCount} = this.props
    const itemWord = activeCount === 1 ? 'item' : 'items'
    return (
      <View className='footer'>
        <View className='footer-content'>
          <Text className='todo-count'>
            {activeCount || 'No'}{' '}{itemWord} left
          </Text>
          {
            !!completedCount &&
            <Text
              className='clear-completed-text'
              onClick={this.onClearCompleted}
            >
              Clear completed
            </Text>
          }
        </View>
      </View>
    )
  }
}
