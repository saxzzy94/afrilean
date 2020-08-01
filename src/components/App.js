import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./layout/Header";
import Landing from "./pages/Landing";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import About from "./pages/About";
import Footer from "./layout/Footer";
import Register from "./pages/Register";
//import SideNav from "./layout/SideNav";

function App() {
	return (
		<div className='pusher'>
			<BrowserRouter>
				<Header />

				<Route path='/' exact component={Landing} />
				<Route path='/about' component={About} />
				<Route path='/blog' component={Blog} />
				<Route path='/login' component={Login} />
				<Route path='/signup' component={Register} />
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
