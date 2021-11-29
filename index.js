const express = require('express')
const cors = require("cors")
const bodyParser = require('body-parser')

const app = express()
***REMOVED***

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false ***REMOVED***);
app.use(bodyParser.json());

const report = {
   Study: 0,
   Read: 0,
   Work: 0,
   Exercise: 0,
   Leisure: 0
}

app.post('/', (req, res) => {
   const json = req.body
   report[json.category] += json.time
   console.log(report)
   res.send(report)
***REMOVED***

app.get('/', (req, res) => {
   res.send({report: report***REMOVED***
***REMOVED***

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`)
***REMOVED***