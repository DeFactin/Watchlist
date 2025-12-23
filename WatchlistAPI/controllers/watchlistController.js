const Watchlist = require('../models/watchlist')


const getWatchlists = async (req, res) => {
    const watchlists = await Watchlist.find({})

    res.status(200).json(watchlists)
}

const addWatchlist = async(req,res)=>{
    const{ arrayOfMovies } = req.body
    if (!arrayOfMovies) {
        throw Error('All fields must be filled')
    }

    const watchlist = await Watchlist.create({arrayOfMovies})
    res.status(201).json(watchlist)
}

module.exports = {getWatchlists,addWatchlist}