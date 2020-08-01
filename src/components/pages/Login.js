import React from "react";
import Input from "../util/Input";

import "./Register.css";

const Login = () => {
	return (
		<div>
			<div className='' id='register'>
				<div className='backdropR'>
					<div
						className='ui vertical container'
						style={{ margin: "150px", width: "50%" }}
					>
						<div className='ui two column grid '>
							<h2 class='ui green header' style={{ marginLeft: "150px" }}>
								<div className='content'>Log in to your account</div>
							</h2>
							<div className='column' style={{ width: "100%" }}>
								<form className='ui form  segment'>
									<Input title={"Email"} type={"email"} icon={"at"} />
									<Input title={"Password"} type={"password"} icon={"lock"} />

									<button
										className='ui green fluid button'
										style={{ marginTop: "2rem", marginBottom: "2rem" }}
									>
										Sign In
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
