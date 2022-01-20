// db.js
// import mysql from 'mysql2/promise';
// const conn = mysql.createConnection({
//     host: process.env.MYSQL_HOST,
//     port: process.env.MYSQL_PORT,
//     database: process.env.MYSQL_DATABASE,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD
  
// });
// export default async function excuteQuery({ query }) {
//   try {
  
//     const results = await (await conn).execute(query);
//     return results;
//   } catch (error) {
//     return { error };
//   }
// }