const db = require('./connection');
const mongoose = require('mongoose');
const fetch = require("node-fetch");

const {
    Bug,
    Fish,
    SeaCreature,
    Fossil,
    Houseware,
    Art,
    MiscItem,
    Song,
    WallMounted
} = require('../models');



function seedAll() {
Promise.all([
    fetch(`http://acnhapi.com/v1/bugs/`),
    // fetch(`http://acnhapi.com/v1/fish/`),
    // fetch(`http://acnhapi.com/v1/sea/`),
    // fetch(`http://acnhapi.com/v1/fossils/`),
    // fetch(`http://acnhapi.com/v1/houseware/`),
    // fetch(`http://acnhapi.com/v1/art/`),
    // fetch(`http://acnhapi.com/v1/misc/`),
    // fetch(`http://acnhapi.com/v1/songs/`),
    // fetch(`http://acnhapi.com/v1/wallmounted/`)
    ])
    .then(response => response.map(cat => cat.json()))
    .then(data => {
        const bugArr = data[0];
        // const fishArr = collectedData[1];
        // const seaArr = collectedData[2];
        // const fossilArr = collectedData[3];
        // const housewareArr = collectedData[4];
        // const artArr = collectedData[5];
        // const miscArr = collectedData[6];
        // const songArr = collectedData[7];
        // const wallArr = collectedData[8];

        console.log(bugArr);    
    })
    .catch(err => console.log(err));

}

seedAll();

// function testFunction() {
//     fetch(`http://acnhapi.com/v1/bugs/`)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
// };

// testFunction();
