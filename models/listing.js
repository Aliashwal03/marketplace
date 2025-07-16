const mongoose=require('mongoose')
const listingSchema=new mongoose.Schema({
    tilte:String,
    discription: String,
    price:Number, 
    image:String
},{timestamps:true})

module.exports=mongoose.model('Listing',listingSchema)