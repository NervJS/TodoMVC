import React from 'react'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as TodoActions from '../../actions'
import Footer from '../../components/Footer/Footer'
import TodoList from '../TodoList/TodoList'
import { getCompletedTodoCount } from '../../selectors'

import './MainSection.scss'

const mapStateToProps = state => ({
  todosCount: state.todos.length,
  completedCount: getCompletedTodoCount(state)
})


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class MainSection extends React.Component {
  onCheckClickHandler = () => {
    const { actions } = this.props
    actions.completeAllTodos()
  }

  onChangeHandler = () => {}

  render () {
    const { todosCount, completedCount, actions } = this.props
    return (
      <View className='main'>
        <TodoList />
        {
          !!todosCount &&
          <Footer
            completedCount={completedCount}
            activeCount={todosCount - completedCount}
            onClearCompleted={actions.clearCompleted}
          />
        }
      </View>
    )
  }
}

export default MainSection
