import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { AtToast } from "taro-ui";
import MovieItem from '../../components/movie';
import './index.scss';

@connect(({hot}) => ({
  hot,
}))
export default class Movie extends Component {
  config = {
    navigationBarTitleText: '热映中',
  };
  state = {
    isLoading: false,
  }
  componentDidMount = () => {
    this.setState({
      isLoading: true,
    })
    const { dispatch } = this.props;
    dispatch({
      type: 'hot/getHot',
      payload: {},
      hideLoading: () => {
        this.setState({
          isLoading: false,
        })
      }
    })
  };

  render() {
    const { hot: { list } } = this.props;
    const { isLoading } = this.state;
    return (
      <View className='about-page'>
        {
          list.length > 0 ? (
            list.map((item) => (
              <MovieItem item={item} key={item.id} />
            ))
          ) : null
        }
        <AtToast
          isOpened={isLoading}
          status='loading'
          text='正在加载'
          hasMask
        >
        </AtToast>
      </View>
    )
  }
}
