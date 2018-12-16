import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss';

export default class Weather extends Component {
  config = {
    navigationBarTitleText: '天气',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View className='about-page'>
        <View>关于</View>
      </View>
    )
  }
}
