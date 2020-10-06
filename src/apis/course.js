import req from './https.js';

/** 全部課程
 * GET
 * /class
 * @returns {string} classId
 * @returns {number} createAt
 * @returns {string(base64)} imgUrl
 * @returns {string} intro
 * @returns {number} isOpen (0/1 未開啟/開啟) 只給1
 * @returns {number} sectionNum 主題數
 * @returns {string} teacherName
 * @returns {string} topic 課程名稱
 * @returns {number} type (0/1 公開/非公開)   只給1
 */
export const getAllClass = () => req('get', '/class');

/**我的課程  (已加選課程)
 * GET
 * /client
 * @params  {string}  accessToken  //header
 * @returns {string}  classId
 * @returns {string(base64)} imgUrl
 * @returns {string}  topic
 * @returns {string}  intro
 * @returns {number}  sectionNum
 * @returns {number}  type (0/1 公開/非公開)
 * @returns {string}  teacherName
 * @returns {number}  createAt
 */
export const getMyClass = () => req('get', '/user');

/**加選課程
 * PUT
 * /client/addclass
 * @param {string} invite
 */
export const postAddClass = (invite) => req('get', `/invite/${invite}`);


/**
 * 搜尋非公開課程 用邀請碼
 * GET
 * /invite/:invite
 */
export const getNotOpenClass = (invite) => req('get', `/invite/${invite}`);
