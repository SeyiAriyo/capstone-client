import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Nav from './Nav/nav-top';
import Footer from './Nav/footer';
import Recipes from './Recipes/recipes';
import Cabinet from './Cabinet/cabinet';
import AddIngredient from './AddIngredient/addIngredient';
import MyRecipes from './myRecipes/myRecipes';
import Favorites from './Favorites/favorites';
import RecipeExtended from './Recipes/recipeExtended';
import UserRecipeExtended from './/userRecipesCard/userRecipeExtended';
import AddRecipe from './addRecipe/addRecipe';
import Landing from './Login/landing';
import PrivateRoute from './Utils/PrivateRoute';
import PublicOnlyRoute from './Utils/PublicOnlyRoute';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGlassWhiskey,
  faGlassMartiniAlt,
} from '@fortawesome/free-solid-svg-icons';

library.add(faGlassWhiskey, faGlassMartiniAlt);

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className='parallax'>
          <div className='parallax_layer parallax_layer-back'></div>
          <div className='parallax_layer parallax_layer-base'>
            <PrivateRoute exact path='/recipes' component={Recipes} />

            <PrivateRoute path='/recipes/:id' component={RecipeExtended} />

            <PrivateRoute path='/cabinet' component={Cabinet} />

            <PrivateRoute path='/add-ingredient' component={AddIngredient} />

            <PrivateRoute
              exact
              path='/my-recipes/:user_id'
              component={MyRecipes}
            />

            <PrivateRoute
              path='/my-recipes/:user_id/:id'
              component={UserRecipeExtended}
            />

            <PrivateRoute path='/add-recipe' component={AddRecipe} />

            <PrivateRoute path='/favorites' component={Favorites} />

            <PublicOnlyRoute exact path='/' component={Landing} />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default withRouter(App);
