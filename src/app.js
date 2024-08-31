const express = require('express')
const morgan = require('morgan')
const authRoutes = require('./routes/authRoutes')

const app = express()

// Middleware
app.use(morgan('dev'))
app.use(express.json())

// Rutas
app.use('/api/auth', authRoutes)

module.exports = app

// app.get('/', (req, res) => {
//   res.send('API is running...')
// })
