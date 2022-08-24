// import React from "react";
// import {
// 	BrowserRouter as Router,
// 	Switch,
// 	Route,
// 	Link
// } from "react-router-dom";

// export default function App() {
// 	return (
// 		<Router>
// 			<div>
// 				<nav>
// 					<ul>
// 						<li>
// 							<Link to="/">Home</Link>
// 						</li>
// 						<li>
// 							<Link to="/about">About</Link>
// 						</li>
// 						<li>
// 							<Link to="/users">Users</Link>
// 						</li>
// 					</ul>
// 				</nav>

// 				{/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
// 				<Switch>
// 					<Route path="/about">
// 						<About />
// 					</Route>
// 					<Route path="/users">
// 						<Users />
// 					</Route>
// 					<Route path="/">
// 						<Home />
// 					</Route>
// 				</Switch>
// 			</div>
// 		</Router>
// 	);
// }

// function Home() {
// 	return <h2>Home</h2>;
// }

// function About() {
// 	return <h2>About</h2>;
// }

// function Users() {
// 	return <h2>Users</h2>;
// }



import React from 'react';
import cl from './header.module.css'
import { Route, Routes, Link } from 'react-router-dom';

import { Home } from '../../pages/Home'
import { About } from '../../pages/About'
import { Blog } from '../../pages/Blog'
import { Story } from '../../pages/Story'


const header = () => {
	return (
		<>
			<div className={cl.header}>
				<strong>LOGO</strong>
				<div className={cl.headerLinks}>
					<Link to="/blog">Blog</Link>
					<Link to="/about">About</Link>
					<Link to="/story">Story</Link>


					{/* <link rel="stylesheet" href="#" />Blog
					<div></div>
					<link rel="stylesheet" href="#" />About
					<div></div>
					<link rel="stylesheet" href="#" />Story */}
				</div>
				<div className={cl.headerSearch}>
					<input type="text" placeholder="Search.." />
				</div>
			</div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/about' element={<About />} />
				<Route path='/story' element={<Story />} />
			</Routes>
		</>
	);
};

export default header;