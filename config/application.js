const core = require('express')
const cors = require('cors')
const { pathLogger } = require('../middlewares/application')

const app = core()

app.use(core.json())
app.use(cors())
app.use(pathLogger)

module.exports = {
    app,
    core
}