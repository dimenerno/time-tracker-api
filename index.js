const express = require('express')
const cors = require("cors")
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const db = require('./db')
const db_url = 'localhost:27017/time'
const app = express()
const port = 9000

mongoose.connect(db_url, {
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
   const todayDay = (new Date()).getDate();
   const todayMonth = (new Date()).getMonth() + 1;
   const todayYear = (new Date()).getFullYear();
   const new_json = req.body

   db.update(new_json.category, new_json.time, todayDay, todayMonth, todayYear, () => res.send('ok'))
})

app.get('/', (req, res) => {
   const requestedDay = req.query.day
   const requestedMonth = req.query.month
   const requestedYear = req.query.year

   if(req.query.day)
      db.getData(requestedDay, requestedMonth, requestedYear, (categories, id) => res.send(categories))
   else if(req.query.month)
      db.getDataByMonth(requestedMonth, requestedYear, (categories) => res.send(categories))
   else
      db.getDataByYear(requestedYear, (categories) => res.send(categories))
})

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`)
})