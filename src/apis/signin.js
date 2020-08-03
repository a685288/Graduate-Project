import req from './https.js';

export const getDatta = () => req('get', 'https://jsonplaceholder.typicode.com/posts');
export const postData = (params) => req('post', '/auth/signin', params);
