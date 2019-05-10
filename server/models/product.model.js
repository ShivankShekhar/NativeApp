let mongoose= require("mongoose")

//setup database

const server = "localhost:27017" 
const database= "login"
// const username = " "
// const password = " "

// mongoose.connect(`mongodb://${username}:${password}@${server}/${database}`)
mongoose.connect(`mongodb://${server}/${database}`, {useNewUrlParser: true}) 
  
  let productDetailsSchema = mongoose.Schema({
      productItemNo : {
        type : Number,
        required : true,
        unique : true
    }, 
    productName : {
        type : String,
        required : true,
        unique : true
    },
   ImageSource : {
        type : String, 
        // required : true
    },
    Description : {
        type : String, 
        required : true
    },
})

module.exports = mongoose.model('ProductDetails', productDetailsSchema)     //  create and export model created to reference schema
