import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { bindActionCreators } from 'redux'
import TodoTextInput from '../../components/TodoTextInput/TodoTextInput'
import FilterLink from '../FilterLink/FilterLink'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/TodoFilters'
import * as TodoActions from '../../actions'
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
export default class Header extends Component {
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
          {Object.keys(FILTER_TITLES).map(filter =>
            <View key={filter} className='filters-item'>
              <FilterLink filter={filter}/>
            </View>
          )}
        </View>
        <View className='textinput-wrap'>
          <Text className='textinput-wrap-icon' onClick={this.onCheckClickHandler}>❯</Text>
          <TodoTextInput
            newTodo
            onSave={this.onSaveHandler}
            placeholder='What needs to be done?'
          />
        </View>
      </View>
    )
  }
}
