import React from "react";

const Footer = () => {
	return (
		<div
			className='ui vertical footer segment inverted '
			style={{ height: "300px" }}
		>
			<div className='ui container segment inverted'>
				<div
					class='ui four column grid double stackable segment divided inverted'
					style={{ height: "200px" }}
				>
					<div className='column'>
						<h2 className='ui header inverted'>About Us</h2>
						<div className='item'>Our mission</div>
						<div className='item'>we Our Vision</div>
						<div className='item'>Our Goal</div>
					</div>
					<div class='column'>
						<h2 className='ui header inverted'>Our Services</h2>
						<div className=' menu'>
							<div className='item'>Courses</div>
							<div className='item'>Past Questions</div>
							<div className='item'></div>
						</div>
					</div>

					<div class='column'>
						<h2 className='ui header inverted'>Follow Us</h2>
						<div className='menu'>
							<div className='item'>
								<i className='green facebook f icon'></i>Facebook
							</div>
							<div className='item'>
								<i className='green twitter icon'></i>Twitter
							</div>
							<div className='item'>
								<i className='green instagram icon'></i>Instagram
							</div>
						</div>
					</div>
					<div class='column'>
						<h2 className='ui header inverted'>Contact us</h2>
						<div className='menu'>
							<div className='item'>
								<i className='green home icon'></i>6 Gbemisola Street, opposite
								Kalakuta Museum, First Bank Bus stop, Allen Avenue, Ikeja Lagos
							</div>
							<div className='item' style={{ padding: "20px" }}>
								<i className='green phone icon'></i>
								+2348051544949
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
