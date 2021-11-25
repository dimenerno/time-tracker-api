const express = require('express')
const cors = require("cors")
const bodyParser = require('body-parser')

const app = express()
***REMOVED***

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false ***REMOVED***);
app.use(bodyParser.json());

const reports = []

app.post('/', (req, res) => {
   reports.push(req.body)
   console.log(reports)
   res.send(req.body)
***REMOVED***

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`)
***REMOVED***