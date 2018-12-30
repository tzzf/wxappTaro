import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { AtToast } from "taro-ui";
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({detail}) => ({
  detail,
}))
export default class Weather extends Component {
  config = {
    navigationBarTitleText: '详情',
  };
  state = {
    isLoading: false,
  }

  componentDidMount = () => {
    this.setState({
      isLoading: true,
    })
    const { id } = this.$router.params;
    const { dispatch } = this.props;
    dispatch({
      type: 'detail/getDetail',
      payload: {
        id,
      },
      hideLoading: () => {
        const { detail: { detail } } = this.props;
        wx.setNavigationBarTitle({
          title: detail.title
        });
        this.setState({
          isLoading: false,
        })
      }
    })
  };
  componentWillUnmount = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'detail/clear',
    })
  }

  render() {
    const { detail: { detail } } = this.props;
    const { isLoading } = this.state;
    return (
      <View className='about-page'>
        {
          isLoading ? null : (
            <View>
              <Image src={detail.images.medium} className='movie-pic' />
              <View>
                {detail.summary}
              </View>
            </View>
          )
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
