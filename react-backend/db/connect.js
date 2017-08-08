var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "connekt",
  database: "connekt"
});

connection.connect((err)=>{
  if(err) console.log(err);
})

connection.query('CREATE TABLE users(userid int, firstname varchar(255), lastname varchar(255), email varchar(320), passalt varchar(100), password varchar(255));', (err, res)=>{
  if(err){
    if(err.code == "ER_TABLE_EXISTS_ERROR"){
      console.log('table already exists');
    }else{
      console.log(`error creating table: ${err.code}`);
    }
  }
})

module.exports = connection;
