//Package imports
const oracleDB = require("oracledb");
//Local imports
import { connectToDB } from "../../../dbconfig";

oracleDB.autoCommit = true;
export default async function getAllDepartments(req, res) {
  try {
    await connectToDB();

    let query = "SELECT * FROM HR.DEPARTMENTS";

    try {
      (await connectToDB())
        .execute(query)
        .then((response) => res.status(200).send(response))
        .catch((err) => res.status(500).json({ message: err.message }));
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ messsage: "Failed to execute your command" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Failed to connect to server" });
  }
}
