import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import '../../App.css';

export const CartItem = (props) => {
	const { id, name, pricing, image } = props.data;
	const { cartItems, addToCart, minusCart } = useContext(ShopContext);

	return (
		<div id={id} className="cartItem">
			<img src={image} alt="" />
			<div className="cartInfo">
				<h2 className="cartName">{name}</h2>
				<p className="cartPrice">${pricing}</p>
				<div className="counter">
					<button onClick={() => minusCart(id)}>-</button>
					{cartItems[id]}
					<button onClick={() => addToCart(id)}>+</button>
				</div>
			</div>
		</div>
	);
};
