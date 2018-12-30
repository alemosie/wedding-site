'use strict'

var bodyParser = require('body-parser');
const Router = require('express').Router
const Guest = require('./model/guest.js')

module.exports = function(app){
  app.get('/', (req, res, next) => {
    console.log('hit home');
    res.send('Hello World!');
  })

  app.get('/api/guests', (req, res) => {
    console.log('hit guests GET')

    res.json(req.query)
  })

  app.post('/api/guests', (req, res) => {
    console.log('hit guests POST')
    // let guest = new Guest();
    // guest.save(err => {
    //   if (err) {
    //     res.send(err);
    //   }
    //   console.log('successfully added guest')
    //   res.json(guest);
    // });
  })

  app.all('*', (req, res) => {
    console.log('Returning a 404 from the catch-all route');
    // res.sendFile(path.join(__dirname+'/client/build/index.html'));
    return res.sendStatus(404);
  });
}