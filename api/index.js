/* module.exports = (req, res) => {
    const { name = 'World' } = req.query
    res.status(200).send(`Hello ${name}!`)
  } */

/* module.exports = ( req,res) => {
   res.send('Respuesta...')
} */""

const express    =require('express')
const mongoose   =require('mongoose')
const bodyParser =require('body-parser')
const cors       =require('cors')

const meals  = require('./routes/meals')
const orders = require('./routes/orders')

const app= express()
app.use(bodyParser.json())
app.use(cors())

// conecta db mongo

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology:true})
/* 
app.get('*', (req, res) => {
  res.send('Servicio OK')
})
 */

app.use('/api/meals', meals)
app.use('/api/orders',orders)

 module.exports = app