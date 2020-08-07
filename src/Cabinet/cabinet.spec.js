import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import toJson from 'enzyme-to-json'
import Cabinet from './cabinet'
import IngredientListContext from '../Context/ingredientListContext'

describe(`<Cabinet />`, () => {
  it('renders witout crashing with ingredients', () => {
    const match = {params: {id: 1}}
    const testIngredients = [
      {
        id:1,
        ingredient_cat: 'vodka',
        ingredient_id: 2,
        ingredient_name: 'Test Name1',
        user_id: 1
      },
      {
        id:2,
        ingredient_cat: 'tequila',
        ingredient_id: 1,
        ingredient_name: 'Test Name2',
        user_id: 1
      },
      {
        id:3,
        ingredient_cat: 'bourbon',
        ingredient_id: 4,
        ingredient_name: 'Test Name3',
        user_id: 1
      },
    ]
    const ctxval = {
      ingredientList: testIngredients,
      ingredientTypes: [1,2,4],
      ingredientAdd: false,
      error: null,
      setError: () => {},
      clearError: ()=> {},
      setIngredientTypes: () => {},
      removeIngredientType: ()=> {},
      setIngredientList: () => {},
      removeIngredient: () => {},
      setIngredientAddTrue: () => {},
      setIngredientAddFalse: () => {}
    }
  
    mount(<MemoryRouter>
      <IngredientListContext.Provider value={ctxval}>
        <Cabinet match={match}/>
      </IngredientListContext.Provider>
    </MemoryRouter>)
  })
  it('renders witout crashing with no ingredients', () => {
    const match = {params: {id: 1}}
    const testIngredients = []
    const ctxval = {
      ingredientList: testIngredients,
      ingredientTypes: [],
      ingredientAdd: false,
      error: null,
      setError: () => {},
      clearError: ()=> {},
      setIngredientTypes: () => {},
      removeIngredientType: ()=> {},
      setIngredientList: () => {},
      removeIngredient: () => {},
      setIngredientAddTrue: () => {},
      setIngredientAddFalse: () => {}
    }
  
    mount(<MemoryRouter>
      <IngredientListContext.Provider value={ctxval}>
        <Cabinet match={match}/>
      </IngredientListContext.Provider>
    </MemoryRouter>)
  })
})