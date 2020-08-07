import React from 'react'
import { shallow } from 'enzyme'
import CabinetCard from './cabinetCard'

describe('Cabinet Card component', () => {
  it('Renders Ingredient Name in h3 tag', () => {
    const ingredient = {
      ingredient_name: 'test_name',
      ingredient_cat: 'test_ingredient'
    }
    const wrapper = shallow(<CabinetCard ingredient={ingredient} />)
    const name = <h3>test_name</h3>;

    expect(wrapper.contains(name)).toEqual(true);
  })
  it('Renders Ingredient Category in h4 tag', () => {
    const ingredient = {
      ingredient_name: 'test_name',
      ingredient_cat: 'test_ingredient'
    }
    const wrapper = shallow(<CabinetCard ingredient={ingredient} />)
    const subHeader = <h4>test_ingredient</h4>

    expect(wrapper.contains(subHeader)).toEqual(true);
  })
})