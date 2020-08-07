import React, { Component } from "react";

const IngredientListContext = React.createContext({
  ingredientList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setIngredientList: () => {},
});

export default IngredientListContext;

export class IngredientListProvider extends Component {
  state = {
    ingredientList: [],
    ingredientTypes: [],
    ingredientAdd: false,
    error: null,
  };

  setIngredientList = (ingredientList) => {
    this.setState({ ingredientList });
  };

  removeElement(arr, elem) {
    let idx = arr.indexOf(elem);
    if (idx > -1) {
      arr.splice(idx, 1);
    }
  }

  removeIngredientType = (ingredientId) => {
    this.removeElement(this.state.ingredientTypes, ingredientId);
  };

  setIngredientTypes = (newIngredient) => {
    this.setState({
      ingredientTypes: newIngredient,
    });
  };

  setError = (error) => {
    console.log(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  removeIngredient = (id) => {
    const newIngredients = this.state.ingredientList.filter((s) => s.id !== id);
    this.setState({ ingredientList: newIngredients });
  };

  setIngredientAddTrue = () => {
    this.setState({ ingredientAdd: true });
  };

  setIngredientAddFalse = () => {
    this.setState({ ingredientAdd: false });
  };

  render() {
    const value = {
      ingredientList: this.state.ingredientList,
      ingredientTypes: this.state.ingredientTypes,
      ingredientAdd: this.state.ingredientAdd,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setIngredientList: this.setIngredientList,
      removeIngredient: this.removeIngredient,
      setIngredientTypes: this.setIngredientTypes,
      removeIngredientType: this.removeIngredientType,
      setIngredientAddTrue: this.setIngredientAddTrue,
      setIngredientAddFalse: this.setIngredientAddFalse,
    };
    return (
      <IngredientListContext.Provider value={value}>
        {this.props.children}
      </IngredientListContext.Provider>
    );
  }
}
