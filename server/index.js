require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const productCtrl = require('./products_controller')

const { SERVER_PORT, CONNECTION_STRING } = process.env

app.use(express.json())

app.get('/api/product', productCtrl.getAllProducts)
app.get('/api/product/:id', productCtrl.getOneProduct)
app.post('/api/product/', productCtrl.createProduct)
app.put('/api/product/:id', productCtrl.updateProduct)
app.delete('/api/product/:id', productCtrl.deleteProduct)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false,
    },
}).then((dbInstance) => {
    console.log('DB Ready')
    app.set('db', dbInstance)
    app.listen(SERVER_PORT, () => console.log(`Running on port ${SERVER_PORT}`))
})