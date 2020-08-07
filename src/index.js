import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { RecipeListProvider } from './Context/recipeListContext'
import { RecipeProvider } from './Context/recipeContext'
import { IngredientListProvider } from './Context/IngredientListContext'
import { LoginProvider } from './Context/loginContext'
// import './index.css';
import App from './App';

ReactDOM.render(
  
      <BrowserRouter>
        <RecipeListProvider>
          <RecipeProvider>
            <IngredientListProvider>
              <LoginProvider>
                <App />
              </LoginProvider>
            </IngredientListProvider>
          </RecipeProvider>
        </RecipeListProvider>
      </BrowserRouter>, 
document.getElementById('root'));