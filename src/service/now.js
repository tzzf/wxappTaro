import Request from '../utils/request';

const getNow = (data) => Request({
    url: 'v2/movie/in_theaters',
    method: 'GET',
    data,
});

export {
    // eslint-disable-next-line import/prefer-default-export
    getNow
}
