const mongoose = require("mongoose");

const User = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
});

const model = mongoose.model("user", User);

module.exports = model;
