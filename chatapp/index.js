'use strict';

const router = require('express').Router();
const mongoose = require('./db');
const { check, validationResult } = require('express-validator/check');


 router.get('/', (req,res,next) => {
     res.redirect('/login');
 });

 router.get('/login', (req,res,next)=>{

    res.render('login');

 });

 router.get('/rooms', (req,res,next)=>{

    res.render('rooms');

 });
   
 router.post('/login', [
      check('username').isEmail().withMessage('Username must be valid Email'),
      check('password').isLength({min:8}).withMessage('Password should be at least (8) characters')
 ],

 (req,res) => {

    const errors = validationResult(req);
  if (!errors.isEmpty()) {
      console.log(errors.array());
    return res.render('login', {errors: errors.array()});
  }else
    res.redirect('/rooms');
 });


 router.post('/signup', (req,res,next) => {

    let user = new mongoose.UserModel({
        firstName: req.body.fname,
        lastName: req.body.lname,
        email: req.body.email,
        userName: req.body.username,
        password: req.body.password,
        active: false
    
    });
    user.save((error)=> {
        if(error){
            console.log(error);
        }else {
            console.log(JSON.stringify(user));
        }
    
    });
     res.redirect('/');
 });

 module.exports = {
     router:router
    }