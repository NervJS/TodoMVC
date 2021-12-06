import Taro from '@tarojs/taro'
import React from 'react'
import classnames from 'classnames'
import { Input } from '@tarojs/components'

import './TodoTextInput.scss'

export default class TodoTextInput extends React.Component {
  state = {
    todoText: this.props.text || ''
  }

  handleSubmit = e => {
    console.log('handleSubmit', e)
    const text = e.detail.value.trim()
    this.props.onSave(text)
    if (this.props.newTodo) {
      this.setState({todoText: ''})
    }
  }

  handleSubmitKey = e => {
    console.log('handleSubmitKey', e)
    const text = e.detail.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({todoText: ''})
      }
    }
  }

  handleChange = e => {
    if (Taro.getEnv() === Taro.ENV_TYPE.WEAPP) return
    console.log('handleChange', e)
    this.setState({todoText: e.detail.value})
  }

  handleInput = e => {
    console.log('handleChange')
    this.setState({todoText: e.detail.value})
  }

  handleBlur = e => {
    console.log('handleBlur', e)
    if (!this.props.newTodo) {
      this.props.onSave(e.detail.value)
    }
  }

  render () {
    return (
      <Input
        id='input1'
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
        value={this.state.todoText}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onInput={this.handleInput}
        onKeyDown={this.handleSubmitKey}
        onConfirm={this.handleSubmit}
      />
    )
  }
}
