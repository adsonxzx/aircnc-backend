const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')
const path = require('path')

require('./database/mongoose')

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(cors())
app.use(express.json())
app.use(routes)

const PORT = process.env.PORT  || 3333

app.listen(PORT, console.log(`Server on ${PORT}`))