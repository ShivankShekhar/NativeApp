let mongoose= require("mongoose")

//setup database

const server = "localhost:27017" 
const database= "login"
// const username = " "
// const password = " "

// mongoose.connect(`mongodb://${username}:${password}@${server}/${database}`)
mongoose.connect(`mongodb://${server}/${database}`, {useNewUrlParser: true}) 
  
  let loginSchema = mongoose.Schema({
    userName : {
        type : String,
        required : true,
        unique : true
    },
    password:{
        type : String, 
        required : true
    },
    email:{
        type : String, 
        required : true,
        unique : true
    },
    ans:{
        type : String, 
        required : true
    },
})

module.exports = mongoose.model('Login', loginSchema)     //  create and export model created to reference schema
