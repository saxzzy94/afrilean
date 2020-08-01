import React from "react";

const Footer = () => {
	return (
		<div
			className='ui vertical footer segment inverted '
			style={{ height: "300px" }}
		>
			<div className='ui menu  inverted segment'>
				<div
					class='ui center aligned  column grid equal height stackable segment divided inverted'
					style={{ height: "100%", width: "100%" }}
				>
					<div className=' four wide column segment inverted'>
						<h2 className='ui header inverted segment'>About Us</h2>
						<div className='ui list link inverted segment'>
							<div className='item'>Our mission</div>
							<div className='item'>we Our Vision</div>
							<div className='item'>Our Goal</div>
						</div>
					</div>
					<div class='four wide column inverted segment'>
						<h2 className='ui header inverted segment'>Our Services</h2>
						<div className=' ui list link inverted segment'>
							<div className='item'>Courses</div>
							<div className='item'>Past Questions</div>
							<div className='item'></div>
						</div>
					</div>
					<div class='four wide column segment inverted '>
						<h2 className='ui header segment inverted'>Follow Us</h2>
						<div className='ui list link inverted segment'>
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
					<div class='four wide column segment inverted'>
						<h2 className='ui header inverted'>Contact us</h2>
						<div className='ui list link inverted segment'>
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
