const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    content: String,
    author: String,
    fecha: { type: Date, default: Date.now }
}, { collection: 'messages.11 sistemas' });

module.exports = mongoose.model('Message', messageSchema);