const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.json({"message": "hellow"})
})

const PORT = process.env.PORT  || 3333

app.listen(PORT, console.log(`Server on ${PORT}`))