const express = require('express')
const port = 8000
const app = express()
const bodyParser = require('body-parser')
const db = require('./config/mongoose')
var cors = require('cors');
const userRoute = require('./routes/userRoutes')
const taskRoutes = require('./routes/taskRoutes')

// cors (secure cross-origin requests)
var corsOptions = {
    origin: '*',
}
app.use(cors(corsOptions));


// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



// user route
app.use('/', userRoute);
// task route
app.use('/', taskRoutes);

app.get('/', (req,res) => {
    res.send("My task...");
})

app.listen(port, function(err){
    if(err) {console.log("error"); return;}
    console.log(`running server on port: ${port}`);
});