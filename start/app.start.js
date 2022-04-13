const { bold } = require('kleur')

const start = (app, port, router) => {
    console.log(bold().cyan('=> Booting express server ...'))
    console.log(bold().white('The server run at port:'), bold().green(port))

    app.use('/', router)

    app.listen(port)
}

module.exports = start