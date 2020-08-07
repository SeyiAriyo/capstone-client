import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import toJson from 'enzyme-to-json'
import Favorites from './favorites'
import RecipeContext from '../Context/recipeContext'

describe('<Favorites />', () => {
  it('renders without crashing', () => {
    const match = {params: {id: 1}}
    mount(
      <MemoryRouter>
        <Favorites match={match}/>
      </MemoryRouter>
    )
  })
  it('renders as expected', () => {
    const match = { params: { id: 1 } }
    const tree = renderer.create(
      <MemoryRouter>
        <Favorites match={match}/>
      </MemoryRouter>
    ).toJSON()
    expect(tree).toMatchSnapshot();
  })
  it('renders as expected with favorites', () => {
    const match = { params: { id: 1 } }
    const ctxval = {
      recipe: {
        id: 1,
        recipe_name: 'test-recipe',
        recipe_ingredients: ['step1','step2','step3'],
        recipe_prep: 'do the thing and test it',
        recipe_img: null,
      },
      favoriteList: [
        {
          favorite_id: 1,
          id:2,
          recipe_name: 'test fave 1',
          ingredient_id: 2,
          user_id: 1
        },
        {
          favorite_id: 2,
          id:3,
          recipe_name: 'test fave 2',
          ingredient_id: 3,
          user_id: 1
        }
      ],
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
    const tree = renderer.create(
      <MemoryRouter>
        <RecipeContext.Provider value={ctxval}>
          <Favorites match={match}/>
        </RecipeContext.Provider>
      </MemoryRouter>
    ).toJSON()
    expect(tree).toMatchSnapshot();
  })
})