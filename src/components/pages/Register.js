import React from "react";
import Input from "../util/Input";
import Countries from "../util/Countries";
import "./Register.css";

const Register = () => {
	return (
		<>
			<div className='' id='register'>
				<div className='backdropR'>
					<div
						className='ui vertical container'
						style={{ margin: "150px", width: "50%" }}
					>
						<div className='ui two column grid '>
							<h2 class='ui green header' style={{ marginLeft: "150px" }}>
								<div className='content'>Sign up for free</div>
							</h2>
							<div className='column' style={{ width: "100%" }}>
								<form className='ui form  segment'>
									<Input
										title={"First Name"}
										type={"text"}
										icon={"user outline"}
									/>
									<Input
										title={"Last Name"}
										type={"text"}
										icon={"user outline"}
									/>
									<Input title={"Email"} type={"email"} icon={"at"} />
									<Input title={"Phone Number"} type={""} icon={"phone"} />
									<Countries />
									<Input title={"State"} type={"text"} icon={"flag"} />
									<Input title={"City"} type={"text"} icon={"building"} />
									<button
										className='ui green fluid button'
										style={{ marginTop: "2rem", marginBottom: "2rem" }}
									>
										Sign Up
									</button>

									<div className='ui header small'>
										Have an account?click here <a href='/login'>login</a>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
