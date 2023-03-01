const express = require('express')
const app = express()
const SERVER_PORT = 8080

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(SERVER_PORT, () =>
    console.log(`App is listening on port ${SERVER_PORT}!`)
)
