import config from "../config";
import TokenService from "./token-service";

const RecipeApiService = {
  getRecipes() {
    return fetch(`${config.API_ENDPOINT}/recipes`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getRecipe(id) {
    return fetch(`${config.API_ENDPOINT}/recipes/${id}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getUserRecipeById(user_id, id) {
    return fetch(`${config.API_ENDPOINT}/user-recipes/${user_id}/${id}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getUserRecipeByUser(user_id, id) {
    return fetch(`${config.API_ENDPOINT}/user-recipes/${user_id}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postUserRecipe(user_id, recipe) {
    return fetch(`${config.API_ENDPOINT}/user-recipes/${user_id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(recipe),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  removeUserRecipe(user_id, id) {
    return fetch(`${config.API_ENDPOINT}/user-recipes/${user_id}/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({ user_id, id: id }),
    })
      .then((res) => {
        // console.log(res);
        return res;
      })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      );
  },

  getRecipeBySearch(keyword, filter) {
    return fetch(
      `${config.API_ENDPOINT}/recipes?keyword=${keyword}&filter=${filter}`,
      {
        headers: {
          authorization: `bearer ${TokenService.getAuthToken()}`,
        },
      }
    ).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getFavorites(id) {
    return fetch(`${config.API_ENDPOINT}/favorites/${id}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postFavorite(user_id, id) {
    return fetch(`${config.API_ENDPOINT}/favorites`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        recipe_id: id,
        user_id,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  removeFavorite(user_id, id) {
    return fetch(`${config.API_ENDPOINT}/favorites`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({ user_id, recipe_id: id }),
    })
      .then((res) => {
        // console.log(res);
        return res;
      })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      );
  },
};

export default RecipeApiService;
