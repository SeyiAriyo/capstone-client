import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./recipeCard.css";

class RecipeCard extends Component {
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
    return (
      <Link to={`/recipes/${recipe.id}`}>
        <li key={recipe.id} className="recipe-li">
          <h2>{recipe.recipe_name}</h2>
          {/* {this.renderIcon(recipe)} */}
        </li>
      </Link>
    );
  }
}

export default RecipeCard;
