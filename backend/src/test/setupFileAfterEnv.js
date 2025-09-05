import mongoose from 'mongoose'
import { beforeAll, afterAll } from '@jest/globals'
import { initDatabase } from '../db/init'

//before all tests
beforeAll(async () => {
  await initDatabase()
})

//after all tests
afterAll(async () => {
  await mongoose.diconnect()
})
