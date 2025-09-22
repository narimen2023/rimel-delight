const products = [
	{
		id: 1,
		name: 'Baklava',
		desc: 'Crispy layers with honey & nuts',
		price: 15,
		img: '/assets/baklava.jpg',
	},
	{
		id: 2,
		name: 'Dziriat',
		desc: 'Almond-filled pastry with syrup',
		price: 12,
		img: '/assets/dziriat.jpg',
	},
	{
		id: 3,
		name: 'Makroud',
		desc: 'Semolina & date delight',
		price: 10,
		img: '/assets/makroud.jpg',
	},
];

export default function Products({ addToCart }) {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
			{products.map((p) => (
				<div key={p.id} className='rounded-2xl shadow p-4 bg-white'>
					<img
						src={p.img}
						alt={p.name}
						className='rounded-xl w-full h-48 object-cover'
					/>
					<h2 className='text-xl font-bold mt-3'>{p.name}</h2>
					<p className='text-gray-600'>{p.desc}</p>
					<p className='text-lg font-semibold mt-2'>${p.price}</p>
					<button
						onClick={() => addToCart(p)}
						className='mt-3 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600'>
						Add to Cart
					</button>
				</div>
			))}
		</div>
	);
}
