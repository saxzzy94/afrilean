import React from "react";

import "./Landing.css";

import Hero from "../layout/Hero";
import Explore from "../layout/Explore";

const Landing = () => {
	return (
		<>
			<div className='showcase'>
				<Hero />
			</div>
			<Explore />
		</>
	);
};

export default Landing;
