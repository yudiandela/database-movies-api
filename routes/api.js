let express = require('express');
let router = express.Router();
<<<<<<< HEAD
let dataMovies = require('./../models/data-movies')
let User = require('./../models/user')
/* GET home page. */
router.get('/movies', function(req, res, next) {
=======
let date = require('date-and-time');
let dataMovies = require('./../models/data-movies')
let User = require('./../models/user')
let statsRequest = require('./../models/statistics-request')
/* GET home page. */
router.get('/movies', function(req, res, next) {
  const now = new Date();
>>>>>>> adding some changes
  let limit = 15
  let sort = '1'
  let search = 0
  let page = 0
  let query
  if (req.query.limit) {
    limit = parseInt(req.query.limit)
  }
  User.findOne({token: req.query.key_token}, function(err, docs) {
    if (!docs) {
      return res.json({
        status: false,
        message: 'invalid key token.'
      })
    } 
    if (docs) {
      if (req.query.search) {
        search = req.query.search
      }
    
      if (req.query.sort) {
        sort = req.query.sort
      }
    
      if(req.query.page) {
        page = req.query.page
      }
    
      if (!search) {
        query = dataMovies.find({})
      } 
      else {
        query = dataMovies.find({title: { $regex:  req.query.search, $options: 'i'}})
      }
<<<<<<< HEAD
    
      query.limit(limit).sort(sort).skip(10*page).exec((err, docs) => {
        res.json({
          status: true,
          dataLength: docs.length,
          data: docs
        })
      })
=======
      
      statRequest = new statsRequest({
        token: req.query.token,
        date: date.format(now, 'YYYY/MM/DD HH:mm:ss')
      })

      statRequest.save(function() {
        query.limit(limit).sort(sort).skip(10*page).exec((err, docs) => {
          
          return res.json({
            status: true,
            dataLength: docs.length,
            data: docs
          })
          
        })
      })

>>>>>>> adding some changes
    }
  })  
})

module.exports = router;
