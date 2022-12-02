import React from 'react';
import ProductCard from '../components';

const ShoppingPage = () => {
	const product = {
		id: 1,
		title: 'Coffee Mug - Card',
		img: './coffee-mug.png',
	};

	return (
		<div>
			<h1>Shopping store</h1>
			<hr />
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
				}}
			>
				<ProductCard product={product}>
					<ProductCard.Image />
					<ProductCard.Title title='' />
					<ProductCard.Buttons />
				</ProductCard>
			</div>
		</div>
	);
};

export default ShoppingPage;
