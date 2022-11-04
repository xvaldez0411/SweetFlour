const mongoose = require('mongoose');

const CustomSchema = new mongoose.Schema({
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
    base: {
        type:String,
        enum: {
            values: [
                'Chocolate',
                'Vanilla',
                'Strawberry',
                'Funfetti'
            ]
        }
    },
    filling: {
        type: String,
        enum: {
            values: [
                'Nutella',
                'Signature Salted Caramel',
                'Signature Chocolate Ganache',
                'Signature Berry Compote',
                'Peanut Butter Cream',
                'Cookie Butter'
            ]
        }
    },
    description: {
        type: String,
    },
    createdBy: { //added for LR
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, {timestamps:true})

const Custom= mongoose.model("Custom", CustomSchema)

module.exports = Custom