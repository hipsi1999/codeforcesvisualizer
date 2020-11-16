const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Suggestion = {
    author: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}

const SuggestionSchema = new Schema(Suggestion);
module.exports = mongoose.model('suggestions', SuggestionSchema);