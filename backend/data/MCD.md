# MCD

![image](https://user-images.githubusercontent.com/115977341/225884158-71f8c4f0-e1fb-4d75-9b90-f6502c1b4992.png)

## Code Mocodo

```
step: code_step, description
has, 11 step, 1N recipe
recipe: code_recipe, name, description, grade
used, 1N recipe, 1N ingredient : code_recipe, code_ingredient
ingredient: code_ingredient, name
```
# MLD

```
step: code_step, description, code_recipe
has, 11 step, 1N recipe
recipe: code_recipe, name, description, grade
ingredient_recipe, 1N recipe, 1N ingredient : code_recipe, code_ingredient
ingredient: code_ingredient, name
```
