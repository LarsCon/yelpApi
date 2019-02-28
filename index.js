require('dotenv').config();

const restaurant = require('./controllers/restaurantcontroller.js');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.use(require('./middleware/headers'));
app.use(bodyParser.json());
app.use('/restaurant', restaurant);
app.listen(process.env.PORT, () => console.log(`App is listening on ${process.env.PORT}`));
