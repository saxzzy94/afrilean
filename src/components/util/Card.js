import React from "react";
import "./Card.css";

const Card = props => {
	return (
		<div className='ui segment size'>
			<div className='ui center aligned icon header'>
				<img src={props.img} alt={props.title} />
				<h2 className='ui header'>{props.title}</h2>
				<p>{props.description}</p>
			</div>
		</div>
	);
};

export default Card;
