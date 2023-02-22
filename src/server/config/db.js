// const mysql = require('mysql2');

// //학교용
// const db = mysql.createPool({
//     host: 'localhost',
//     user: 'user',
//     password: '12345',
//     database: 'user'
// });
//노트북용
// const db = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'user'
// });
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '12345',
  database: 'user'
});


db.connect((err) => {
    if (err) {
      console.error('Failed to connect to database:', err);
      return;
    }
    console.log('Connected to database!');
  });
  
  console.log('Is the database connected?', db.connected);

module.exports = db;