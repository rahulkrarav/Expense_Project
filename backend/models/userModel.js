const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


//schema design
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Unique Email is required"],
        unique: true,
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
    },
    address: {
        type: String,
        required: [true, "Address is required"],
    },
    gender: {
        type: String,
        required: [true, "Specify Your Gender"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
   
}, 


});

// Hash the password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});



//export
const userModel = mongoose.model('users', userSchema);
module.exports = userModel;
