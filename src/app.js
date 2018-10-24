import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducers'
import Index from './pages/index'

import './app.scss'

// 支付宝小程序不需要引用 @tarojs/async-await
if (Taro.getEnv() !== Taro.ENV_TYPE.ALIPAY) {
  require('@tarojs/async-await')
}

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware()
  // other store enhancers if any
))

class App extends Component {
  config = {
    pages: [
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Provider store={store}>
        <Index/>
      </Provider>
    )
  }
}

Taro.render(<App/>, document.getElementById('app'))
