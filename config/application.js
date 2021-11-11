const core = require('express')
const cors = require('cors')

const app = core()

app.use(core.json())
app.use(cors())

module.exports = {
    app,
    core
}