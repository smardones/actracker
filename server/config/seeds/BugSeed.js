const db = require('../connection');
const mongoose = require('mongoose');
const {Bug} = require('../../models');
const fetch = require("node-fetch");

db.once('open', async () => {
    await Bug.deleteMany({});

    fetch(`http://acnhapi.com/v1/bugs/`)
    .then(response => response.json())
    .then((data) => { 
        const newBugArray = Object.entries(data);
        newBugArray.forEach((bug) => {
            const bugDoc = new Bug({
                name: bug[0],
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
        return console.log('Seeding Complete')})
    .catch(err => console.log(err));
});

