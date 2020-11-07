import req from './https.js';

/**取得課程的所有章節名稱
 * GET
 * /section/${id}/titlelist
 * @param {*} classId
 * @returns {Array} data
 * @returns {string} sectionId
 * @returns {string} title
 */
export const getSectionTitle = (sectionId) => req('get',`/section/${sectionId}/titlelist`)


/**取得測驗內容(不含答案)
 * GET
 * /section/${sectionId}/exam
 * @returns {String} sectionId
 * @returns {String} title
 * @returns {String} url
 * @returns {Number} type
 * @returns {Array} question
 *   @returns {String} questionId
 *   @returns {Array} content
 *   @returns {Array} select
 *   @returns {} type
 *   @returns {Number} sort
 */
export const getExamContent = (sectionId) =>
  req('get', `/section/${sectionId}/exam`);

/**給我答案
 * GET
 * /question/answer/:sectionId
 */
export const getExamAns = (sectionId) =>
  req('get', `/question/answer/${sectionId}`);

/**建立考試進度&課程進度
 * @returns {string} classId
 * @returns {string} sectionId
 * @returns {Array} selects
 *  @returns {Array} 答案選項
 */
export const postExamRecord = (params) =>
  req('post', `/record`,params);