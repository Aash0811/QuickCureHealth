const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Drug"
    }],
    orders: [{
        drugs: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Drug"
        }],
        date: {
            type: Date,
            default: Date.now
        }
    }]
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);