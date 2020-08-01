import React from "react";
import "./Search.css";

const Search = () => {
	return (
		<div className='ui icon search input'>
			<input className='prompt' type='text' placeholder='Search...' />
			<i className='green search icon'></i>

			<div className='results'></div>
		</div>
	);
};

export default Search;
