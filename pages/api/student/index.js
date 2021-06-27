//Package imports
const oracleDB = require("oracledb");
//Local Imports
import { connectToDB } from "../../../dbconfig";

oracleDB.autoCommit = true;

export default async function registerStudent(req, res) {
  //Check if it is a Post method
  if (req.method === "POST") {
    //Try Catch block to try connect to the database

    try {
      await connectToDB();

      //Students Details
      let first_name = "'" + req.body["first-name"] + "'";
      let last_name = "'" + req.body["last-name"] + "'";
      let age = req.body["students-age"];
      let sex = "'" + req.body["students-gender"] + "'";
      let fee_billed = req.body["registeredUnits"].length * 10000 || 0;
      let course_id = req.body["course"];
      const student_id = Math.random();

      //Gaurdians Details
      const gaurdian_id = Math.random();
      let gaurdian_first_name = "'" + req.body["gaurdian-first-name"] + "'";
      let gaurdian_last_name = "'" + req.body["gaurdian-last-name"] + "'";
      let gaurdians_age = req.body["gaurdian-age"];
      let gaurdians_sex = "'" + req.body["gaurdian-gender"] + "'";
      let tel = req.body["tel"];

      let query = `INSERT INTO HR.STUDENT VALUES (${student_id}, ${first_name}, ${last_name}, ${fee_billed}, ${age}, ${sex}, ${course_id}, ${gaurdian_id})`;
      let query1 = `INSERT INTO HR.GARDIAN VALUES (${gaurdian_id}, ${gaurdian_first_name}, ${gaurdian_last_name}, ${tel}, ${gaurdians_sex}, ${student_id}, ${gaurdians_age})`;
      console.log(req.body);
      // Try catch block to execute the query
      try {
        //First Query Execution
        (await connectToDB())
          .execute(query)
          .then((response) => res.status(200).json({ response, response }))
          .catch((err) => {
            res.json({ message: err.message, section: "One" });
            return;
          });

        //Second Query is executed
        (await connectToDB())
          .execute(query1)
          .then((response) => res.status(200).json({ response, response }))
          .catch((err) => res.json({ message: err.message, section: "Two" }));
      } catch (error) {
        res.status(500).json({ message: "Query Execution Failed" });
      }
    } catch (error) {
      res.json({
        message: "Connection to database refused",
        error: error.message,
      });
    }
  } else {
    res.status(405).json({ message: "Worng request" });
  }
  res.end();
}
