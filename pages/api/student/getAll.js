//Package imports
const oracleDB = require("oracledb");
//Local imports
import { connectToDB } from "../../../dbconfig";

oracleDB.autoCommit = true;
export default async function getAllStudents(req, res) {
  try {
    await connectToDB();

    let query =
      "SELECT * FROM HR.STUDENT INNER JOIN HR.COURSE ON HR.STUDENT.COURSE_ID = HR.COURSE.COURSE_ID  INNER JOIN HR.DEPARTMENTS ON HR.COURSE.DEPARTMENT_ID = HR.DEPARTMENTS.DEPARTMENT_ID";

    try {
      (await connectToDB())
        .execute(query)
        .then((response) => res.status(200).json({ response, response }))
        .catch((err) => res.json({ message: err.message }));
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ messsage: "Failed to execute your command" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Failed to connect to server" });
  }
}
