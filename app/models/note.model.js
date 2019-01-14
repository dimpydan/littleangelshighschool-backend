const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    content: String,
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    token: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);