const start = (app, port) => {
    console.log('Yay you\'re on rails !')
    console.log(`The server run at port: ${port}`)

    app.listen(port)
}

module.exports = start