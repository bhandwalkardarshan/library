
const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    title:{type:String, required:true},
    author:{type:String, required:true},
    category:{type:String, required:true},
    price:{type:Number, required:true},
    quantity:{type:Number, required:true},
})

module.exports = mongoose.model('Book',bookSchema)

/* {
  _id: ObjectId,
  title: String,
  author: String,
  category: String,
  price: Number,
  quantity: Number
} */