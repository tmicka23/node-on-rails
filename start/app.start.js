const start = (app, port, router) => {
    console.log('Yay you\'re on rails !')
    console.log(`The server run at port: ${port}`)

    app.use('/', router)

    app.listen(port)
}

module.exports = start