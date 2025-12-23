const Movie = require('../models/movies')


const getAvailable = async (req, res) => {
    const movies = await Movie.find({})

    res.status(200).json(movies)
}

const addAvailable = async(req,res)=>{
    const{ moviename, category} = req.body
    if (!moviename || !category) {
        throw Error('All fields must be filled')
    }

    const movie = await Movie.create({moviename,category})
    res.status(201).json(movie)
}

module.exports = {addAvailable,getAvailable}