import React, { Component } from 'react'
import { Route, Link, Switch, withRouter } from 'react-router-dom'
import Store from './store'

import Recipes from './Recipes/recipes';
import RecipePage from './RecipePage/RecipePage';
import Favorites from './Favorites/favorites';
import RecipeExtended from './Recipes/recipeExtended.js';
import UserRecipeExtended from './/userRecipesCard/userRecipeExtended';
import AddRecipe from './AddRecipe/AddRecipe.js'
import Landing from './Login/landing';
import PrivateRoute from './Utils/PrivateRoute';
import PublicOnlyRoute from './Utils/PublicOnlyRoute';

import config from './config'
import { library } from '@fortawesome/fontawesome-svg-core';



import AppContext from './Context/AppContext'
import './App.css'

import {
  faGlassWhiskey,
  faGlassMartiniAlt,
} from '@fortawesome/free-solid-svg-icons';

library.add(faGlassWhiskey, faGlassMartiniAlt);

class App extends Component {

    render() {
        return (
          <>
          <Recipes/>
          <AddRecipe/>
          <RecipePage/>
          <Favorites/>
          <PrivateRoute exact path='/recipes' component={Recipes} />

          <PrivateRoute path='/recipes/:id' component={RecipeExtended} />

          <PrivateRoute
              exact
              path='/my-recipes/:user_id'
              component={RecipePage}
            />

          <PrivateRoute path='/add-recipe' component={AddRecipe} />

          <PrivateRoute path='/favorites' component={Favorites} />

          <PublicOnlyRoute exact path='/' component={Landing} />

          </>
        )

    }
}

export default withRouter(App);