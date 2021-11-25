const express = require('express')
const app = express()
***REMOVED***

app.get('/', (req, res) => {
   res.send('Hello, world!')
***REMOVED***

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`)
***REMOVED***