
//data = require('./data');
const express = require("express");
const app = express();
const PORT = 3000;
const { getRecipes,getIngredients,addRecipe } = require('./data')

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
app.post("/recipes", (req, res) => {
  //addRecipe(req.body)
  addRecipe();
  res.status(201)
});
app.put("/recipes", (req, res) => {
  updateRecipes();
 res.status(204)
});

app.listen(PORT, () => {
  console.log(`Recipes Listening on port ${PORT}!`);
});

