import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context';

/* 
react-router-dom provides a way to navigate between pages on a single page web app -- 
eg I can navigate betwen my shop and cart without reloading the page and losing universal cart array

by wrapping all routes in <ShopContextProvider> I have access to all functions on a universal scale
*/

function App() {
	return (
		<div className="App">
			<ShopContextProvider>
				<Router>
					<Navbar />
					<Routes>
						<Route path="/*" element={<Shop />}></Route>
						<Route path="/cart" element={<Cart />}></Route>
					</Routes>
				</Router>
			</ShopContextProvider>
		</div>
	);
}

export default App;
