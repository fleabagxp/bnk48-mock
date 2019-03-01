// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('bnk48_members.json')
const middlewares = jsonServer.defaults()
 
server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})