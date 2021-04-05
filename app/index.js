const express = require('express');
const morgan = require('morgan');
const app = express();


// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); //read Json
app.use(express.json());


// routes
let users = require('./routes/users');
app.use(require('./routes')); // calls routes
app.use('/api/users',users);


// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});




