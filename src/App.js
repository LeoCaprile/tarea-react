import Header from './components/header/header.component';
import React, { useState, useContext, createContext } from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Men from './pages/men/Men';
import Women from './pages/women/Women';
import Footer from './components/footer/footer.component';
import ItemImage from './components/item-image/item-image.component';
import ItemPage from './pages/item-page/item-page.component';

export const RouteContext = createContext();

function App() {
	const [ ruta, setRuta ] = useState('/');
	const [ sneakerData, setSneakerData ] = useState({});
	return (
		<div>
			<RouteContext.Provider value={{ ruta, setRuta, sneakerData, setSneakerData }}>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/men" component={Men} />
					<Route path="/women" component={Women} />
					<Route path={`/${ruta}`} component={ItemPage} />
				</Switch>
			</RouteContext.Provider>
		</div>
	);
}

export default App;
