const express = require('express')
const cors = require("cors")
const bodyParser = require('body-parser')

const app = express()
const port = 9000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const reports = []

app.post('/', (req, res) => {
   reports.push(req.body)
   console.log(reports)
   res.send(req.body)
})

app.get('/', (req, res) => {
   res.send({record_arr: reports})
})

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`)
})