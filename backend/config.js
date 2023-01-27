const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  // password: "xxxxxxxx",
  database: "myBlog",
});

module.exports = con;
 