import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import TodoTextInput from '../components/TodoTextInput'
import FilterLink from './FilterLink'
import { addTodo } from '../actions'

import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}


@connect(
  () =>({}),
  (dispatch) => ({
    addTodo (text) {
      dispatch(addTodo(text))
    }
  })
)
export default class Header extends Component {
  onSaveHandler = (text) => {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render () {
    return (
      <View className='header'>
        <View className='title'>todos</View>
        <View className='filters'>
          {Object.keys(FILTER_TITLES).map(filter =>
            <View key={filter} className='filters-item'>
              <FilterLink filter={filter} />
            </View>
          )}
        </View>
        <TodoTextInput
          newTodo
          onSave={this.onSaveHandler}
          placeholder='What needs to be done?' />
      </View>
    )
  }
}
