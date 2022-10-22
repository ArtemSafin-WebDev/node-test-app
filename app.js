const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Ну как там с деньгами?</h1>");
});

app.listen(4000, () => {
  console.log("App listening on port 4000");
});
