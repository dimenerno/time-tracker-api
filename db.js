const RecordModel = require('./model')

/** returns `id` and `categories` of today data */
function getToday(callback) {
   const todayDate = (new Date()).toISOString().split('T')[0]

   RecordModel.find({ date: todayDate }, (err, res) => {
      if (res.length === 0) {
         const newItem = new RecordModel({date: todayDate***REMOVED***
         newItem.save((err, res) => {
            callback(newItem.categories, newItem._id)
         ***REMOVED***
      } else {
         callback((res[0]).categories, (res[0])._id)
      }
   ***REMOVED***
}

/** returns `categories` and `id` of `date` data
 * `date` is of form 'YYYY-MM-DD'
*/
function getDate(date, callback) {

   RecordModel.find({ date: date }, (err, res) => {
      if (res.length === 0) {
         const newItem = new RecordModel({date: date***REMOVED***
         newItem.save((err, res) => {
            callback(newItem.categories, newItem._id)
         ***REMOVED***
      } else {
         callback((res[0]).categories, (res[0])._id)
      }
   ***REMOVED***
}

function add(name, callback) {
   const newItem = new RecordModel({
      name
   ***REMOVED***;
   newItem.save((error, result) => {
      callback(result)
   ***REMOVED***
}

function remove(id, callback) {
   RecordModel.deleteOne({ _id: id }, () => {
      callback();
   ***REMOVED***;
}

/** increment `category` for `delta` amount of time */
function update(category, delta, callback) {
   getToday((categories, id) => {
      var updateObj = {}
      updateObj[`categories.${category}`] = (parseInt(categories[category]) + delta).toString()
      RecordModel.updateOne({ _id: id }, {$set: updateObj}, () => callback())
   ***REMOVED***
}


module.exports = {
   getToday,
   add,
   remove,
   update,
   getDate
}