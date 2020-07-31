import React, { Component } from "react";

const RecipeListContext = React.createContext({
  recipeList: [],
  userRecipeList: [],
  recipeAdd: false,
  error: null,
  setUserRecipeList: () => {},
  clearUserRecipeList: () => {},
  setError: () => {},
  clearError: () => {},
  setRecipeList: () => {},
  clearRecipeList: () => {},
  setRecipeAdd: () => {},
  clearRecipeAdd: () => {},
  removeUserRecipe: () => {},
});

export default RecipeListContext;

export class RecipeListProvider extends Component {
  state = {
    recipeList: [],
    userRecipeList: [],
    recipeAdd: false,
    error: null,
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setRecipeList = (recipeList) => {
    this.setState({ recipeList });
  };

  setUserRecipeList = (userRecipeList) => {
    this.setState({ userRecipeList });
  };

  clearRecipeList = () => {
    this.setState({ recipeList: [] });
  };

  clearUserRecipeList = () => {
    this.setState({ userRecipeList: [] });
  };

  removeUserRecipe = (recipe_id) => {
    const newUserRecipes = this.state.userRecipeList.filter(
      (recipe) => recipe.id !== recipe_id
    );
    this.setState({ userRecipeList: newUserRecipes });
  };

  setRecipeAdd = () => {
    this.setState({ recipeAdd: true });
  };

  clearRecipeAdd = () => {
    this.setState({ recipeAdd: false });
  };

  render() {
    const value = {
      recipeList: this.state.recipeList,
      userRecipeList: this.state.userRecipeList,
      recipeAdd: this.state.recipeAdd,
      error: this.state.error,
      setUserRecipeList: this.setUserRecipeList,
      clearUserRecipeList: this.clearUserRecipeList,
      setError: this.setError,
      clearError: this.clearError,
      setRecipeList: this.setRecipeList,
      clearRecipeList: this.clearRecipeList,
      setRecipeAdd: this.setRecipeAdd,
      clearRecipeAdd: this.clearRecipeAdd,
      removeUserRecipe: this.removeUserRecipe,
    };
    return (
      <RecipeListContext.Provider value={value}>
        {this.props.children}
      </RecipeListContext.Provider>
    );
  }
}
