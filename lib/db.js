import mysql from "mysql2/promise";

export const db = await mysql.createPool({
  host: process.env.DB_HOST,     // contoh: 'localhost'
  user: process.env.DB_USER,     // contoh: 'root'
  password: process.env.DB_PASS, // password mysql
  database: process.env.DB_NAME, // nama DB kamu
});
