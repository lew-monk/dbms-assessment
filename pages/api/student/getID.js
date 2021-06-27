//Package imports
const oracleDB = require("oracledb");
//Local imports
import { connectToDB } from "../../../dbconfig";

oracleDB.autoCommit = true;
export default async function getID(req, res) {
  try {
    await connectToDB();

    let query = "SELECT GAURDIAN_ID FROM HR.STUDENT";

    try {
      (await connectToDB())
        .execute(query)
        .then((response) => {
          res.json({ response, response });
          res.end();
        })
        .catch((err) => {
          res.json({ message: err.message });
          res.end();
        });
    } catch (error) {
      console.log(error.message);
      res.json({ messsage: "Failed to execute your command" });
    }
  } catch (error) {
    console.log(error.message);
    res.json({ message: "Failed to connect to server" });
  }
}
