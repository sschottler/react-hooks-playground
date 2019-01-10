const jsonServer = require('json-server')
const db = require('./data.json')
const server = jsonServer.create()
server.use(jsonServer.defaults())

const router = jsonServer.router(db)
server.use(router)

// server.listen(3777)
server.listen()

console.log('JSON Server API listening')
