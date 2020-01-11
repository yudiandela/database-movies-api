const mongoose = require('mongoose')
const Schema = mongoose.Schema
const statistics_request = new Schema({
  token: String,
  date: String
},{collection: 'statistics_request'})
module.exports = mongoose.model('statistics_request', statistics_request)