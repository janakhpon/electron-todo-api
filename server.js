//assign modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//assign route
const task = require('./routes/api/task');

//declare express app()
const app = express();

//body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//configure DB for production or development
const db = require('./config/keys').mongoURI;

//connect to MongoDB
mongoose.connect(db, {useNewUrlParser : true}).then(() => {
    console.log(`MongoDB connected on ${db}`);
}).catch(err => {
    console.log(`MongoDB connection error : ${err} on : ${db}`);
})


//declare route name
app.use('/api/task', task);


//declare port
port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`SERVER RUNNING ON PORT : ${port}`);
})
