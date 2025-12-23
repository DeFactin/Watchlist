const mongoose = require('mongoose')
const movieSchema = require('./movies')
const Schema = mongoose.Schema

const watchListSchema = new Schema ({
    arrayOfMovies:{
        type:[String],
        required:true
    }

})


module.exports = mongoose.model('Watchlist', watchListSchema);
