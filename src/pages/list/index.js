import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { AtToast, AtCard } from "taro-ui"
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
              // <View className="content" key={item.id}>
                
              // </View>
              <AtCard
                className='AtCard'
                key={item.id}
                note={item.genres}
                extra={`评分：${item.rating.average || '暂无评分'}`}
                title={item.title}
              >
                <Image  src={item.images.small} className='movie-pic' />
              </AtCard>
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
