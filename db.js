const RecordModel = require('./model')

/** Returns `categories` and `id` of input date.
 * If no such data exists, it creates and returns a blank data.
*/
function getData(day, month, year, callback) {
   RecordModel.find({$and: [{day: day}, {month: month}, {year: year}] }, (err, res) => {
      if (res.length === 0) {
         const newItem = new RecordModel({day: day, month: month, year: year})
         newItem.save((err, res) => {
            callback(newItem.categories, newItem._id)
         })
      } else {
         callback((res[0]).categories, (res[0])._id)
      }
   })
}

/** returns `id` and `categories` of today month */
function getDataByMonth(month, year, callback) {
   RecordModel.find({ $and: [{month: month}, {year: year}] }, (err, res) => {
      var agg = {
         'Study': '0',
         'Read': '0',
         'Work': '0',
         'Exercise': '0',
         'Leisure': '0'
      }
      res.forEach((item) => {
         const item_json = item.toJSON()
         for (var category in item_json.categories) {
            agg[`${category}`] = (parseInt(agg[category]) + parseInt(item_json.categories[category])).toString()
         }
      })
      callback(agg)
   })
}

/** returns `id` and `categories` of today month */
function getDataByYear(year, callback) {
   RecordModel.find({ year: year }, (err, res) => {
      var agg = {
         'Study': '0',
         'Read': '0',
         'Work': '0',
         'Exercise': '0',
         'Leisure': '0'
      }
      res.forEach((item) => {
         const item_json = item.toJSON()
         for (var category in item_json.categories) {
            agg[`${category}`] = (parseInt(agg[category]) + parseInt(item_json.categories[category])).toString()
         }
      })
      callback(agg)
   })
}

/** increment `category` for `delta` amount of time */
function update(category, delta, day, month, year, callback) {
   getData(day, month, year, (categories, id) => {
      var updateObj = {}
      updateObj[`categories.${category}`] = (parseInt(categories[category]) + delta).toString()
      RecordModel.updateOne({ _id: id }, {$set: updateObj}, () => callback())
   })
}


module.exports = {
   getData,
   getDataByMonth,
   getDataByYear,
   update
}