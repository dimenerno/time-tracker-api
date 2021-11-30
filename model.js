const mongoose = require("mongoose")

const schema = new mongoose.Schema({
   categories: {
      Study: {
         type: String,
         default: '0'
      },
      Read: {
         type: String,
         default: '0'
      },
      Work: {
         type: String,
         default: '0'
      },
      Exercise: {
         type: String,
         default: '0'
      },
      Leisure: {
         type: String,
         default: '0'
      }
   },
   date: {
      type: String
   }
})

const RecordModel = mongoose.model("record", schema)
module.exports = RecordModel