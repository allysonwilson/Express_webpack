//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');Index route to show all films

var movies = ["Now You See Me", "Star Wars Episode IV: A New Hope"]

// index

router.get('/', function(req, res){
  res.json(movies)
})

// show  whats the req.params.id mean?
router.get('/:id', function (req, res) {
  var movie = movies[ req.params.id]
  res.json(movie)
})

// create
router.post('/', function(req, res){
  movies.push( req.body.newMovie )
  res.json( movies )
})

// update
router.put('/:id', function (req, res){
  var id = req.params.id
  var updatedMovies = req.body.updatedMovies

  movies[id] = updatedMovies

  res.json(movies)
})

// destroy
router.delete('/:id', function (req, res){
  var id = req.params.id

  movies.splice(id, 1)
  res.json(movies)
})


module.exports = router
