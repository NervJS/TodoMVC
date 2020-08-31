import React from 'react'
import { connect } from 'react-redux'
import { View } from '@tarojs/components'
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
class TodoList extends React.Component {
  render () {
    const { filteredTodos } = this.props
    console.log(filteredTodos)
    return (
      <View className='todo-list'>
        {filteredTodos.map((todo) =>
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodo={this.props.actions.deleteTodo}
            onEditTodo={this.props.actions.editTodo}
            onCompleteTodo={this.props.actions.completeTodo}
          />
        )}
      </View>
    )
  }
}

export default TodoList