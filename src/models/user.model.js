const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    phone: Number,
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);