var {Sequelize,DataTypes}  = require('sequelize');
var db=require('./database');
// import connection 


// init DataTypes


// Define schema
module.exports=Product = db.define('product', {
// Define attributes
title: {
type: DataTypes.STRING
},

price: {
type: DataTypes.DOUBLE
}
},{
// Freeze Table Name
freezeTableName: true
});
 
// Export model Product
