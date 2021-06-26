//Package imports
const oracleDB = require("oracledb");
//Local Imports
import { connectToDB } from "../../../dbconfig";

oracleDB.autoCommit = true;

export default async function registerCourse(req, res) {
  //Check if it is a Post method
  if (req.method === "POST") {
    //Try Catch block to try connect to the database

    try {
      await connectToDB().catch((err) =>
        res.status(500).json({ error: err.message })
      );
      let unit_name = "'" + req.body["Unit-name"] + "'";
      let course_ID = req.body["course"];
      const id = Math.random();

      let query = `INSERT INTO HR.UNITS VALUES (${id}, ${unit_name})`;
      let query1 = `INSERT INTO HR.COURSE_UNITS VALUES (${id}, ${course_ID})`;

      // Try catch block to execute the query
      try {
        //First Query Execution
        (await connectToDB())
          .execute(query)
          .then((response) => res.status(200).json({ response, response }))
          .catch((err) => {
            res.json({ message: err.message });
            return;
          });

        //Second Query is executed
        (await connectToDB())
          .execute(query1)
          .then((response) => res.status(200).json({ response, response }))
          .catch((err) => res.json({ message: err.message }));
      } catch (error) {
        res.json({ message: "Query Execution Failed", error: err.message });
      }
    } catch (error) {
      res.status(500).json({ message: "Connection to database refused" });
    }
  } else {
    res.status(405).json({ message: "Worng request" });
  }
  res.end();
}
