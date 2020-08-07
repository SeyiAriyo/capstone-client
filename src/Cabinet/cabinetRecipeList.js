import React, { Component } from 'react'
import RecipeCard from '../Recipes/recipeCard'
import RecipeContext from '../Context/recipeContext'
import RecipeApiService from '../Services/recipe-api-service'
import TokenService from '../Services/token-service'
import './cabinetRecipeList.css'

class CabinetRecipeList extends Component {
  static contextType = RecipeContext

  componentDidMount() {
    const id = TokenService.getUserId()
    this.context.clearError()
    RecipeApiService.getFavorites(id)
      .then(this.context.setFavoriteList)
      .catch(this.context.setError)
  }

  renderRecipes() {
    const { favoriteList = [] } = this.context
    const { ingredientTypes = [] } = this.props
  
    let filteredList = favoriteList.filter((r => ingredientTypes.includes(r.ingredient_id)))
    
    return filteredList.map(recipe => 
      <RecipeCard
      key={recipe.id}
      recipe={recipe}
      />
      )
  }
  
  render(){
    return (
      <div>
        <h2>Recipes from your favorites you can make now</h2>
        <ul className='recipe-list' aria-live='polite'>
          {this.renderRecipes()}
        </ul>
      </div>
    )
  }
}

export default CabinetRecipeList;