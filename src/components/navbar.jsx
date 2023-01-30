import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import '../App.css';

export const Navbar = () => {
	return (
		<div className="navbar">
			<h1>Record Shop</h1>
			<div className="links">
				<Link to="/">Shop</Link>
				<Link to="/cart">
					<ShoppingCart size={20} />
				</Link>
			</div>
		</div>
	);
};
