import mongoose from 'mongoose'
export function initDatabase() {
  const DATABASE_URL = 'mongodb://localhost:27017/blog'

  //wire up an event for when a connection is established
  mongoose.connection.on('open', () => {
    console.info('connected to: ', DATABASE_URL)
  })

  const connection = mongoose.connect(DATABASE_URL)
  return connection
}
