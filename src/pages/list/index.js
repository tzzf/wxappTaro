import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { AtToast } from "taro-ui";
import MovieItem from '../../components/movie';
import './index.scss';

@connect(({list, loading}) => ({
  list,
  loading: loading.models.list
}))
class List extends Component {
  config = {
    navigationBarTitleText: '榜单',
  };


  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'list/getList',
      payload: {},
    })
  };
  onReachBottom = () => {
    const { dispatch, list: { start } } = this.props;
    dispatch({
      type: 'list/getList',
      payload: {
        start,
      },
    })
  }

  render() {
    const { list: { list }, loading } = this.props;
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

export default List;
