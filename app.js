const express=require('express');
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser')
require('dotenv/config')
const userRoute=require('./routers/users');
const eventsRoute=require('./routers/events')
const { default: mongoose } = require('mongoose');
app.use(bodyParser.json())

app.use(cors());

app.use('/users',userRoute);
app.use('/events',eventsRoute);
mongoose.connect(process.env.database,()=>{
    console.log("database connected!!!!");
});
app.listen(8500);