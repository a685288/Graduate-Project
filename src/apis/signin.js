import req from './https.js';

/** 登入
 * @param {string} token
 * @return {string} accesstoken
 */
export const postSignIn = (params) => req('post', '/auth/signin', params);
// signIn({
//   token: 賦予的值
// }).then(res => {
// });