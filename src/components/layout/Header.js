import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/afrilearn_logo.png";
import Search from "../util/Search";

const Header = () => {
	const [show, handleShow] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else {
				handleShow(false);
			}
		});
		return () => {
			window.removeEventListener("scroll");
		};
	}, []);

	return (
		<div
			class={`ui top inverted pointing fixed menu ${
				show ? "nav__dark" : "secondary"
			}`}
		>
			<div className='ui container'>
				<div className='left menu '>
					<a href='/'>
						<img
							className='item'
							src={logo}
							alt='Afrilearn'
							style={{ width: "150px", objectFit: "contain", margin: "0" }}
						/>
					</a>
				</div>

				<div className='right menu '>
					<Link to='/' className='item active'>
						Home
					</Link>
					<Link to='/blog' className='item'>
						Blog
					</Link>
					<Link to='/about' className='item'>
						About
					</Link>
					<div className='item'>
						<Search />
					</div>
					<div className='right menu'>
						<Link to='/signup' className='item'>
							signup
						</Link>
						<Link to='/login' className='item'>
							signin
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
