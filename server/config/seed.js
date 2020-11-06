const db = require('./connection');
const mongoose = require('mongoose');

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

const funSeed = async function() {
   const bugData = await fetch(`http://acnhapi.com/v1/bugs`);
   bugData.in
    

}