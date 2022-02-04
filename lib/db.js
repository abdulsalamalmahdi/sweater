

 // import mysql from 'mysql2/promise'
import config from './config';
import knex from 'knex'

// export async function getStaticProps() {
//   return conn= await  mysql.createConnection({
//         host: process.env.MYSQL_HOST,
//         port: process.env.MYSQL_PORT,
//         database: process.env.MYSQL_DATABASE,
//         user: process.env.MYSQL_USER,
//         password: process.env.MYSQL_PASSWORD

//     });
//   }
// const registerService = (name, initFn) => {
//   if (process.env.NODE_ENV === 'development') {
//     if (!(name in global)) {
//       global[name] = initFn();
//     }
//     return global[name];
//   }
//   return initFn();
// };

// export const db = registerService('db', () => knex({
//     client: 'mysql',
//     connection: {
//       host: config.db.host,
//       user: config.db.user,
//       password: config.db.password,
//       database: config.db.database
//     }

//   }

// ));
export default async function excuteQuery({
  query,
  values
}) {
  // try {

  //   const connection = await mysql.createConnection(config.db);

  //   const [results, ] = await connection.execute(query, values);

  //   return results;
  // } catch (error) {

  //   return {
  //     error
  //   };
  // }
}