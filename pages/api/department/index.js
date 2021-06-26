//Package imports
const { v4: uuidv4 } = require("uuid");
const oracleDB = require("oracledb");
//Local Imports
import { connectToDB } from "../../../dbconfig";

oracleDB.autoCommit = true;

export default async function registerDepartment(req, res) {
  if (req.method === "POST") {
    try {
      await connectToDB();
      const department_ID = Math.random();
      const department_name = "'" + req.body["department-name"] + "'";

      let query = `INSERT INTO HR.DEPARTMENTS VALUES (${department_ID}, ${department_name})`;

      try {
        (await connectToDB())
          .execute(query)
          .then((response) => res.status(200).json({ response, response }))
          .catch((err) => res.json({ message: err.message, query }));
      } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Query Exection Failed" });
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: "Connection to database refused" });
    }
  } else {
    res.status(405);
    res.end();
  }
}
