
//data = require('./data');
const express = require("express");
const app = express();
const PORT = 3000;
const { getRecipes,getIngredients } = require('./data')

app.get("/recipes", (req, res) => {
  res.json(getRecipes());
 res.status(200).send("Status:200");
});

app.get("/recipes/details/:recipeName", (req, res) => {
  const recipeName = req.params.recipeName;
  console.log("++",recipeName)
const  ingredient =  getIngredients(recipeName)
console.log(ingredient)
  res.json(ingredient);
//  res.status(200).send("Status:200");
});








app.listen(PORT, () => {
  console.log(`Recipes Listening on port ${PORT}!`);
});

