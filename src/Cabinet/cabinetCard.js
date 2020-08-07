import React, { Component } from 'react'
import IngredientListContext from '../Context/IngredientListContext'
import IngredientApiService from '../Services/ingredient-api-service'
import './cabinetCard.css'

class CabinetCard extends Component {
  static contextType = IngredientListContext

  handleIngredientRemove = () => {
    const { id } = this.props.ingredient
    const { user_id } = this.props.ingredient
    const { ingredient_id } = this.props.ingredient

    const ingredient = {id}
    
    IngredientApiService.deleteIngredient(ingredient, user_id)
    .then(this.context.removeIngredient(id))
    .then(this.context.removeIngredientType(ingredient_id))
  }

  renderIcon(ingredientType) {
    let result;

    if(ingredientType)
      result = ingredientType.slice(0, 1)

   return <h2>{result}</h2>
  }

  render(){
    let { ingredient } = this.props
    return (
      <li className='cabinet-li'>
        {/* <div className='ingredient-icon'>
          {this.renderIcon(ingredient.ingredient_cat)}
        </div> */}
        <div className='header-box'>
          <h3>{ingredient.ingredient_name}</h3>
        </div>
        <h4>{ingredient.ingredient_cat}</h4>
        <button type='button' onClick={this.handleIngredientRemove}>Remove Ingredient</button>
      </li>
    )
  }
}

export default CabinetCard;