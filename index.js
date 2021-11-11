const start = require('./start/app.start')
const { app } = require('./config/application')
const router = require('./config/routes')

const port = 3000

start(app, port, router)
