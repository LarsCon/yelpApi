const router = require('express').Router();
// const Restaurant = require('../db').import('../models/restaurant');
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
  const apiBaseUrl = process.env.YELP_URL;
  const apiKey = process.env.API_KEY;
  const {cost, state} =  req.query;
  const request = await fetch(apiBaseUrl + `businesses/search?location=${state}&cost=${cost}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${apiKey}`
    }
  });
  const places = await request.json();
  res.status(200).json(places.businesses);
});

module.exports = router;
