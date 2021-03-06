var mysql = require("mysql");
var con;
if (process.env.JAWSDB_URL) {
  con = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  con = mysql.createConnection({
    port: 3308,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burgers_db'
  });
}


con.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + con.threadId);
});

module.exports = con;