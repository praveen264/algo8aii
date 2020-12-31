const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())


// Configuring the database
const dbConfig = require('./config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

app.use(express.json());

const customerRouter=require('./routes/customers');
const paymentRouter=require('./routes/payments');
const productRouter=require('./routes/products');
const cartRouter=require('./routes/carts');

app.use('/customers',customerRouter);
app.use('/payments',paymentRouter);
app.use('/products',productRouter);
app.use('/carts',cartRouter);

app.get('/',(req,res)=>{
    res.send("helo world");
})

// listen for requests
app.listen(process.env.PORT||3001, () => {
    console.log("Server is listening on port 3001");
});