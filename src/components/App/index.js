import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../Layout';

import HomePage from '../../pages/HomePage';
import GeneratorPage from '../../pages/GeneratorPage';
import BlocksPage from '../../pages/BlocksPage';

import './app.css';

const App = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/generator' element={<GeneratorPage />} />
				<Route path='/blocks' element={<BlocksPage />} />
			</Routes>
		</Layout>
	);
};

export default App;
