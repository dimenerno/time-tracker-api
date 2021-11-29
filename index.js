const express = require('express')
const cors = require("cors")
const bodyParser = require('body-parser')
const RecordModel = require('./model')
const mongoose = require('mongoose')
const db = require('./db')

const app = express()
const port = 9000

mongoose.connect('mongodb://localhost:27017', {
   useNewUrlParser: true,
   useUnifiedTopology: true
})

const database = mongoose.connection
database.once('open', function () {
   console.log('DB connected!')
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
   const new_json = req.body
   db.update(new_json.category, new_json.time, () => res.send('ok'))
})

app.get('/', (req, res) => {
   db.getToday(today_json => res.send(today_json))
})

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`)
})