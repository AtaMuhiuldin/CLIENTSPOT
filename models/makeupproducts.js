const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create geolocation schema
const ColourSchema = new Schema({
    hex_value: {
        type: String,
        default: ""
    },
    colour_name: {
        type: String,
        default: ""
    }
});

// create makeupproducts schema and model
const MakeupproductSchema = new Schema({
    brand: {
        type: String,
        required: [true, 'Brand field is required']
    },
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    type: {
        type: String,
        required: [true, 'Product type field is required, for example foundation']
    },
    description: {
        type: String,
        required: [true, 'Description field is required']
    },
    image: {
        type: String,
        required: [true, 'Image is required']
    },
    link: {
        type: String,
        required: [true, 'Product link field is required']
    },
    colours: {
        type: String,
        required: [false, 'Product colour field is not always required']
    },
    hex_value: {
        type: String,
        required: [false, 'Not required if no other colours']
    },
    colour_name: {
        type: String,
        required: [false, 'Not required if no other colours']
    },
    colours: [ColourSchema]
});

const MakeupProduct = mongoose.model('makeupproduct', MakeupproductSchema);

module.exports = MakeupProduct;