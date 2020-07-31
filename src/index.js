import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { AppContext } from './Context/AppContext'
import { LoginProvider } from './Context/loginContext'
import { RecipeListProvider } from './Context/recipeListContext'
import { RecipeProvider } from './Context/recipeContext'

ReactDOM.render(
		<BrowserRouter>
			<RecipeListProvider>
				<RecipeProvider>
					<LoginProvider>
						<App/>
					</LoginProvider>
				</RecipeProvider>
			</RecipeListProvider>
		</BrowserRouter>,
	document.getElementById('root')
)
