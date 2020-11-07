const db = require('./connection');
const mongoose = require('mongoose');
const fetch = require("node-fetch");

function seedBugs() {
    fetch(`http://acnhapi.com/v1/bugs/`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
};

seedBugs();