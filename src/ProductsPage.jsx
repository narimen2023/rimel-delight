import { useCart } from './CartContext';

function ProductsPage() {
	const { addToCart } = useCart();

	const products = [
		{ id: 1, name: 'Mini Donuts' },
		{ id: 2, name: 'Strawberry Cake' },
		{ id: 3, name: 'Chocolate Delight' },
	];

	return (
		<div className='page'>
			<h1>Browse Products</h1>
			<ul className='order-links'>
				{products.map((product) => (
					<li key={product.id}>
						{product.name}
						<button className='order-btn' onClick={() => addToCart(product)}>
							Add to Cart
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ProductsPage;
