import req from './https.js';

export const getDatta = () =>
  req('get', 'https://jsonplaceholder.typicode.com/posts');

/** 登入
* @param {string} token
* @return {string} accesstoken
* @return {string} id
*/
export const signIn = (params) => req('post', 'auth/signin', params);
// signIn({
//   token: this.userData.id
// }).then(res => {
// 做取得資料後的處理 
//   this.posts = res.data;
// });