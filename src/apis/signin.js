import req from './https.js';

export const getDatta = () =>
  req('get', 'https://jsonplaceholder.typicode.com/posts');

/** 登入
 * @param {string} idToken
 * @return {string} accesstoken
 * @return {string} id
 */
export const postSignIn = (params) => req('post', '/auth/signin', params);
// signIn({
//   token: 賦予的值
// }).then(res => {
// });