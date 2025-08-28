import { createServer } from 'node:http'
import { readFileSync } from 'node:fs'

const server = createServer((req, res) => {
  res.statusCode = 200 //set to successful result
  res.setHeader('Content-Type', 'application/json') //set header to json
  res.end(readFileSync('backend/users.json'))
})

const host = 'localhost'
const port = 3000

//make the server listen to 'localhost' (ip) and port (3000)
server.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`)
})
