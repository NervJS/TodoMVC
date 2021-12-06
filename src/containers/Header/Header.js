import React from 'react'
import { View, Text, Image } from '@tarojs/components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TodoTextInput from '../../components/TodoTextInput/TodoTextInput'
import FilterLink from '../FilterLink/FilterLink'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/TodoFilters'
import * as TodoActions from '../../actions'
import Arrow from '../../assets/icon_left_arrow.png'
import './Header.scss'

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

@connect(
  () => ({}),
  mapDispatchToProps
)
class Header extends React.Component {
  onCheckClickHandler = () => {
    console.log('onCheckClickHandler')
    const {actions} = this.props
    actions.completeAllTodos()
  }

  onSaveHandler = (text) => {
    if (text.length !== 0) {
      this.props.actions.addTodo(text)
    }
  }

  render () {
    return (
      <View className='header'>
        <View className='header-title-wrap'>
          <Text className='title'>todos</Text>
        </View>
        <View className='filters'>
          {Object.keys(FILTER_TITLES).map((filter, index) =>
            <View key={index} className='filters-item'>
              <FilterLink filter={filter} />
            </View>
          )}
        </View>
        <View className='textinput-wrap'>
          <Image src={Arrow} className='textinput-wrap-icon' onClick={this.onCheckClickHandler}>❯</Image>
          <View className='textinput-wrap-input'>
            <TodoTextInput
              className='textinput-wrap-input'
              newTodo
              onSave={this.onSaveHandler}
              placeholder='What needs to be done?'
            />
          </View>
        </View>
      </View>
    )
  }
}

export default Header
