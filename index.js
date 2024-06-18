var express =require('express');
var Sequelize=require('sequelize')
// Import cors
var cors=require('cors')
var bodyParser=require('body-parser')
// Import connection
var db=require('./database')
// Import router
//import Router from "./routes/routes.js";
var Product = require('./Product');
// Init express
const app = express();
// use express json
app.use(bodyParser.urlencoded({extended:false}))

app.use(express.json());
// use cors
app.use(cors());

// Testing database connection 

app.get('/createprod',(req,res)=>{
    res.sendFile(__dirname+'/addProduct.html');
})
app.post('/createprod',(req,res)=>{
    console.log(req.body)
    db.sync().then(()=>{
        Product.create(req.body).then((ress)=>{console.log(ress);res.send('success')}).catch((err)=>console.log(err));
    })
         .catch((err)=>{
console.log(err);
         })
})
app.get('/all',(req,res)=>{
    db.sync().then(()=>{
        Product.findAll().then((ress)=>{console.log(ress);res.send(ress);}).catch((e)=>{console.log(e)})
    })
})
// use router
//app.use(Router);

// listen on port
app.listen(2100, () => console.log('Server running at http://localhost:2100'));