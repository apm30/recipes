import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './components/Recipe';

function App() {
	const APP_ID = 'f894dbb7';
	const APP_KEY = 'e4bbeb1227ac890dfd85e588c09c347b';

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState('');
	const [query, setQuery] = useState('chicken');

	useEffect(() => {
		getRecipes();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query]);

	const getRecipes = async () => {
		console.log('fetching');
		const response = await fetch(
			`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
		);
		const data = await response.json();
		setRecipes(data.hits);
	};

	const updateSearch = e => {
		setSearch(e.target.value);
		console.log('search', search);
	};

	const getSearch = e => {
		e.preventDefault();
		console.log('getSearch', getSearch);
		setQuery(search);
		setSearch('');
	};

	return (
		<div className="App">
			<form onSubmit={getSearch} className="search-form">
				<input
					className="search-bar"
					type="text"
					value={search}
					onChange={updateSearch}
				></input>
				<button className="search-button" type="submit">
					Search
				</button>
			</form>
			<div className="recipes">
				{recipes.map(recipe => (
					<Recipe
						title={recipe.recipe.label}
						calories={recipe.recipe.calories}
						image={recipe.recipe.image}
						ingredients={recipe.recipe.ingredients}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
