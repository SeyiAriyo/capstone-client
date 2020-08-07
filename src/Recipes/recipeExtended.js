import React, { Component } from "react";
import RecipeContext from "../Context/recipeContext";
import RecipeApiService from "../Services/recipe-api-service";
import TokenService from "../Services/token-service";
import "./recipeExtended.css";

class RecipeExtended extends Component {
  static contextType = RecipeContext;

  componentDidMount() {
    const { id } = this.props.match.params;
    const user_id = TokenService.getUserId();
    this.context.clearError();
    RecipeApiService.getRecipe(id)
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

  handleFavoriteAdd = () => {
    const recipe_id = this.context.recipe.id;
    const user_id = TokenService.getUserId();
    RecipeApiService.postFavorite(user_id, recipe_id)
      .then((res) => {
        console.log(res);
        return res;
      })
      .then(this.context.addFavorite);
  };

  handleFavoriteRemove = () => {
    const recipe_id = this.context.recipe.id;
    const user_id = TokenService.getUserId();

    RecipeApiService.removeFavorite(user_id, recipe_id).then(
      this.context.removeFavorite(recipe_id)
    );
  };

  renderFavoriteButton = () => {
    const recipe_id = this.context.recipe.id;
    const { favoriteList } = this.context;
    let button = (
      <button
        type="button"
        className="add-fav"
        onClick={this.handleFavoriteAdd}
      >
        Add to Favorites
      </button>
    );

    for (let i = 0; i < favoriteList.length; i++) {
      if (favoriteList[i].id === recipe_id) {
        button = (
          <button
            type="button"
            className="remove"
            onClick={this.handleFavoriteRemove}
          >
            Remove from Favorites
          </button>
        );
      }
    }
    return button;
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
              {this.renderFavoriteButton()}
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

export default RecipeExtended;
