require('dotenv').config()

const restaurant= require('./controllers/restaurantcontroller.ts');
const express= require('express');
const bodyParser = require('body-parser');
const app = express()
const http = require('http');
const server = http.createServer(app);


app.use(require('./middleware/headers'));
app.listen(process.env.PORT,()=>console.log(`App is listening on ${process.env.PORT}`))

app.use(bodyParser.json());

app.use(express.static(__dirname+'/public'))
console.log(__dirname)

app.use('/',(req,res)=> res.render('index'));

app.use('/restaurant', restaurant)