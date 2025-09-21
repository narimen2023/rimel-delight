const special = {
	id: 99,
	name: 'Monthly Special: Almond Delight',
	desc: 'A rich almond pastry with a modern twist 🍯',
	price: 20,
	img: '/assets/dziriat.jpg',
};

export default function Special({ addToCart }) {
	return (
		<div className='max-w-lg mx-auto text-center bg-white rounded-2xl shadow p-6'>
			<img
				src={special.img}
				alt={special.name}
				className='rounded-xl w-full h-60 object-cover'
			/>
			<h2 className='text-2xl font-bold mt-4'>{special.name}</h2>
			<p className='text-gray-600 mt-2'>{special.desc}</p>
			<p className='text-lg font-semibold mt-2'>${special.price}</p>
			<button
				onClick={() => addToCart(special)}
				className='mt-3 px-5 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600'>
				Add to Cart
			</button>
		</div>
	);
}
