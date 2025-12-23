require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const app = express()

const { getAvailable,addAvailable } = require('./controllers/movieController')
const { getWatchlists, addWatchlist } = require('./controllers/watchlistController')
const cors = require('cors')

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.get('/',(req,res)=>{
    res.send('Hello from API')
})

app.get('/api/movies',getAvailable)

app.post('/api/movies',addAvailable)

app.get('/api/watchlist',getWatchlists)
app.post('/api/watchlist',addWatchlist)

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  })

