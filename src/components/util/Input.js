import React from "react";

const Input = props => {
	return (
		<div>
			<div className='field container'>
				<label>{props.title}</label>
				<div className='ui left icon input'>
					<i className={`${props.icon} icon`}></i>
					<input
						type={props.type}
						name={props.title}
						placeholder={props.title}
					/>
				</div>
			</div>
		</div>
	);
};

export default Input;
