const mysql = require('mysql2/promise');

async function connectToDatabase() {
    try {
        const db = await mysql.createConnection({
          host: 'localhost', 
          user: 'root',//database-username
          password: '',//database-password
          database: 'my_database'//database-name
        });
        console.log('Connected to the MySQL database');
        return db;
    } catch (err) {
        console.error('Error connecting to the database:', err);
    }
}

module.exports = connectToDatabase;
