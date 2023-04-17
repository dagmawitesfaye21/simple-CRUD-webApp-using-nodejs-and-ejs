const Product = require('./models/product');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connection Open');
});

// This wit repitition will work but for simplicity use the method below
// const p = new Product({
//     name: 'Grapefruit',
//     price: 2,
//     category: 'fruit'
// })
// p.save()
//     .then(p => {
//         console.log(p);
//     })
//     .catch(e => { console.log(e) });

const seedProducts = [{
        name: 'EggPalnt',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Goddess Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Seedless Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Milk',
        price: 2.69,
        category: 'dairy'
    },
    {
        name: 'Pumpkin',
        price: 3.50,
        category: 'vegetable'
    },
    {
        name: 'Skimmed Milk',
        price: 1.30,
        category: 'dairy'
    }
];

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res);
    })
    .catch(e => { console.log(e) });