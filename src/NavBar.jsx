import { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [cartOpen, setCartOpen] = useState(false);
	const { cartItems, removeFromCart } = useCart();

	return (
		<>
			<header className='navbar'>
				<div className='nav-left'>
					<button className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
						☰
					</button>
					<span className='brand'>Rimel Delight</span>
				</div>

				<div className='nav-right'>
					<button className='cart-btn' onClick={() => setCartOpen(!cartOpen)}>
						🛒
						{cartItems.length > 0 && (
							<span className='cart-count'>{cartItems.length}</span>
						)}
					</button>
				</div>
			</header>

			{menuOpen && (
				<nav className='menu'>
					<Link to='/order' onClick={() => setMenuOpen(false)}>
						Order
					</Link>
					<Link to='/products' onClick={() => setMenuOpen(false)}>
						Browse Products
					</Link>
					<Link to='/about' onClick={() => setMenuOpen(false)}>
						About Us
					</Link>
					<Link to='/contact' onClick={() => setMenuOpen(false)}>
						Contact Us
					</Link>
				</nav>
			)}

			{cartOpen && (
				<div className='cart-drawer'>
					<h2>Your Cart</h2>
					{cartItems.length === 0 ? (
						<p>Your cart is empty.</p>
					) : (
						<ul>
							{cartItems.map((item, index) => (
								<li key={index}>
									{item.name}
									<button onClick={() => removeFromCart(index)}>❌</button>
								</li>
							))}
						</ul>
					)}
				</div>
			)}
		</>
	);
}

export default Navbar;
