import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TokenService from "../Services/token-service";
import RecipeListContext from "../Context/recipeListContext";
// import "./recipeCard.css";

class UserRecipeCard extends Component {
  static contextType = RecipeListContext;
  renderIcon = (recipe) => {
    let result = "glass-whiskey";
    if (recipe.recipe_img === "cocktailIcon") {
      result = "glass-martini-alt";
    }
    return (
      <div className="recipe-icon">
        <FontAwesomeIcon icon={result} />
      </div>
    );
  };

  render() {
    const { recipe } = this.props;
    const user_id = TokenService.getUserId();
    return (
      <Link to={`/my-recipes/${user_id}/${recipe.id}`}>
        <li key={recipe.id} className="recipe-li">
          <h2>{recipe.recipe_name}</h2>
          {this.renderIcon(recipe)}
        </li>
      </Link>
    );
  }
}

export default UserRecipeCard;
