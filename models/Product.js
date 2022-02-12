const mongoose = require('mongoose')


const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: true,
        unique: true
    },
    image:{
        type: Array,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    available:{
        type: Boolean,
        required: true
    },
    company:{
        type: String,
        required: true
    },
    shipping:{
        type: Boolean,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    featured:{
        type: Boolean,
        required: true
    }
},
    {timestamps: true}
)

module.exports = mongoose.model("Product", ProductSchema)