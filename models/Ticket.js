const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    desc: {
        type: String,
        required: true
    },
    devAssigned: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
});
module.exports = mongoose.model('Ticket', TicketSchema);