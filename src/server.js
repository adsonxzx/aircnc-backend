const express = require('express')
const app = express()
const routes = require('./routes')

require('./database/mongoose')

app.use(express.json())
app.use(routes)

const PORT = process.env.PORT  || 3333

app.listen(PORT, console.log(`Server on ${PORT}`))