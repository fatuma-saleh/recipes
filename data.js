const recipes = [
  {
    name: "scrambledEggs",
    ingredients: ["1 tsp oil", "2 eggs", "salt"],
    instructions: [
      "Beat eggs with salt",
      "Heat oil in pan",
      "Add eggs to pan when hot",
      "Gather eggs into curds, remove when cooked",
      "Salt to taste and enjoy",
    ],
  },
  {
    name: "garlicpasta",
    ingredients: [
      "500mL water",
      "100g spaghetti",
      "25mL olive oil",
      "4 cloves garlic",
      "Salt",
    ],
    instructions: [
      "Heat garlic in olive oil",
      "Boil water in pot",
      "Add pasta to boiling water",
      "Remove pasta from water and mix with garlic olive oil",
      "Salt to taste and enjoy",
    ],
  },
  {
    name: "chai",
    ingredients: [
      "400mL water",
      "100mL milk",
      "5g chai masala",
      "2 tea bags or 20 g loose tea leaves",
    ],
    instructions: [
      "Heat water until 80 C",
      "Add milk, heat until 80 C",
      "Add tea leaves/tea bags, chai masala; mix and steep for 3-4 minutes",
      "Remove mixture from heat; strain and enjoy",
    ],
  },
];

const getRecipes = function () {
  let RecipeNames = [];
  for (let recipe of recipes) {
    RecipeNames.push(recipe.name);
  }
  return RecipeNames;
};

const getIngredients = function (recipeName) {
  let steps;
  for (let recipe of recipes) {
    if (recipe.name === recipeName) {
      steps = recipe.instructions.length;
      console.log(steps);
      return recipe.ingredients;
    }
  }
  return null;
};
newRecipe = {
  name: "butteredBagel",
  ingredients: ["1 bagel", "butter"],
  instructions: ["cut the bagel", "spread butter on bagel"],
};
const addRecipe = function (newRecipe) {
  recipes.push(newRecipe);
  console.log("****", recipes);
};
const updateRecipes = function()
{
for(recipe of recipes){
  if(recipe.name === butteredBagel){
    recipe.ingredients[1] = "2 tbs butter"
  }
}
return("Recipe does not exist")
}
module.exports = { getRecipes, getIngredients, addRecipe,updateRecipes };
