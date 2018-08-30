import Taro, { Component } from '@tarojs/taro'
import { View, Checkbox, Label, CheckboxGroup, Text } from '@tarojs/components'
import classnames from 'classnames'

import TodoTextInput from '../TodoTextInput/TodoTextInput'
import './TodoItem.scss'

export default class TodoItem extends Component {
  state = {
    editing: false
  }

  handleSubmit = () => {
    const val = this.state.editText.trim()
    if (val) {
      this.props.onSave(val)
      this.setState({editText: val})
    } else {
      this.props.onDestroy()
    }
  }

  handleDoubleClick = () => {
    this.setState({editing: true})
  }

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.ondeleteTodo(id)
    } else {
      this.props.oneditTodo(id, text)
    }
    this.setState({editing: false})
  }

  handleCompleteTodo = (todo) => {
    console.log('handleCompleteTodo')
    this.props.oncompleteTodo(todo.id)
  }

  render () {
    const {todo} = this.props

    let element
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text} editing={this.state.editing} onSave={this.handleSave.bind(this, todo.id)}/>
      )
    } else {
      element = (
        <View className='view'>
          <CheckboxGroup onChange={this.handleCompleteTodo.bind(this, todo)}>
            <Label className='checkbox-label'>
              <Checkbox className='checkbox' checked={todo.completed}/>
              <Text style={{color: '#4d4d4d'}}>{todo.text}</Text>
            </Label>
          </CheckboxGroup>
        </View>
      )
    }

    return (
      <View className={classnames({
        'list-item': true,
        completed: todo.completed,
        editing: this.state.editing
      })}
      >
        {element}
      </View>
    )
  }
}
