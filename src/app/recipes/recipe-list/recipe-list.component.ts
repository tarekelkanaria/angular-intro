import { Component } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../recipe.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItemComponent, NgFor],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Recipe Test',
      'This is the first recipe test',
      'https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_860,ar_3:2/v1/img/recipes/18/41/0/mlUJhy1T3CFzP1eDMACA_DSC_0003.jpg'
    ),
    new Recipe(
      'Recipe Test',
      'This is the first recipe test',
      'https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_860,ar_3:2/v1/img/recipes/18/41/0/mlUJhy1T3CFzP1eDMACA_DSC_0003.jpg'
    ),
  ];
}
