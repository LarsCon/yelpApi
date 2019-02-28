const router= require('express').Router();
// const Restaurant = require('../db').import('../models/restaurant');
const fetchYelp = './fetchYelp';

router.get('/', async (req,res)=> {
    // Restaurant.findAll()
    // .then(books  => res.status(200).json(books))
    // .catch(err=> res.status(500).json({error: err }))
    // res.send(200)
    // const rests = await fetchYelp('/places')
    return {body: 'cool'};
    fetch(req.body)
});

module.exports = router;