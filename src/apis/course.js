import req from './https.js';

/** 全部課程
 * GET
 * /class
 * @returns {string} classID
 * @returns {number} createAt
 * @returns {string(base64)} imgUrl
 * @returns {string} intro
 * @returns {number} isOpen (0/1 未開啟/開啟)
 * @returns {number} sectionNum 主題數
 * @returns {string} teacherName
 * @returns {string} topic 課程名稱
 * @returns {number} type (0/1 公開/非公開)
 */
export const getAllClass = () => req('get', '/class');

/**我的課程  (已加選課程)
 * GET
 * /client/:id(clientID)
 * @param   {string}  accesstoken
 * 
 * @returns {string}  id
 * @returns {string(base64)} imgUrl
 * @returns {string}  topic
 * @returns {string}  intro
 * @returns {number}  sectionNum
 * @returns {number}  type (0/1 公開/非公開)
 * @returns {string}  teacherName
 * @returns {number}  createAt
 */
// export const getMyClass = (id) => req('get', '/client/${id}');

/**加選課程
 * PUT
 * /client/addclass
 * @param {string} uid
 * @param {string} classId
 */
// export const postAddclass = (uid, classId) => req('post', '/client/addclass');

