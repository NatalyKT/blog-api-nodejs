const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 4,
    },
    desc: {
        type: String,
        required: true,
        min: 12,
    },
    author: {
        type: String,
        required: true,
      },
    categories: {
        type: Array,
        default: []
    },
},
{timestamps: true}
);
BlogSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Blog", BlogSchema)