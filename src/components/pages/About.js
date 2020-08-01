import React from "react";
import "./About.css";

const About = () => {
	return (
		<div className='ui container ' id='about'>
			<div className='backdropA'>
				<div className='row'>
					<div className='seven wide column'>
						<div className='ui text  container content_box'>
							<h2 className='ui header inverted' style={{ marginLeft: "45%" }}>
								About Us
							</h2>
							<div className=' ui left aligned about_text'>
								<p>
									Afrilearn is Africa’s free education portal. We believe in
									free, world-class education for Africans, and our mission is
									to provide excellent educational content for Africans,
									anywhere.
								</p>

								<p>
									Afrilearn offers practice exercises, instructional videos, and
									a personalized learning dashboard that empower learners to
									study at their own pace anywhere and anytime. We tackle WAEC,
									JAMB, NECO, Professional Exams, African University Curriculum
									and more. We're also partnering with key institutions across
									Africa to offer more specialized content.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
