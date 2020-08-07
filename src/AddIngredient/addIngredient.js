import React, { Component } from 'react'
import IngredientApiService from '../Services/ingredient-api-service'
import TokenService from '../Services/token-service'
import IngredientListContext from '../Context/IngredientListContext'
import './addIngredient.css'


class AddIngredient extends Component {
  static contextType = IngredientListContext

  handleIngredientSubmit = e => {
    e.preventDefault()
    const { ingredientList } = this.context
    const { ingredient_name, ingredient_id } = e.target
    const user_id = TokenService.getUserId()
    const ingredient = {ingredient_name:ingredient_name.value, ingredient_id:Number(ingredient_id.value), user_id} 
    //const pushToCabinet = function() { this.props.history.push('/cabinet') }

    IngredientApiService.postIngredient(ingredient, user_id)
    .then(this.context.setIngredientList([...ingredientList, ingredient]))
    .then(this.context.setIngredientAddTrue())
    //.then(setTimeout(this.props.history.push('/cabinet'), 5000))
  }

  goBack = () => {
    this.context.setIngredientAddFalse();
    this.props.history.goBack();
  }

  render(){
    const { ingredientAdd } = this.context
    return (
      <main className='ingredient_main'>
        <form className='add-ingredient-form' onSubmit={this.handleIngredientSubmit}>
          <div className='namebar'>
            <label htmlFor='ingredient_name'>Ingredient Name:{' '}</label>
            <input type='text' name='ingredient_name' id='ingredient_name' placeholder='Ex: Espolon' />
          </div>
          <div className='ingredient-select-button-div'>
            <label htmlFor='ingredient_id'>Ingredient:</label>
            <select name='ingredient_id' id='ingredient_id'>
              <option value='1'>Vegan</option>
              <option value='2'>Vegitarian</option>
              <option value='3'>Omnivorous</option>
            </select>
            <button type='submit'>
              Save
            </button>
          </div>
        </form>
        {ingredientAdd && <p className='ingredient-add-alert'>Ingredient Added to your Cabinet</p>}
        <button type='button' className='go-back' onClick={this.goBack} >Go Back</button>
      </main>
    )
  }
}

export default AddIngredient;