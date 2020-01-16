import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
	const APP_ID = 'f894dbb7';
	const APP_KEY = 'e4bbeb1227ac890dfd85e588c09c347b';

	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		getRecipes();
	}, []);

	const getRecipes = async () => {
		const response = await fetch(
			`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
		);
		const data = await response.json();
		setRecipes(data.hits);
	};

	return (
		<div className="App">
			<form className="search-form">
				<input className="search-bar" type="text"></input>
				<button className="search-button" type="submit">
					Search
				</button>
			</form>
		</div>
	);
}

export default App;
