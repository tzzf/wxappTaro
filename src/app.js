import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import dva from './utils/dva'
import models from './models'
import Movie from './pages/movie'

// import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});
const store = dvaApp.getStore();

class App extends Component {

  config = {
    pages: [
      'pages/movie/index',
      'pages/list/index',
      'pages/weather/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [{
        pagePath: "pages/movie/index",
        text: "电影",
        iconPath: "./images/tab/movie.png",
        selectedIconPath: "./images/tab/movie-active.png"
      },{
        pagePath: "pages/list/index",
        text: "榜单",
        iconPath: "./images/tab/list.png",
        selectedIconPath: "./images/tab/list-active.png"
      }, {
        pagePath: "pages/weather/index",
        text: "天气",
        iconPath: "./images/tab/weather.png",
        selectedIconPath: "./images/tab/weather-active.png"
      }],
      color: '#333',
      selectedColor: '#333',
      backgroundColor: '#fff',
      borderStyle: '#ccc'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Movie />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
