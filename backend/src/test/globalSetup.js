//setup a in-memory mongodb database
import { MongoMemoryServer } from 'mongodb-memory-server'

export default async function globalSetup() {
  const instance = await MongoMemoryServer.create({
    binary: {
      version: '6.0.4',
    },
  })
  //global instance
  global.__MONGOINSTANCE = instance

  //add environment to Node
  process.env.DATABASE_URL = instance.getUri()
}
