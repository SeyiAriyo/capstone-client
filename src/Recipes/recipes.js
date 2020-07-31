import React, { Component } from 'react'
import RecipeSearch from './recipeSearch'
import RecipeList from './recipeList'
//import './recipes.css'

class Recipes extends Component {
  render(){
    return (
      <main className='recipe_main'>
        <RecipeSearch />
        <RecipeList />
      </main>
    )
  }
}

export default Recipes;