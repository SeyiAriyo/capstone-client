import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import RecipeCard from './recipeCard'
import RecipeContext from '../Context/recipeContext'

describe('<RecipeCard />', () => {
  it('renders without crashing', () => {
    const match = {params: {id: 1}}
    const ctxval = {
      recipe: {
          id: 1,
          recipe_name: 'test-recipe',
          recipe_ingredients: ['step1','step2','step3'],
          recipe_prep: 'do the thing and test it',
          recipe_img: null
        },
      favoriteList: [],
      ingredient: 'all',
      error: null,
      setError: () => {},
      clearError: ()=> {},
      setRecipe: () => {},
      clearRecipe: ()=> {},
      setFavoriteList: () => {},
      setIngredient: () => {},
      addFavorite: () => {}
    }
    mount(
    <MemoryRouter>
      <RecipeContext.Provider value={ctxval}>
        <RecipeCard recipe={ctxval}/>
      </RecipeContext.Provider>
    </MemoryRouter>)
  })
})