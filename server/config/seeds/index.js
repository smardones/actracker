const db = require('../connection');
const mongoose = require('mongoose');
const {Bug, Fish} = require('../../models');
const fetch = require("node-fetch");

const seedBugs = async function() {
    await Bug.deleteMany({});
    

    fetch(`http://acnhapi.com/v1/bugs/`)
    .then(response => response.json())
    .then((data) => { 
        const newBugArray = Object.entries(data);
        newBugArray.forEach((bug) => {
            const bugDoc = new Bug({
                name: bug[1].name['name-USen'],
                availability: {
                    monthNorthern: bug[1].availability['month-northern'],
                    monthSouthern: bug[1].availability['month-southern'],
                    time: bug[1].availability.time,
                    monthNorthernArray: bug[1].availability['month-array-northern'],
                    monthSouthernArray: bug[1].availability['month-array-southern'],
                    timeArray: bug[1].availability['time-array']
                },
                price: bug[1].price,
                priceFlick: bug[1]['price-flick'],
                description: bug[1]['museum-phrase'],
                image: bug[1].image_uri,
                icon: bug[1].icon_uri
            });
            
            bugDoc.save();
        })
        
    })
    .then(() => {
        return console.log('Bugs Complete')})
    .catch(err => console.log(err));
};

const seedFish = async function() {
    await Fish.deleteMany({});

    fetch('http://acnhapi.com/v1/fish/')
        .then(response => response.json())
        .then((data) => {
            const newFishArray = Object.entries(data);
            newFishArray.forEach((fish) => {
                
                const fishDoc = new Fish({
                    name: fish[1].name['name-USen'],
                    availability: {
                        monthNorthern: fish[1].availability['month-northern'][0],
                        monthSouthern: fish[1].availability['month-southern'][0],
                        time: fish[1].availability.time
                    },
                    shadowSize: fish[1].shadow,
                    price: fish[1].price,
                    priceCj: fish[1]['price-cj'],
                    description: fish[1]['museum-phrase'],
                    image: fish[1].image_uri,
                    icon: fish[1].icon_uri
                })
                console.log(fishDoc);
                fishDoc.save();
            })
        })
        .then(() => {
            return console.log('Fish Complete')
        })
        .catch(err => console.log(err));
}

db.once('open', async () => {
    seedBugs();
    seedFish();
});

