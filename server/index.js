let express= require ("express") 
let app= express()               // creates express app 
let loginRoute= require("./routes/login")
let productDetailRoute= require("./routes/productDetail")
let path=require("path")

const cors = require('cors');
// var corsOptions = {
//   origin:'http://localhost:4200',
//   optionsSuccessStatus: 200
// };

// app.use(cors(corsOptions)); 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


let bodyParser= require("body-parser")  // to read json format data entered in request
app.use(bodyParser.json())

// to go through all the req and take actions on each of them according to the query
app.use((req,res,next)=>{
    console.log(`${new Date().toString()} => ${req.originalUrl}`,req.body)
next()
})

app.use(loginRoute)  // handle route for http://localhost:3000/customer and further
app.use(productDetailRoute)  // handle route for http://localhost:3000/product and further

app.use(express.static('public'))   //use specific static file to create a basic frontend when http://localhost:3000/ is called
 
//404 Page not Found
app.use((req,res,next)=>{
    res.status(404).send("Lost") 
})

//500
app.use((err,req,res,next)=>{
    console.error(err.stack)        //  points error stack onn he console with the data recieved from the file
    res.sendFile(path.join(__dirname,"/public/500.html"))
})

const PORT= process.env.PORT || 3000    // read from env var o see if specified in cmd line or default 300
app.listen(PORT,()=> console.info(`Server started on ${PORT}` ))
