var express = require('express');
var config = require('./config');
var mongoose  = require('mongoose');
var setupController = require('./controllers/setupcontroller');


const app = express();
var mongoose = require('mongoose');
const port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + "/public"));

app.set('view engine', 'ejs');

mongoose.connect(config.getDBConnection());
setupController(app);

app.get('/', function(req, res){
    res.send("Hello from the root application URL");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
