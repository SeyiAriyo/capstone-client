import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import toJson from 'enzyme-to-json'
import AddIngredient from './addIngredient'
import RecipeContext from '../Context/recipeContext'

describe('<AddIngredient />', () => {
  it('renders without crashing', () => {
    const match = {params: {id: 1}}
    mount(
      <MemoryRouter>
        <AddIngredient match={match}/>
      </MemoryRouter>
    )
  })
  it('renders as expected', () => {
    const match = { params: { id: 1 } }
    const tree = renderer.create(
      <MemoryRouter>
        <AddIngredient match={match}/>
      </MemoryRouter>
    ).toJSON()
    expect(tree).toMatchSnapshot();
  })
})