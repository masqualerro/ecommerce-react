import React, { createContext } from 'react';
import { useState } from 'react';
import { productList } from '../products';

export const ShopContext = createContext(null);

const getCart = () => {
	let cart = {};
	for (let i = 1; i < productList.length + 1; i++) {
		cart[i] = 0;
	}
	return cart;
};

export const ShopContextProvider = (props) => {
	const [cartItems, setCartItems] = useState(getCart());

	const getTotalCartAmount = () => {
		let totalAmount = 0;
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				let itemInfo = productList.find((Product) => Product.id === Number(item));
				totalAmount += cartItems[item] * itemInfo.pricing;
			}
		}
		return totalAmount;
	};

	const addToCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
	};

	const minusCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
	};

	const shopValue = { cartItems, addToCart, minusCart, getTotalCartAmount };

	console.log(cartItems);

	return <ShopContext.Provider value={shopValue}>{props.children}</ShopContext.Provider>;
};
