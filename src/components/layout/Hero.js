import React from "react";

const Hero = () => {
	return (
		<div className='backdrop'>
			<div className='ui left aligned container'>
				<div className='ui one column grid'>
					<div className='row' style={{ marginTop: "200px", width: "100%" }}>
						<div className='column' style={{ width: "100%" }}>
							<div className='ui inverted header' style={{ fontSize: "4rem" }}>
								Get Access to <b className='ui green header'>Free</b> study pack
							</div>
							<p style={{ fontSize: "1.5rem" }}>
								<b className='ui orange header'>
									stay ahead of your peers with the amazing study tools
								</b>
							</p>

							<button
								className='ui green massive button'
								style={{ marginTop: "3rem", marginBottom: "4rem" }}
							>
								<a href='/signup'>Get Started</a>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
