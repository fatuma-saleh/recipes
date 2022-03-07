
//data = require('./data');
const express = require("express");
const app = express();
const PORT = 3000;
const { getRecipes } = require('./data')

app.get("/recipes", (req, res) => {
  res.json(getRecipes());
  return res.status(200).send("Status:200");
});








app.listen(PORT, () => {
  console.log(`Recipes Listening on port ${PORT}!`);
});

