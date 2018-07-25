import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text } from '@tarojs/components'
import { bindActionCreators } from 'redux'

import TodoItem from '../../components/TodoItem/TodoItem'

import * as TodoActions from '../../actions'
import { getVisibleTodos } from '../../selectors'

import './TodoList.scss'

const mapStateToProps = state => ({
  filteredTodos: getVisibleTodos(state)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})


@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class TodoList extends Component {
  render () {
    const { filteredTodos, actions } = this.props
    return (
      <View className='todo-list'>
        {filteredTodos.map(todo =>
          <TodoItem
            key={todo.id}
            todo={todo}
            ondeleteTodo={this.props.actions.deleteTodo}
            oneditTodo={this.props.actions.editTodo}
            oncompleteTodo={this.props.actions.completeTodo}
          />
        )}
      </View>
    )
  }
}
