import Header from './components/header/header.component';
import React, { useState, createContext } from 'react';
import './App.css';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Home from './pages/home/home';
import Men from './pages/men/Men';
import Women from './pages/women/Women';
import ItemPage from './pages/item-page/item-page.component';

export const RouteContext = createContext();

function App() {
	const [ ruta, setRuta ] = useState('/');
	const [ cart, setCart ] = useState([]);
	const [ sneakerData, setSneakerData ] = useState({});
	const [ total, setTotal ] = useState({ totalCant: 0, totalPrice: 0 });

	return (
		<div>
			<RouteContext.Provider
				value={{ ruta, setRuta, sneakerData, setSneakerData, cart, setCart, total, setTotal }}
			>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/women" component={Women} />
					<Route path="/men" component={Men} />
					<Route path={`/${ruta}`} component={ItemPage} />
				</Switch>
			</RouteContext.Provider>
		</div>
	);
}

export default App;
