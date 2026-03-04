/**
 * @typedef {Object} ShopCheck
 * @property {string} shopUrl
 * @property {boolean} httpsCheck
 * @property {boolean} reachableCheck
 * @property {boolean} imprintCheck
 * @property {boolean} fakeShopCheck
 * @property {Date} checkedAt
 */

/**
 * @param {import('aws-lambda').APIGatewayEvent} event
 * @returns {Promise<import('aws-lambda').APIGatewayProxyResult>}
 */
const handler = async (event) => {
  const queryParams = event.queryStringParameters

  const shopUrl = queryParams['shopUrl']

  /** @type {ShopCheck} */
  const shopCheck = {
    shopUrl,
    httpsCheck: await httpsCheck(shopUrl),
    reachableCheck: await reachableCheck(shopUrl),
    imprintCheck: await imprintCheck(shopUrl),
    fakeShopCheck: await fakeShopCheck(shopUrl),
    checkedAt: new Date(),
  }

  return {
    statusCode: 200,
    body: JSON.stringify(shopCheck),
  }
}

/**
 * @param {string} shopUrl
 * @returns {Promise<boolean>}
 */
const httpsCheck = async (shopUrl) => {
  return shopUrl.length > 5
}

/**
 * @param {string} shopUrl
 * @returns {Promise<boolean>}
 */
const reachableCheck = async (shopUrl) => {
  return shopUrl.length > 5
}

/**
 * @param {string} shopUrl
 * @returns {Promise<boolean>}
 */
const imprintCheck = async (shopUrl) => {
  return shopUrl.length > 5
}

/**
 * @param {string} shopUrl
 * @returns {Promise<boolean>}
 */
const fakeShopCheck = async (shopUrl) => {
  return shopUrl.length > 5
}

module.exports = {
  handler,
}
