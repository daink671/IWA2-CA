const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

//routes
router.get('/', (req, res) => {

    Movie.find({ })
        .then((data) => {
            console.log('data : ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error : ', daerrorta);
        });
});

router.post('/save', (req, res) => {

    console.log('Body : ', req.body);
    res.json({
        msg: 'we received data'
    });
});

module.exports = router;

