import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text } from '@tarojs/components'
import { bindActionCreators } from 'redux'

import TodoItem from '../components/TodoItem'

import * as TodoActions from '../actions'
import { getVisibleTodos } from '../selectors'

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
            deleteTodo={this.props.actions.deleteTodo}
            editTodo={this.props.actions.editTodo}
            completeTodo={this.props.actions.completeTodo} />
        )}
      </View>
    )
  }
}
