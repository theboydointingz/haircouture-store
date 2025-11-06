import { MongoClient } from 'mongodb'
const uri = process.env.MONGODB_URI
let cached = global._mongoClientPromise
if (!cached) {
  const client = new MongoClient(uri)
  cached = client.connect()
  global._mongoClientPromise = cached
}
export default cached
