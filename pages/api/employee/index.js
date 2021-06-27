const oracleDB = require("oracledb");

import { connectToDB } from "../../../dbconfig";

export default async function registerStudents(req, res) {
  //Block to try and connect to the database
  try {
    await connectToDB();

    let first_name = "'" + req.body["first-name"] + "'";
    let last_name = "'" + req.body["last-name"] + "'";
    let age = req.body["age"];
    let sex = "'" + req.body["gender"] + "'";
    let title = "'" + req.body["title"] + "'";
    let tel = req.body["tel"];
    let department = req.body["Department"];
    let area = "'" + req.body["area"] + "'";

    const staff_id = Math.random();

    let query = `INSERT INTO HR.EMPLOYEE VALUES (${staff_id}, ${first_name}, ${last_name}, ${age}, ${sex}, ${tel})`;
    let query2 = ``;

    if (req.body.employeeType == "Lecturer") {
      query2 = `INSERT INTO HR.LECTURES VALUES (${title}, ${staff_id}, ${department})`;
    } else {
      query2 = `INSERT INTO HR.STAFF VALUES (${area}, ${staff_id}, ${title})`;
      console.log(query2);
    }

    //Try catch block for query execution
    try {
      (await connectToDB())
        .execute(query)
        .catch((err) => res.json({ message: err.message }));

      (await connectToDB())
        .execute(query2)
        .then((response) => res.json({ response }))
        .catch((err) => res.json({ message: err.message }));
    } catch (error) {
      res.json({ message: "query execution failed", error });
    }
  } catch (error) {
    res.json({ message: "Connection to database failes", error });
  }
}
