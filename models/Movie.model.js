const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
})

const MovieModel = mongoose.model("MovieModel", movieSchema)

module.exports = MovieModel;