import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import toJson from 'enzyme-to-json'
import CabinetRecipeList from './cabinetRecipeList'
import RecipeContext from '../Context/recipeContext'

describe('<CabinetRecipeList />', () => {
  it('renders without crashing', () => {
    const match = {params: {id: 1}}
    mount(
      <MemoryRouter>
        <CabinetRecipeList match={match}/>
      </MemoryRouter>
    )
  })
})