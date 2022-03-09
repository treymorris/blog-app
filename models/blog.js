const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogSchema = new Schema(
    {
        title: { type: String, required: true },
        blog: { type: String, required: true },
        date: { type: Date, default: Date.now},
        comments: { type: Array, default: [] },
        published: { type: Boolean, default: false }
    }
);

module.exports = mongoose.model('Blog', BlogSchema);