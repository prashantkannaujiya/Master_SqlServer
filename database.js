var Sequelize=require('sequelize')
var db=new Sequelize('products', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    password:'Pra$0212',
    port:'3306'
});
// create connection
 module.exports=db;

// export connection
