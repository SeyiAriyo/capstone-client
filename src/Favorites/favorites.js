import React, { Component } from "react";
import RecipeCard from "../Recipes/recipeCard";
import RecipeContext from "../Context/recipeContext";
import TokenService from "../Services/token-service";
import RecipeApiService from "../Services/recipe-api-service";
import "./favorites.css";

class Favorites extends Component {
    static contextType = RecipeContext;

    componentDidMount() {
        const id = TokenService.getUserId();
        this.context.clearError();
        RecipeApiService.getFavorites(id)
          .then(this.context.setFavoriteList)
          .catch(this.context.setError);
    }
    
    setRecipeType = (e) => {
        const filter = e.target.value;
        this.context.setRecipeType(filter);
    };
    
    renderFavorites() {
        const { favoriteList = [] } = this.context;
        const filter = this.context.recipeType;
        let filteredList = [];
    
        if (filter === "all") {
          filteredList = favoriteList;
        } else {
          filteredList = favoriteList.filter(
            (recipeType) => recipeType.recipeType_id === Number(filter)
          );
        }
    
        return filteredList.map((recipe) => (
          <li key={recipe.favorite_id}>
            <RecipeCard recipe={recipe} />
          </li>
        ));
    }

    render() {
        return (
            <main className="favorites-main">
            <h2>Your Favorite Cocktails</h2>
            <div className="fav-search">
                <label htmlFor="recipeType-search">Recipe Type:</label>
                <select
                name="recipeType-search"
                id="recipeType-search"
                onChange={this.setRecipeType}
                >
                <option value="all">All</option>
                <option value='1'>Vegan</option>
                <option value='2'>Vegetarian</option>
                <option value='3'>Omnivorous</option>
                </select>
            </div>
            <ul className="favorites-list" aria-live="polite">
                {this.renderFavorites()}
            </ul>
            </main>
        );
    }
}

export default Favorites;
