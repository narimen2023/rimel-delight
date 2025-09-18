// main.js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Router from './Router.jsx';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './CartContext.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<CartProvider>
				<Router />
			</CartProvider>
		</BrowserRouter>
	</StrictMode>
);
