const oracle = require("oracledb");

export async function connectToDB() {
  let connection;

  try {
    connection = await oracle.getConnection({
      user: "SYSTEM",
      password: process.env.NODE_ORACLE_DB_PASSWORD,
      connectString: "localhost:1521/XE",
    });
  } catch (error) {
    console.log(error.message);
  }

  return connection;
}
