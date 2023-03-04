const { Schema, model } = require("../db/connection") // import Schema & model

// Post Schema
const PostSchema = new Schema({
    comment: { type: String, unique: false, required: true },
    name: { type: String, unique: false, required: true },
}, { timestamps: true });

// Post model
const Post = model("Post", PostSchema)

module.exports = Post