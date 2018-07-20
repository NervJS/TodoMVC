import Taro, { Component } from '@tarojs/taro'
import { View, CheckboxGroup, Checkbox, Label } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { bindActionCreators } from 'redux'

import * as TodoActions from '../../actions'
import Footer from '../../components/f/Footer'
import TodoList from '../t/TodoList'
import { getCompletedTodoCount } from '../../selectors'

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
export default class MainSection extends Component {
  onCheckClickHandler = () => {
    const { actions } = this.props
    actions.completeAllTodos()
  }

  onChangeHandler = () => {}

  render () {
    const { todosCount, completedCount, actions } = this.props
    return (
      <View className='main'>
        {
          !!todosCount &&
          <CheckboxGroup onChange={this.onChangeHandler}>
            <Label className='toggle-all-label' onClick={this.onCheckClickHandler}>
              <Checkbox className='toggle-all' checked={completedCount === todosCount} />
            </Label>
          </CheckboxGroup>
        }
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
