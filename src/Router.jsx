import { Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Checkout from './Checkout.jsx'; // ✅ keep only ONE

export default function Router() {
	return (
		<Routes>
			<Route path='/' element={<App />} />
			<Route path='/checkout' element={<Checkout />} />
		</Routes>
	);
}
