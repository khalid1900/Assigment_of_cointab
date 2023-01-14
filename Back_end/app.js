import express from "express";
const app = express();
import cors from "cors";
import { getDataAndSave, deleteUserData,userDetailsFn} from "./controller/callbackfunction.js";
import "./src/connection/connection.js";
import "./src/model/schema.js";
const port = 9000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/userdata", getDataAndSave);
app.post("/deletedata", deleteUserData);
app.post("/userdetails", userDetailsFn);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
