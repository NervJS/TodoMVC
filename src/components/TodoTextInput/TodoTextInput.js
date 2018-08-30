import Taro, { Component } from '@tarojs/taro'
import classnames from 'classnames'
import { Input } from '@tarojs/components'

import './TodoTextInput.scss'

export default class TodoTextInput extends Component {
  state = {
    text: this.props.text || ''
  }

  handleSubmit = e => {
    console.log('handleSubmit', e)
    const text = e.target.value.trim()
    this.props.onSave(text)
    if (this.props.newTodo) {
      this.setState({text: ''})
    }
  }

  handleSubmitKey = e => {
    console.log('handleSubmitKey', e)
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({text: ''})
      }
    }
  }

  handleChange = e => {
    console.log('handleChange', e)
    this.setState({text: e.target.value})
  }

  handleBlur = e => {
    console.log('handleBlur', e)
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value)
    }
  }

  render () {
    return (
      <Input
        className={
          classnames({
            edit: this.props.editing,
            'new-todo': this.props.newTodo
          })}
        placeholderTextColor='#e6e6e6'
        type='text'
        placeholder={this.props.placeholder}
        autoFocus='true'
        confirmType='done'
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmitKey}
        onConfirm={this.handleSubmit}
      />
    )
  }
}
