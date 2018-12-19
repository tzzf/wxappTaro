import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { AtToast } from "taro-ui";
import MovieItem from '../../components/movie';
import './index.scss';

@connect(({list}) => ({
  list,
}))
export default class List extends Component {
  config = {
    navigationBarTitleText: '榜单',
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
      type: 'list/getList',
      payload: {},
      hideLoading: () => {
        this.setState({
          isLoading: false,
        })
      }
    })
  };
  onReachBottom = () => {
    this.setState({
      isLoading: true,
    })
    const { dispatch, list: { start } } = this.props;
    dispatch({
      type: 'list/getList',
      payload: {
        start,
      },
      hideLoading: () => {
        this.setState({
          isLoading: false,
        })
      }
    })
  }

  render() {
    const { list: { list } } = this.props;
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
