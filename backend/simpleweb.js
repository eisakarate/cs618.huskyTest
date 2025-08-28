import { createServer } from 'node:http'

const server = createServer((req, res) => {
  res.statusCode = 200 //set to successful result
  res.setHeader('Content-Type', 'text/plain') //set header as test
  res.end('Hello from Node.js Server') //set a result response
})

const host = 'localhost'
const port = 3000

//make the server listen to 'localhost' (ip) and port (3000)
server.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`)
})
