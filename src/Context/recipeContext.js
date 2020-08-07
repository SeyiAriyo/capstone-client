import React, { Component } from 'react'

export const nullRecipe = {
  recipe_name: '',
  recipe_ingredients: [],
  recipe_prep: '',
  recipe_img: ''
}

export const RecipeContext = React.createContext({
  recipe: nullRecipe,
  error: null,
  favoriteList: [],
  ingredient: 'all',
  setError: () => {},
  clearError: ()=> {},
  setRecipe: () => {},
  clearRecipe: ()=> {},
  setFavoriteList: () => {},
  setIngredient: () => {},
  addFavorite: () => {}
})

export default RecipeContext

export class RecipeProvider extends Component {
  state = {
    favoriteList: [],
    ingredient: 'all',
    recipe: nullRecipe,
    error: null
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setRecipe = recipe => {
    this.setState({ recipe })
  }

  clearRecipe = () => {
    this.setState({ recipe: nullRecipe })
  }

  setFavoriteList = (favoriteList) => {
    this.setState({ favoriteList })
  }

  clearFavoriteList = () => {
    this.setState({ favoriteList: [] })
  }

  setIngredient = (ingredient) => {
    this.setState({ ingredient })
  }

  addFavorite = (recipe) => {
    this.setFavoriteList([
      ...this.state.favoriteList,
      recipe
    ])
  }

  removeFavorite = (recipe_id) => {
    const newFavorites = this.state.favoriteList.filter(recipe => recipe.id !== recipe_id)
    this.setState({ favoriteList: newFavorites })
  } 

  render() {
    const value = {
      favoriteList: this.state.favoriteList,
      ingredient: this.state.ingredient,
      recipe: this.state.recipe,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setRecipe: this.setRecipe,
      clearRecipe: this.clearRecipe,
      setFavoriteList: this.setFavoriteList,
      clearFavoriteList: this.clearFavoriteList,
      setIngredient: this.setIngredient,
      addFavorite: this.addFavorite,
      removeFavorite: this.removeFavorite
    }
    return (
      <RecipeContext.Provider value={value}>
        {this.props.children}
      </RecipeContext.Provider>
    )
  }
}