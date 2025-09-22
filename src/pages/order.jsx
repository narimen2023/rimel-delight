export default function Order({ cart }) {
	const total = cart.reduce((sum, item) => sum + item.price, 0);

	return (
		<div className='p-8 max-w-2xl mx-auto'>
			<h1 className='text-3xl font-bold mb-4'>Your Cart</h1>
			{cart.length === 0 ? (
				<p className='text-lg'>
					No items yet. Go to Products to add something! 🍬
				</p>
			) : (
				<>
					{cart.map((item, i) => (
						<div
							key={i}
							className='flex justify-between items-center border-b py-2'>
							<span>{item.name}</span>
							<span>${item.price}</span>
						</div>
					))}
					<div className='flex justify-between mt-4 font-bold text-lg'>
						<span>Total:</span>
						<span>${total}</span>
					</div>
					<button className='mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700'>
						Checkout
					</button>
				</>
			)}
		</div>
	);
}
