// mongodb+srv://<username>:<password>@cluster0.fgp6xm2.mongodb.net/
const express = require("express");
const userModel = require("./mongoDB/model");
const connect = require("./mongoDB/mongo");
const cors = require("cors");

const app = express();
connect();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("server running at this port");
});

app.post("/user", (req, res) => {
  const body = req.body;
  const model = {
    username: body.username,
    password: body.password,
  };
  userModel.create(model);
  res.json(model);
});
app.get("/user/:username", async (req, res) => {
  const { username } = req.params;
  const userData = await userModel.find();
  const filt = userData.filter((element) => {
    if (element.username == username) {
      return element;
    }
  });
  res.json(filt);
});

app.listen(8080, () => {
  console.log("started user port at", 8080);
});
