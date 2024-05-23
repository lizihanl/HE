const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'He',
  user: 'He',
  password: 'password',
  database: 'myonlinestore'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});

module.exports = db;
