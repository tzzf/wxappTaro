import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { AtToast } from "taro-ui";
import MovieItem from '../../components/movie';
import './index.scss';

@connect(({now, loading}) => ({
  now,
  loading: loading.models.now
}))
class Now extends Component {
  config = {
    navigationBarTitleText: '最新',
  };
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'now/getNow',
      payload: {},
    })
  };

  render() {
    const { now: { list }, loading } = this.props;
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
export default Now