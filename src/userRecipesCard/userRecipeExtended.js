import React, { Component } from "react";
import RecipeContext from "../Context/recipeContext";
import RecipeApiService from "../Services/recipe-api-service";
import TokenService from "../Services/token-service";
import "./userRecipeExtended.css";

class UserRecipeExtended extends Component {
  static contextType = RecipeContext;

  componentDidMount() {
    const { id } = this.props.match.params;
    const user_id = TokenService.getUserId();
    this.context.clearError();
    RecipeApiService.getUserRecipeById(user_id, id)
      .then(this.context.setRecipe)
      .catch(this.context.setError);

    RecipeApiService.getFavorites(user_id)
      .then(this.context.setFavoriteList)
      .catch(this.context.setError);
  }

  renderIngredients() {
    const { recipe } = this.context;
    const ingredients = recipe.recipe_ingredients + "";
    const split = ingredients
      .split(",")
      .map((i, idx) => <li key={idx}>{i}</li>);
    return split;
  }

  goBack = () => {
    this.props.history.goBack();
  };

  handleDelete = () => {
    const user_id = TokenService.getUserId();
    const { id } = this.props.match.params;

    RecipeApiService.removeUserRecipe(user_id, id)
      // .then(this.props.handleDelete(id))
      .then(this.props.history.push(`/my-recipes/${user_id}`));
  };

  render() {
    const { recipe } = this.context;

    return (
      <main className="expanded-main">
        <section className="recipe-expanded">
          <div className="recipe-name-icon-div">
            <h2>{recipe.recipe_name}</h2>
          </div>
          <div className="recipe-specs-make-div">
            <div className="specs-div">
              <h3>Ingredients:</h3>
              <ul>{this.renderIngredients()}</ul>
            </div>
            <div className="make-div">
              <h3>Steps:</h3>
              <p>{recipe.recipe_prep}</p>
              <div className="edit-delete-buttons">
                {/* <button type="button" className="edit">
                  Edit
                </button> */}
                <button
                  type="button"
                  className="delete"
                  onClick={this.handleDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </section>
        <button className="go-back" onClick={this.goBack}>
          Go Back
        </button>
      </main>
    );
  }
}

export default UserRecipeExtended;
