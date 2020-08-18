import req from './https.js';

/** 全部課程
 * GET
 * /class
 * @return {string} id              classID
 * @return {string(base64)} imgUrl
 * @return {string} topic
 * @return {string} intro
 * @return {number} sectionNum
 * @return {} type (0/1 公開/非公開)
 * @return {string} teacherName
 * @return {number} createAt
 */
export const allClass = () => req('get', 'class');

/**我的課程  (已加選課程)
 * GET
 * /client/:id(clientID)  
 * @param {string}  accesstoken
 * @returns {string} id
 * @return {string(base64)} imgUrl
 * @return {string} topic
 * @return {string} intro
 * @return {number} sectionNum
 * @return {} type (0/1 公開/非公開)
 * @return {string} teacherName
 * @return {number} createAt
 */
// export const myClass = ()

/**加選課程
 * PUT
 * /client/addclass
 * @param {string} uid
 * @param {string} classId
 */
// export const additional =