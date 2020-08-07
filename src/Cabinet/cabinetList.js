import React, { Component } from 'react'
import IngredientListContext from '../Context/IngredientListContext'
import CabinetCard from './cabinetCard'
import './cabinetList.css'

class CabinetList extends Component {
  static contextType = IngredientListContext

  renderCabinetList() {
    const { ingredientList = [] } = this.context
    return ingredientList.map(ingredient => 
      <CabinetCard
      key={ingredient.id}
      ingredient={ingredient}
      />
      )
  }

  render(){
    return (
      <ul className='cabinetlist-list'>
        {this.renderCabinetList()}
      </ul>
    )
  }
}

export default CabinetList;