import clientPromise from '../../lib/mongodb'
export default async function handler(req, res) {
  const client = await clientPromise
  const db = client.db('hairshop')
  if (req.method === 'GET') {
    const products = await db.collection('products').find({}).limit(50).toArray()
    return res.json(products)
  }
  if (req.method === 'POST') {
    const product = req.body
    const result = await db.collection('products').insertOne(product)
    return res.json({ insertedId: result.insertedId })
  }
  res.status(405).end()
}
