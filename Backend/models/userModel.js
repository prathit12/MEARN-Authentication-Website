const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, ' Please add a name']
    },
    email:{
        type: String,
        required: [true, ' Please add a email'],
        unique: true
    },
    password:{
        type: String,
        required: [true, ' Please add a password']
    },

},
{
    timestamps:true
})

const goal = mongoose.model('user', userSchema)

module.exports = goal