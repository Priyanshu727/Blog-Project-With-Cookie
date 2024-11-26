const mongoose = require("mongoose");

const db = async () => {
    await mongoose.connect("mongodb+srv://priyanshumishra7272:d0u9BzvZQqgzIKoT@cluster0.rzktd.mongodb.net/");
    console.log("Data base is connected");
};

module.exports = db;
