const express = require("express");

const app = express();

const PORT = 4000;
const HOST = "127.0.0.1";
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
 try {
  res.send("docker is up and running");
 } catch (err) {
  console.log(err);
 }
});

app.listen(PORT, HOST, () => {
 console.log("App listening on port 4000--");
});
