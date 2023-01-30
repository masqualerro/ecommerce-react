import React from 'react';
import { productList } from '../../products';
import { Product } from './product';
import '../../App.css';

export const Shop = () => {
	return (
		<div className="shop">
			<div className="products">
				{productList.map((product) => (
					<Product data={product} />
				))}
			</div>
		</div>
	);
};
