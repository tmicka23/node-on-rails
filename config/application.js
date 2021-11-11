const core = require('express')

const app = core()

app.use(core.json())

module.exports = {
    app,
    core
}