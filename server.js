const express = require('express')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Brand, Product } = require('./models')
const cors = require('cors')

const app = express()

//middleware
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send({ msg: 'This route is being hit' })
})

// Brand routes

// read all brands ---> GET
app.get('/brands', async (req, res) => {
  let allBrands = await Brand.find({})
  res.json(allBrands)
})

// create brand ---> POST
app.post('/brands', async (req, res) => {
  let createdBrand = await Brand.create(req.body)
  res.json(createdBrand)
})

// Products
app.get('/products', async (req, res) => {
  const allProducts = await Product.find({})
  res.json(allProducts)
})

// create a product --> POST
app.post('/products', async (req, res) => {
  let exampleBrandId = '634f1348e411cb0d45730013'
  const requestBody = { ...req.body, brand: exampleBrandId }
  let createdProduct = await Product.create(requestBody)
  res.json(createdProduct)
})

//get one product --> GET
app.get('/products/:id', async (req, res) => {
  let foundProduct = await Product.findById(req.params.id).populate('brand')
  res.json(foundProduct)
})

// update one product --> PUT
app.put('/products/:id', async (req, res) => {
  let updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
  res.json(updatedProduct)
})

// delete one producct --> DELETE
app.delete('/products/:id', async (req, res) => {
  let deletedProduct = await Product.findByIdAndDelete(req.params.id)
  res.json(deletedProduct)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port: ${PORT}`)
})
