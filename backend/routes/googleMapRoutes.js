// googleMapsRoutes.js
const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.get('/', async (req, res) => {
    const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Paris&inputtype=textquery&fields=formatted_address,name,geometry&key=YOUR_API_KEY`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.send(data);
    } catch (error) {
        res.status(500).send('Error fetching data from Google Maps API');
    }
});

module.exports = router;
