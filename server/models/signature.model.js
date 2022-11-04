const mongoose = require('mongoose');

const SignatureSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Name is required"]
    },
    contactInfo: {
        type: String,
        required: [true, "Contact info is required"]
    },
    date: {
        type: Date,
        required: [true, "Date and time of pickup is required"]
    },
    quantity: {
        type: Number,
        required: [true, "Amount of order is required"]
    },
    sigCupcake: {
        type: String,
        enum: {
            values: [
                'Classic',
                'Cookies & Cream',
                'Peanut Butter & Jelly',
                'Salted Caramel',
                'Ultimate Chocolate',
                'Strawberry Shortcake'
            ]
        }
    },

    createdBy: { //added for LR
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, {timestamps:true})

const Signature= mongoose.model("Signature", SignatureSchema)

module.exports = Signature