const fs = require("fs");
const express = require("express");

const app = express();
app.get("/", (req, res) => {
  return res.send("Hello from Home page");
});
app.get("/about", (req, res) => {
  return res.send("Hello from about page");
});
app.prependOnceListener("/about", (req, res) => {
  return res.send("new post");
});

(app.listen(8000), () => console.log("Server is running on port 8000"));
