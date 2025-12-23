const mongoose = require('mongoose')

const Schema = mongoose.Schema

const movieSchema = new Schema ({
    category:{
        type:String,
        required:true
    },
    moviename:{
        type :String,
        required: true
    },
    counter:{
        type: Number,
        default:0
    }

 })



module.exports = mongoose.model('Movie', movieSchema);
