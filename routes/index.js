const express = require('express');
const router = express.Router();

const MovieModel = require("../models/Movie.model.js")
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res, next) => {

    MovieModel.find()
    .then(response => {
        res.render("movies.hbs", {
            allMovies: response,
        });
    })
    .catch((error)=> {
        next(error);
    });
});


router.get("/movie/:id", async (req, res, next) => {

    try {

        const { id } = req.params;
        const response = await MovieModel.findById(id);

        res.render("details.hbs", {
            movieDetails: response,
        })

    } catch (error) {
        next(error)
    }
});
//     try {
//     const allMovies = await MovieModel.find();

//     res.render("movies.hbs", {
//         movies: allMovies,
//     })
// } catch (error) {
//     next(error) }
// });






module.exports = router;
