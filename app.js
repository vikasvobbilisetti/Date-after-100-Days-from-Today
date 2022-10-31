const express = require("express");
const app = express();
const addDays = require("date-fns/addDays");

app.get("/", (request, response) => {
  response.send(addDays(new Date(), 100));
});

app.listen(3000);
module.exports = app;
