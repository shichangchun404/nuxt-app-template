let baseConfig = require('./default')

if (process.env.NODE_ENV === 'development') {
  let args = process.argv.splice(2)
  if (args[0]) {
    baseConfig = Object.assign(baseConfig, { ENV: args[0] })
  }
}
let config = require(`./config_${baseConfig.ENV}`)

module.exports = {
  ...baseConfig,
  ...config
}
