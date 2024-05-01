const express = require("express");
const app = express();
const Router = express().router();

const PORT = 8080;

app.use("/", (req, res) => res.send("server is working fine"));

app.router("/hello", (req, res) => res.send("Hello World"));

app.listen(PORT, () =>
  console.log(`local server is running on: http://localhost:${PORT}`)
);
