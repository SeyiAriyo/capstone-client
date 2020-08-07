import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import RecipeList from './recipeList'
import RecipeListContext from '../Context/recipeListContext'

describe('<RecipeList />', () => {
  it('renders without crashing', () => {
    const match = {params: {id: 1}}
    const testRecipes = [
      {
        id: 1,
        recipe_img: 'no img',
        recipe_ingredients: '2oz test,1oz test,.75 test',
        recipe_name: 'Test Recipe 1',
        recipe_prep: 'shake the stuff, do the tests',
        ingredient_cat: 'testIngredient'
      },
      {
        id: 2,
        recipe_img: 'no img',
        recipe_ingredients: '2oz test,1oz test,.75 test',
        recipe_name: 'Test Recipe 2',
        recipe_prep: 'shake the stuff, do the tests',
        ingredient_cat: 'OtherTestIngredient'
      },
      {
        id: 3,
        recipe_img: 'no img',
        recipe_ingredients: '2oz test,1oz test,.75 test',
        recipe_name: 'Test Recipe 3',
        recipe_prep: 'shake the stuff, do the tests',
        ingredient_cat: 'AnotherTestIngredient'
      }
    ]
    const ctxval = {
      recipeList: testRecipes,
      error: null,
      setError: () => {},
      clearError: ()=> {},
      setRecipeList: () => {}
    }
    const tree = renderer.create(
      <MemoryRouter>
        <RecipeListContext.Provider value={ctxval}>
          <RecipeList match={match} />
        </RecipeListContext.Provider>
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  })
})