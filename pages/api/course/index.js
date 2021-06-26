//Package imports
const oracleDB = require("oracledb");
//Local Imports
import { connectToDB } from "../../../dbconfig";

oracleDB.autoCommit = true;

export default async function registerCourse(req, res) {
  //Check if it is a Post method
  if (req.method == "POST") {
    //Try Catch block to try connect to the database

    try {
      await connectToDB().catch((err) =>
        res.status(500).json({ error: err.message })
      );
      let course_name = "'" + req.body["Course-name"] + "'";
      let department_ID = req.body["Department"];
      const id = Math.random();

      let query = `INSERT INTO HR.COURSE VALUES (${course_name}, ${department_ID}, ${id})`;

      // Try catch block to execute the query
      try {
        (await connectToDB())
          .execute(query)
          .then((response) => res.status(200).json({ response, response }))
          .catch((err) => res.json({ message: err }));
      } catch (error) {
        res.status(500).json({ message: "Query Execution Failed" });
      }
    } catch (error) {
      res.status(500).json({ message: "Connection to database refused" });
    }
  } else {
    res.status(405).json({ message: "Worng request" });
  }
  res.end();
}
