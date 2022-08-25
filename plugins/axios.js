import logger from '@/src/utils/logger'

let apiHandler = null;
var styles = {'cyan' : ['\x1B[36m', '\x1B[39m']}
function log (key, obj) {
  if (process.client) return
  if (typeof obj === 'string') {
      console.log(styles[key][0] + '%s' + styles[key][1], obj)
  } else if (typeof obj === 'object') {
      console.log(styles[key][0] + '%o' + styles[key][1], obj)
  } else {
      console.log(styles[key][0] + '%s' + styles[key][1], obj)
  }
}

export default function({ $axios }) {
  try {
    apiHandler = $axios;
    // @ts-ignore
    apiHandler.interceptors.response.use(response => {
        let result = (response && response.data) || {}
        logger.log('>>> response result \n', result);
        return result;
      },
      error => {
        logger.error(error);
      }
    );
    // @ts-ignore
    apiHandler.interceptors.request.use(async (config) => {
      logger.log('>>>request url：')
      log('cyan', config.url)
      logger.log('>>>request data：')
      log('cyan', config.data)
      return config;
    },(error) => {
      logger.error(error)
    })
    return apiHandler
  } catch (error) {
    logger.error(error)
  }
}

export { apiHandler as axios };
