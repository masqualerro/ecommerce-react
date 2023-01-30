import React, { useContext } from 'react';
import '../../App.css';
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
	const { id, name, pricing, image } = props.data;
	const { addToCart } = useContext(ShopContext);

	return (
		<article id={id} className="ProductCard">
			<img className="Image" src={image} alt="" />
			<div className="ProductInfo">
				<h2 className="ProductName">{name}</h2>
				<p className="ProductPrice">${pricing}</p>
				<button onClick={() => addToCart(id)} className="AddCartButton">
					Add to Cart
				</button>
			</div>
		</article>
	);
};
