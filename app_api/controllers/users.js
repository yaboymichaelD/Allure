const mongoose = require('mongoose');
const User = mongoose.model('registerSchema');

const userCreate = function (req, res) {.status(200)
.json({"status" : "success user created"});
 };
const userReadOne = function (req, res) { };
const userUpdateOne = function (req, res) { };
const userDeleteOne = function (req, res) { };

module.exports = {
  
  userCreate,
  userReadOne,
  userUpdateOne,
  userDeleteOne
};
