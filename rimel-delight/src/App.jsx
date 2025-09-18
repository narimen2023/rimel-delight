import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
	const navigate = useNavigate();
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className='page'>
			{/* 🛒 Cart icon on the left */}
			<button
				className='cart-icon'
				aria-label='Go to checkout'
				onClick={() => navigate('/checkout')}>
				🛒
			</button>

			{/* ☰ Hamburger icon on the right */}
			<button
				className='hamburger'
				aria-label='Toggle menu'
				onClick={() => setMenuOpen(!menuOpen)}>
				☰
			</button>

			{/* Dropdown menu when open */}
			{menuOpen && (
				<nav className='menu'>
					<a href='#order' onClick={() => setMenuOpen(false)}>
						Order Here
					</a>
					<a href='#products' onClick={() => setMenuOpen(false)}>
						Products
					</a>
					<a href='#month-special' onClick={() => setMenuOpen(false)}>
						Month Special
					</a>
					<a href='#about' onClick={() => setMenuOpen(false)}>
						About Us
					</a>
				</nav>
			)}

			{/* Main content */}
			<main className='content'>
				<img src='/logo.png' alt='Rimel Delight Logo' className='logo' />
				<h1>Rimel Delight</h1>
				<p className='tagline'>Authentic taste, made with love 🍰</p>
				<button className='order-btn'>Order Here</button>
			</main>

			{/* Social footer */}
			<footer className='socials'>
				<a
					href='https://instagram.com/rimel_delights'
					target='_blank'
					rel='noreferrer'>
					<img src='/instagram.svg' alt='Instagram' />
				</a>
				<a
					href='https://facebook.com/YOUR_USERNAME'
					target='_blank'
					rel='noreferrer'>
					<img src='/facebook.svg' alt='Facebook' />
				</a>
				<a
					href='https://tiktok.com/@YOUR_USERNAME'
					target='_blank'
					rel='noreferrer'>
					<img src='/tiktok.svg' alt='TikTok' />
				</a>
			</footer>
		</div>
	);
}

export default App;
