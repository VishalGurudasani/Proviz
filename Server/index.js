const connectToMongo = require("./DB");
const express = require("express");
var cors = require("cors");
const { createUser, getAllUser } = require("./RouteController/Controller");

connectToMongo();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post("/api/apply",createUser)
app.get("/api/admin/user",getAllUser)


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
