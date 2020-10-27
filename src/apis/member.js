import req from './https.js';

/** 登入
 * @param {string} token
 * @returns {string} accesstoken
 * @returns {string} id
 */
export const postSignIn = (params) => req('post', '/auth/user/signin', params);

// 登出
export const postSignOut = () => req('post', "/auth/signout");

/**
 * 更新 user name
 * PUT
 * /user/updatename
 * @param {string} name
 */
export const updateName = (params) => req('put', '/user/updatename', params);
