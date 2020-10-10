import req from './https.js';
/**取得測驗內容(不含答案)
 * GET
 * /section/${sectionId}/exam
 * @returns {String} sectionId
 * @returns {String} title        單元標題
 * @returns {String} url
 * @returns {Number} type
 * @returns {Array } question
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
export const submitExamAns = (sectionId) =>
  req('get', `/question/answer/${sectionId}`);
