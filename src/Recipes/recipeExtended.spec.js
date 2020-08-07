import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import RecipeExtended from './recipeExtended'
import RecipeContext from '../Context/recipeContext'

describe('<RecipeExtended />', () => {
  it('renders without crashing', () => {
    const match = {params: {id: 1}}
    mount(<MemoryRouter><RecipeExtended match={match}/></MemoryRouter>)
  });
  it('renders Recipe Extended with recipe info', () => {
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
    const tree = renderer.create(
      <MemoryRouter>
        <RecipeContext.Provider value={ctxval}>
          <RecipeExtended match={match} />
        </RecipeContext.Provider>
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  })
})