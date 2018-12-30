import Taro, { Component } from '@tarojs/taro';
import { Image } from '@tarojs/components';
import { AtCard } from "taro-ui";
import './index.scss';

class Movie extends Component {
    static defaultProps = {
        item: {
            rating: {},
            images: {}
        },
    };
    goPath = () => {
        const { item } = this.state;
        Taro.navigateTo({
            url: `/moduleMovie/detail/index?id=${item.id}`
        })
    }
    render() {
        const { item } = this.props;
        return (
            <AtCard
              className='AtCard'
              key={item.id}
              note={item.genres}
              extra={`评分：${item.rating.average || '暂无评分'}`}
              title={item.title}
              onClick={this.goPath}
            >
                <Image src={item.images.small} className='movie-pic' />
            </AtCard>
        );
    }
}

export default Movie;
