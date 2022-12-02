import React from 'react';
import ProductCard from '../components';
import '../styles/custom-styles.css';

const ShoppingPage = () => {
	const product = {
		id    : 1,
		title : 'Coffee Mug - Card',
		img   : './coffee-mug.png',
	};

	return (
		<div>
			<h1>Shopping store</h1>
			<hr />
			<div
				style={{
					display       : 'flex',
					flexDirection : 'row',
					flexWrap      : 'wrap',
				}}
			>
				<ProductCard
					product={product}
					className='bg-dark'
				>
					<ProductCard.Image
						className='custom-image'
						style={{
							boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)',
						}}
					/>
					<ProductCard.Title className='text-white' />
					<ProductCard.Buttons
						className='custom-buttons'
						style={{
							display        : 'flex',
							justifyContent : 'flex-end',
							flexWrap       : 'wrap',
						}}
					/>
				</ProductCard>

				<ProductCard
					product={product}
					style={{ backgroundColor: '#70D1FB' }}
				>
					<ProductCard.Image className='custom-image' />
					<ProductCard.Title className='text-white' />
					<ProductCard.Buttons className='custom-buttons' />
				</ProductCard>
			</div>
		</div>
	);
};

export default ShoppingPage;
