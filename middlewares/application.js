const { cyan } = require('kleur')
const pathLogger = (req, _res, next) => {
  console.log(cyan(`starting /${req.method} ${req.originalUrl} ...`))
  next()
}

module.exports = { pathLogger }