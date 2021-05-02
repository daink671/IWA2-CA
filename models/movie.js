const mongoose = require('mongoose');


//Schema
const Schema = mongoose.Schema;
const MovieSchema = new Schema({
    title: String,
    director: String,
    date: {
        type: String,
        default: Date.now()
    }
});


//Model
const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;