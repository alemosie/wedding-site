'use strict';
const mongoose = require('mongoose');

const guestSchema = mongoose.Schema({
  created: { type: Date, default : () => new Date()},
  fullName: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String },
  diet: { type: String, required: true },
  outOfTown: { type: Boolean },
  shareRoom: { type: Boolean },
  shareRide: { type: Boolean }
});

module.exports = mongoose.model('Guest', guestSchema)