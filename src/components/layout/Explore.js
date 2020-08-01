import React from "react";
import Card from "../util/Card";
import waec from "../../images/waec.png";
import neco from "../../images/neco.png";
import gce from "../../images/gce.png";
import ican from "../../images/ican.png";
import jamb from "../../images/jamb.png";

const Explore = () => {
	return (
		<div className='ui container'>
			<div
				className='ui  center aligned text container '
				style={{ marginTop: "20px" }}
			>
				<h1 className='ui header'>Explore </h1>
				<h3>Stay ahead with our past questions and courses</h3>
			</div>
			<div className='ui segment'>
				<div className='ui four column grid stackable'>
					<h1 className='ui left aligned header'>O'Level </h1>
					<div className='row stackable segment'>
						<div className='column'>
							<Card
								img={waec}
								title={"Waec"}
								description={
									"	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
								}
							/>
						</div>
						<div className='column'>
							<Card
								img={neco}
								title={"Neco"}
								description={
									"	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
								}
							/>
						</div>
						<div className='column'>
							<Card
								img={gce}
								title={"GCE"}
								description={
									"	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
								}
							/>
						</div>
						<div className='column'>
							<Card
								img={jamb}
								title={"JAMB"}
								description={
									"	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
								}
							/>
						</div>
					</div>
				</div>
				<div className='ui  grid stackable'>
					<h1 className='ui left aligned header'>Professionals </h1>
					<div className='row segment'>
						<div className='  column'>
							<Card
								img={ican}
								title={"ICAN"}
								description={
									"	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
								}
							/>
						</div>
					</div>
				</div>
				<div className='ui  grid stackable'>
					<h1 className='ui left aligned header'>Courses </h1>
					<div className='row segment'>
						<div className='  column'>
							<Card
								img={ican}
								title={"ICAN"}
								description={
									"	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
								}
							/>
						</div>
					</div>
				</div>

				<div className='ui  grid stackable '>
					<h1 className='ui left aligned header'>Universities </h1>
					<div className='row segment'>
						<div className='  column'>
							<Card
								img={ican}
								title={"ICAN"}
								description={
									"	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
								}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Explore;
