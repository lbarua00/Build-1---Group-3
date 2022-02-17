/* Run this code on the command line to allow your computer to connect
to the database and query it. To run it, be in the right directory 
and type "node database_connection.js" and press enter. */

var mysql = require('mysql');
const { isTypedArray } = require('util/types')

var con = mysql.createConnection({
  host: "107.180.1.16",
  user: "sprog20223",
  password: "sprog20223"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});