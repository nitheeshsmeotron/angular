import { AuthServiceService } from './../auth/auth-service.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(private auth: AuthServiceService, private http: Http, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put(
        'https://recipe-book-3e94f.firebaseio.com/recipes.json/?auth=' + this.auth.getAccessToken(),
         this.recipeService.getRecipes()
         );
  }

  getRecipes() {
    this.http
      .get('https://recipe-book-3e94f.firebaseio.com/recipes.json/?auth=' + this.auth.getAccessToken())
      .map((response: Response) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      })
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
