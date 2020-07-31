import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TokenService from "../Services/token-service";
import RecipeListContext from "../Context/recipeListContext";

class recipeCard extends Component {
     static contextType = RecipeListContext;
    render() {
        const { recipe } = this.props;
        const user_id = TokenService.getUserId();
        return (
            <Link to={`/my-recipes/${user_id}/${recipe.id}`}>
                <li key={recipe.id} className="recipe-li">
                <h2>{recipe.recipe_name}</h2>
                {/* {this.renderIcon(recipe)} */}
                </li>
            </Link>
        );
    }
}

export default recipeCard;
