/*
TODO:
  - setup profile table
  - setup listings table
  - setup media table
  - proper error handling
*/

//file system requirements
var fs = require('fs');
var mysql = require('mysql');

function prettyJSON(obj) {
    console.log(JSON.stringify(obj, null, 2));
}

function getJSONObj(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function getCreateTableQuery(fileName, tableName) {

  var query = "CREATE TABLE " + tableName +"(";
  var obj = getJSONObj(__dirname + '/json/' + fileName + '.json');

  var key = Object.keys(obj);

  for (var i=0;i<key.length;i++) {
    if(i!=0) query = query + ", ";
    query = query + key[i] + " " + obj[key[i]];
  }

  return query + ")";
}
/*
  function to get connection parameters to database
  return: JSON object with our connection parameters
*/
function getConnectionParam() {
  //open the connection parameters JSON
  return getJSONObj(__dirname + '/json/connect.json');
};

/*
  function to return the relevant string to create a users table
  return: mysql query string
*/
function getProfileTable() {
  return getCreateTableQuery('profile','users');
};

function getListingTable() {
  return getCreateTableQuery('listing','ads');
};

//open database connection
var connection = mysql.createConnection(getConnectionParam());

connection.connect((err)=>{
  if(err) console.log(err);
})

//'CREATE TABLE users(userid int, firstname varchar(255), lastname varchar(255), email varchar(320), passalt varchar(100), password varchar(255));'
//table setup
connection.query(getProfileTable(), (err, res)=>{
  if(err){
    if(err.code == "ER_TABLE_EXISTS_ERROR"){
      console.log('table already exists');
    }else{
      console.log(`error creating table: ${err.code}`);
    }
  }
});


connection.query(getListingTable(), (err, res)=>{
  if(err){
    if(err.code == "ER_TABLE_EXISTS_ERROR"){
      console.log('table already exists');
    }else{
      console.log(`error creating table: ${err.code}`);
    }
  }
});

module.exports = connection;

