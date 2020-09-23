import req from './https.js';

/** 登入
 * @param {string} token
 * @returns {string} accesstoken
 * @returns {string} id
 */
export const postSignIn = (params) => req('post', '/auth/signin', params);
/**
 * 更新 user name
 * PUT
 * /client/updatename
 * @param {string} name
 */
export const updateName = (params) => req('put', '/client/updatename', params);
