require('dotenv').config()
const express = require('express')
const morgan = require('morgan')

const app = express()

// Middleware
app.use(morgan('dev'))
app.use(express.json())

// Rutas
app.get('/', (req, res) => {
  res.send('API is running...')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
