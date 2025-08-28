import { writeFileSync, readFileSync } from 'node:fs'
console.log('Starting up')
const users = [{ name: 'Adam Ondra', email: 'test@email.com' }]
const userJson = JSON.stringify(users)
writeFileSync('backend/users.json', userJson) //default behavior is to run asynchronously!  So "writeFile" is run asynchronously
const readUserJson = readFileSync('backend/users.json') //simliarly, "readFile" would have trie dto read asynchrously - no file may be present
const readUsers = JSON.parse(readUserJson)
console.log(readUsers)
