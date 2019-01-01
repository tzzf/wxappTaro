import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { AtToast } from "taro-ui";
import MovieItem from '../../components/movie';
import './index.scss';

@connect(({hot, loading}) => ({
  hot,
  loading: loading.models.hot
}))
class HotMovie extends Component {
  config = {
    navigationBarTitleText: '热映中',
  };
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'hot/getHot',
      payload: {},
    })
  };

  render() {
    const { hot: { list }, loading } = this.props;
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
          isOpened={!!loading}
          status='loading'
          text='正在加载'
          hasMask
        >
        </AtToast>
      </View>
    )
  }
}

export default HotMovie