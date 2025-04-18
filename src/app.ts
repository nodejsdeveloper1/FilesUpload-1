import connection from "./config/dbconnection";
const express = require("express");
const bodyParser = require("body-parser");
import router from "./routes/all.router"
connection


const app = express();
app.use(bodyParser.json());

app.use("/project", router);
app.listen(8000, () => {
  console.log("Server is running on port 8000");
}       
);