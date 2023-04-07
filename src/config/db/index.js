const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/TT_Sneaker_Dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Successfully connected")
    } catch (er) {
        console.log("Failed to connect")
    }
}

module.exports = { connect }