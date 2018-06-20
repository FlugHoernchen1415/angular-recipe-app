import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Curry',
      'Tasty Red Curry',
      'https://upload.wikimedia.org/wikipedia/commons/1/1e/Indiandishes.jpg',
      [
        new Ingredient('Rice', 10),
        new Ingredient('Curry', 2),
        new Ingredient('Chicken', 5)
      ]),
    new Recipe(
      'Pizza',
      'Some Tasty Pizza',
      'https://d3a76jc0ho84i8.cloudfront.net/static/desktop/products/pizza-chicken-hollandaise.jpg',
      [
        new Ingredient('Morzarella', 2),
        new Ingredient('Tomatos', 3)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
