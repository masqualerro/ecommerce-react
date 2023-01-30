import React, { useContext } from 'react';
import { productList } from '../../products';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cartItem';

export const Cart = () => {
	const { cartItems, getTotalCartAmount } = useContext(ShopContext);
	const totalAmount = getTotalCartAmount();

	return (
		<div className="shoppingCart">
			<div>
				<h1>Cart</h1>
				<div className="inCart">
					{productList.map((Product) => {
						if (cartItems[Product.id] !== 0) {
							return <CartItem data={Product} />;
						}
					})}
				</div>
				<div className="total">
					<p> Subtotal: ${totalAmount.toFixed(2)} </p>
				</div>
			</div>
		</div>
	);
};
