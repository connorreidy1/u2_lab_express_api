const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const db = require('./db')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001
const actorController = require('./controllers/actorController')
const movieController = require('./controllers/movieController')
const reviewController = require('./controllers/reviewController')


const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send("Hello, World!")
  })


app.get('/movies', movieController.getAllMovies)
app.get('/movies/:id', movieController.getMovieById)

app.get('/actors', actorController.getAllActors)
app.get('/actors/:id', actorController.getActorById)

app.get('/reviews', reviewController.getAllReviews)
app.get('/reviews/:id', reviewController.getReviewById)

