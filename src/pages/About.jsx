import { useNavigate } from 'react-router-dom';
import React from 'react';

export default function About() {
	const navigate = useNavigate();

	return (
		<div className='p-8 max-w-3xl mx-auto text-center'>
			<h1 className='text-4xl font-bold mb-6'>About Us</h1>
			<p className='text-lg leading-relaxed mb-4'>
				Welcome to Rimel Delight, where authentic tradition meets irresistible
				innovation. We specialize in creating handcrafted sweets that honor the
				rich flavors of our heritage while introducing exciting new twists for
				today’s taste buds. From classic Algerian treats to modern flavor
				pairings, every creation is made with premium ingredients, heartfelt
				care, and a passion for sharing the joy of dessert.
			</p>
			<p className='text-lg leading-relaxed mb-4'>
				Whether you’re planning a wedding, celebrating a special event, or
				simply craving something sweet, Rimel Delight is here to make every
				moment more delicious. Our mission is simple: to create sweets that
				taste like home but feel like something new, leaving a lasting
				impression on every bite.
			</p>
			<p className='text-lg font-semibold mb-8'>
				✨ Authentic flavors, new experiences—crafted just for you.
			</p>

			<div className='flex justify-center gap-6'>
				<button
					className='px-6 py-3 bg-pink-500 text-white rounded-xl hover:bg-pink-600'
					onClick={() => navigate('/signature-sweets')}>
					Signature Sweets
				</button>
				<button
					className='px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600'
					onClick={() => navigate('/call-to-action')}>
					Call to Action
				</button>
			</div>
		</div>
	);
}
