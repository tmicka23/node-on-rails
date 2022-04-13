class BaseController {
  static permittedParams = []

  static sanitizedParams({ body }) {
    const sanitized = {}
    this.permittedParams.forEach((key) => {
      sanitized[key] = body?.[key]
    })
    return sanitized
  }
}

module.exports = BaseController