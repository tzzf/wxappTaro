import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss';

export default class Movie extends Component {
  config = {
    navigationBarTitleText: '电影',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View className='about-page'>
        <View>电影</View>
      </View>
    )
  }
}
