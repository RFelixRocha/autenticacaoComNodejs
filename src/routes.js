const routes = require('express').Router();
const { User } = require('./app/models')

User.create({
    name:"Raimundo Felix Da Rocha",
    email:"felix@gmail.com",
    password_hash:"khdnskhgflsdhjglsd"
});

module.exports = routes;