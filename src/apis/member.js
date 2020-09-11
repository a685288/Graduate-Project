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

/**
 * 更新 user name
 * PUT
 * /client/updatename
 * @param {string} name
 */
export const updateName = (params) => req('put', '/client/updatename', params);
