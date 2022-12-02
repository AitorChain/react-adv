import ProductCard from '../components';
import { products } from '../data/products';
import useShoppingCart from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';

const ShoppingPage = () => {
	const { shoppingCart, onProductCountChange } = useShoppingCart();

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
				{products.map((product) => (
					<ProductCard
						product={product}
						key={product.id}
						className='bg-dark text-white'
						onChange={onProductCountChange}
						value={shoppingCart[product.id]?.count || 0}
					>
						<ProductCard.Image className='custom-image' />
						<ProductCard.Title className='text-white' />
						<ProductCard.Buttons className='custom-buttons' />
					</ProductCard>
				))}
			</div>

			<div className='shopping-cart'>
				{Object.entries(shoppingCart).map(([key, product]) => (
					<ProductCard
						key={key}
						product={product}
						className='bg-dark text-white'
						style={{ width: '100px' }}
						onChange={onProductCountChange}
						value={product.count}
					>
						<ProductCard.Image className='custom-image' />
						<ProductCard.Buttons className='custom-buttons' />
					</ProductCard>
				))}
			</div>
		</div>
	);
};

export default ShoppingPage;
