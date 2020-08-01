import React from "react";
import "./Blog.css";

const Blog = () => {
	return (
		<>
			<div id='about'>
				<div className='backdropB'>
					<div className='ui container'></div>
				</div>
			</div>
			<div className='row'>
				<div className='column'>
					<div>
						<h2
							className='ui  green header inverted '
							style={{ marginLeft: "45%" }}
						>
							Blog
						</h2>
						<div className=' ui left aligned about_text'></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Blog;
