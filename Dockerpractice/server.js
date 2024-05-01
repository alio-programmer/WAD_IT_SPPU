const express = require("express");
const app = express();
app.use(express.static("public"));

app.listen(8080, () => {
  console.log("server listening on http://localhost:8080");
});

app.use("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
