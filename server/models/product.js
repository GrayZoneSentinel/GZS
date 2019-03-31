const mongoose = require('mongoose');
// To retrieve the brand schema
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    name: {
        required: true,
        type: String,
        unique: 1,
        maxlegth: 100
    },
    description: {
        required: true,
        type: String,
        maxlegth: 100000
    },
    price: {
        required: true,
        type: Number,
        maxlegth: 250
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },
    shipping: {
        required: true,
        type: Boolean
    },
    available: {
        required: true,
        type: Boolean
    },
    wood: {
        type: Schema.Types.ObjectId,
        ref: 'Wood',
        required: true
    },
    frets: {
        required: true,
        type: Number
    },
    sold: {
        type: Number,
        maxlegth: 100,
        default: 0
    },
    publish: {
        required: true,
        type: Boolean
    },
    images: {
        type: Array,
        default: []
    }
}, {timestamps:true});

const Product = mongoose.model('Product', productSchema);

module.exports = { Product }