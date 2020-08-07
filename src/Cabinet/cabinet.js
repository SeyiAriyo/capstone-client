import React, { Component } from "react";
import { Link } from "react-router-dom";
import CabinetList from "./cabinetList";
import CabinetRecipeList from "./cabinetRecipeList";
import TokenService from "../Services/token-service";
import IngredientListContext from "../Context/IngredientListContext";
import IngredientApiService from "../Services/ingredient-api-service";
import "./cabinet.css";

class Cabinet extends Component {
  static contextType = IngredientListContext;
  componentDidMount() {
    let ingredientTypes = [];
    const id = TokenService.getUserId();
    this.context.clearError();
    IngredientApiService.getIngredients(id)
      .then((res) => {
        res.map((r) => {
          return ingredientTypes.push(r.ingredient_id);
        });
        return res;
      })
      .then(this.context.setIngredientList)
      .catch(this.context.setError);
    this.context.setIngredientTypes(ingredientTypes);
  }
  render() {
    const user_id = TokenService.getUserId();
    return (
      <main className="cabinet-main">
        <h2>Welcome to your Cabinet!</h2>
        <section className="cabinet-nav">
          <Link to={"/favorites"}>Favorites</Link>
          {" | "}
          <Link to={"/add-ingredient"}>Add Ingredient</Link>
          {" | "}
          <Link to={`/my-recipes/${user_id}`}>My Recipes</Link>
        </section>
        <section className="cabinet-lists">
          <CabinetList />
          <CabinetRecipeList ingredientTypes={this.context.ingredientTypes} />
        </section>
      </main>
    );
  }
}

export default Cabinet;
