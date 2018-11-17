'use strict';
 const express =  require('express');
 const app = express();
 const chatapp = require('./chatapp');
 const bodyParser = require('body-parser');
 
 app.set('view engine', 'ejs');
 app.use(express.static('public'));
 app.use(bodyParser.urlencoded({extended: true}));

 app.use(chatapp.session);
 app.use('/', chatapp.router);
 

 app.listen(process.env.PORT, ()=>console.log('The server is running on Port', 3000));